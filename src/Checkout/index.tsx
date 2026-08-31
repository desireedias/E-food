import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../store'
import { close, clear } from '../store/reducers/cart'
import { usePurchaseMutation } from '../services/api'
import Button from '../Button'
import { formataPreco } from '../utils/formatters'

import * as S from './styles'

type Props = {
  onBackToCart: () => void
}

const deliveryValidationSchema = Yup.object({
  receiver: Yup.string()
    .min(3, 'Digite um nome válido')
    .required('O campo é obrigatório'),

  description: Yup.string()
    .min(3, 'Digite um endereço válido')
    .required('O campo é obrigatório'),

  city: Yup.string()
    .min(2, 'Digite uma cidade válida')
    .required('O campo é obrigatório'),

  zipCode: Yup.string()
    .matches(/^\d{8}$/, 'Digite um CEP válido com 8 dígitos')
    .required('O campo é obrigatório'),

  number: Yup.string()
    .matches(/^\d+$/, 'Digite um número válido')
    .required('O campo é obrigatório'),

  complement: Yup.string()
})

const paymentValidationSchema = Yup.object({
  nameOnCard: Yup.string()
    .min(3, 'Digite o nome completo do cartão')
    .required('O campo é obrigatório'),

  cardNumber: Yup.string()
    .matches(/^\d{13,19}$/, 'Digite um número de cartão válido')
    .required('O campo é obrigatório'),

  cvv: Yup.string()
    .matches(/^\d{3,4}$/, 'Digite um CVV válido')
    .required('O campo é obrigatório'),

  expiresMonth: Yup.string()
    .matches(/^(0[1-9]|1[0-2])$/, 'Digite um mês válido')
    .required('O campo é obrigatório'),

  expiresYear: Yup.string()
    .matches(/^\d{4}$/, 'Digite um ano válido')
    .required('O campo é obrigatório')
})

const Checkout = ({ onBackToCart }: Props) => {
  const [step, setStep] = useState<'delivery' | 'payment' | 'confirmation'>(
    'delivery'
  )

  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [purchase, { data, isLoading }] = usePurchaseMutation()

  const getValorTotal = () => {
    return items.reduce((acumulador, item) => acumulador + item.preco, 0)
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      nameOnCard: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },

    validationSchema:
      step === 'delivery' ? deliveryValidationSchema : paymentValidationSchema,

    onSubmit: async (values) => {
      try {
        const res = await purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),

          delivery: {
            receiver: values.receiver,
            address: {
              description: values.description,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.number),
              complement: values.complement
            }
          },

          payment: {
            card: {
              name: values.nameOnCard,
              number: values.cardNumber,
              code: Number(values.cvv),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        }).unwrap()

        if (res.orderId) {
          dispatch(clear())
          setStep('confirmation')
        }
      } catch (error) {
        alert('Ocorreu um erro ao processar o pagamento.')
      }
    }
  })

  const checkFieldError = (fieldName: string) => {
    const isTouched = form.touched[fieldName as keyof typeof form.touched]
    const isInvalid = form.errors[fieldName as keyof typeof form.errors]

    return isTouched && isInvalid ? 'error' : ''
  }

  const FieldError = ({ fieldName }: { fieldName: string }) => {
    const error = form.errors[fieldName as keyof typeof form.errors]
    const touched = form.touched[fieldName as keyof typeof form.touched]

    if (!touched || !error) return null

    return <small>{error}</small>
  }

  const handleDeliverySubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const touchedFields = {
      receiver: true,
      description: true,
      city: true,
      zipCode: true,
      number: true
    }

    await form.setTouched(touchedFields, false)
    const errors = await form.validateForm()

    const deliveryFields = [
      'receiver',
      'description',
      'city',
      'zipCode',
      'number'
    ]
    const hasDeliveryErrors = deliveryFields.some((field) => field in errors)

    if (!hasDeliveryErrors) {
      setStep('payment')
    }
  }

  const finishOrder = () => {
    dispatch(close())
  }

  return (
    <S.CheckoutContainer>
      {step === 'delivery' && (
        <form onSubmit={handleDeliverySubmit}>
          <h2>Entrega</h2>

          <S.InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              id="receiver"
              type="text"
              name="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkFieldError('receiver')}
            />
            <FieldError fieldName="receiver" />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="description">Endereço</label>
            <input
              id="description"
              type="text"
              name="description"
              value={form.values.description}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkFieldError('description')}
            />
            <FieldError fieldName="description" />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkFieldError('city')}
            />
            <FieldError fieldName="city" />
          </S.InputGroup>

          <S.Row>
            <S.InputGroup>
              <label htmlFor="zipCode">CEP</label>
              <input
                id="zipCode"
                type="text"
                inputMode="numeric"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkFieldError('zipCode')}
                maxLength={8}
              />
              <FieldError fieldName="zipCode" />
            </S.InputGroup>

            <S.InputGroup>
              <label htmlFor="number">Número</label>
              <input
                id="number"
                type="text"
                inputMode="numeric"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkFieldError('number')}
              />
              <FieldError fieldName="number" />
            </S.InputGroup>
          </S.Row>

          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
            />
          </S.InputGroup>

          <Button
            type="submit"
            variant="secondary"
            title="Continuar com o pagamento"
          >
            Continuar com o pagamento
          </Button>

          <Button
            type="button"
            variant="secondary"
            title="Voltar para o carrinho"
            onClick={onBackToCart}
          >
            Voltar para o carrinho
          </Button>
        </form>
      )}

      {step === 'payment' && (
        <form onSubmit={form.handleSubmit}>
          <h2>Pagamento - Valor a pagar {formataPreco(getValorTotal())}</h2>

          <S.InputGroup>
            <label htmlFor="nameOnCard">Nome no cartão</label>
            <input
              id="nameOnCard"
              type="text"
              name="nameOnCard"
              value={form.values.nameOnCard}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkFieldError('nameOnCard')}
            />
            <FieldError fieldName="nameOnCard" />
          </S.InputGroup>

          <S.Row>
            <S.InputGroup maxWidth="228px">
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                id="cardNumber"
                type="text"
                inputMode="numeric"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkFieldError('cardNumber')}
                maxLength={19}
              />
              <FieldError fieldName="cardNumber" />
            </S.InputGroup>

            <S.InputGroup maxWidth="87px">
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                type="text"
                inputMode="numeric"
                name="cvv"
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkFieldError('cvv')}
                maxLength={4}
              />
              <FieldError fieldName="cvv" />
            </S.InputGroup>
          </S.Row>

          <S.Row>
            <S.InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input
                id="expiresMonth"
                type="text"
                inputMode="numeric"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkFieldError('expiresMonth')}
                maxLength={2}
              />
              <FieldError fieldName="expiresMonth" />
            </S.InputGroup>

            <S.InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input
                id="expiresYear"
                type="text"
                inputMode="numeric"
                name="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkFieldError('expiresYear')}
                maxLength={4}
              />
              <FieldError fieldName="expiresYear" />
            </S.InputGroup>
          </S.Row>

          <Button
            type="submit"
            variant="secondary"
            title="Finalizar pagamento"
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
          </Button>

          <Button
            type="button"
            variant="secondary"
            title="Voltar para a edição de endereço"
            onClick={() => setStep('delivery')}
          >
            Voltar para a edição de endereço
          </Button>
        </form>
      )}

      {step === 'confirmation' && data && (
        <div>
          <h2>Pedido realizado - {data.orderId}</h2>

          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>

          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>

          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>

          <p>
            Esperamos que desfrute de uma experiência gastronômica incrível. Bom
            apetite!
          </p>

          <Button
            type="button"
            variant="secondary"
            title="Concluir"
            onClick={finishOrder}
          >
            Concluir
          </Button>
        </div>
      )}
    </S.CheckoutContainer>
  )
}

export default Checkout
