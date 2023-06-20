import {customAlphabet, nanoid, urlAlphabet} from 'nanoid'

import {CreditParametersMortgage, CreditParametersCar} from '#components'

import {isValidByConstraint, PERCENTAGE_CONSTRAINT} from '~/utils/number-helpers'

export type Constraint = {
  min: number,
  max: number,
  step: number,
}

export type FormData = {
  id: string,
  creditGoalValue: CreditGoalKey,
  propertyAmount: number,
  initialPaymentPercentage: number,
  creditPeriod: number,
  isMaternityCapital: boolean,
  isCasco: boolean,
  isLifeInsurance: boolean,
  name: string,
  phone: string,
  email: string,
}

export enum CreditGoalKey {
  DEFAULT = ``,
  MORTGAGE = `mortgage`,
  CAR = `car`,
}

const DefaultFieldConstraint = {
  PROPERTY_AMOUNT: {min: 0, max: 0, step: 0},
  INITIAL_PAYMENT_PERCENTAGE: {min: 0, max: 0, step: 5},
  CREDIT_PERIOD: {min: 0, max: 0, step: 0},
}

const MortgageFieldConstraint = {
  PROPERTY_AMOUNT: {min: 1200000, max: 25000000, step: 100000},
  INITIAL_PAYMENT_PERCENTAGE: {min: 10, max: 100, step: 5},
  CREDIT_PERIOD: {min: 5, max: 30, step: 1},
}

const CarFieldConstraint = {
  PROPERTY_AMOUNT: {min: 500000, max: 5000000, step: 50000},
  INITIAL_PAYMENT_PERCENTAGE: {min: 20, max: 100, step: 5},
  CREDIT_PERIOD: {min: 1, max: 5, step: 1},
}

/** @enum */
export const CreditGoal = {
  DEFAULT: {
    value: CreditGoalKey.DEFAULT,
    title: `Выберите цель кредита`,
    defaultFormData: {},
    creditAmountTitle: undefined,
    requestTitle: undefined,
    denialTitle: undefined,
    denialAmount: undefined,
    FieldConstraint: DefaultFieldConstraint,
    parametersComponent: undefined,
  },
  MORTGAGE: {
    value: CreditGoalKey.MORTGAGE,
    title: `Ипотечное кредитование`,
    propertyAmountTitle: `Стоимость недвижимости`,
    creditAmountTitle: `Сумма ипотеки`,
    requestTitle: `Ипотека`,
    denialTitle: `ипотечные кредиты`,
    denialAmount: 500000,
    FieldConstraint: MortgageFieldConstraint,
    defaultFormData: {
      id: ``,
      creditGoalValue: CreditGoalKey.MORTGAGE,
      propertyAmount: MortgageFieldConstraint.PROPERTY_AMOUNT.min,
      initialPaymentPercentage: MortgageFieldConstraint.INITIAL_PAYMENT_PERCENTAGE.min,
      creditPeriod: MortgageFieldConstraint.CREDIT_PERIOD.min,
      isMaternityCapital: false,
      isCasco: false,
      isLifeInsurance: false,
      name: ``,
      phone: ``,
      email: ``,
    },
    parametersComponent: CreditParametersMortgage,
  },
  CAR: {
    value: CreditGoalKey.CAR,
    title: `Автомобильное кредитование`,
    propertyAmountTitle: `Стоимость автомобиля`,
    creditAmountTitle: `Сумма автокредита`,
    requestTitle: `Автокредит`,
    denialTitle: `автокредиты`,
    denialAmount: 200000,
    FieldConstraint: CarFieldConstraint,
    defaultFormData: {
      id: ``,
      creditGoalValue: CreditGoalKey.CAR,
      propertyAmount: CarFieldConstraint.PROPERTY_AMOUNT.min,
      initialPaymentPercentage: CarFieldConstraint.INITIAL_PAYMENT_PERCENTAGE.min,
      creditPeriod: CarFieldConstraint.CREDIT_PERIOD.min,
      isMaternityCapital: false,
      isCasco: false,
      isLifeInsurance: false,
      name: ``,
      phone: ``,
      email: ``,
    },
    parametersComponent: CreditParametersCar,
  }
}

export const CREDIT_GOALS = Object.values(CreditGoal)

export type CreditGoalModel = typeof CREDIT_GOALS[number]


const MATERNITY_CAPITAL_AMOUNT = 470000

const REQUEST_ID_LENGTH = 4

const MORTGAGE_INTEREST_RATE = {
  initialPaymentPercentageThreshold: 15,
  lowerBound: 9.4,
  upperBound: 8.5,
}

const MORTGAGE_INCOME_THRESHOLD = 0.45

const CAR_INTEREST_RATE = {
  propertyAmountThreshold: 2000000,
  lowerBound: 16,
  upperBound: 15,
  withCascoOrLifeInsurance: 8.5,
  withCascoAndLifeInsurance: 3.5,
}

const CAR_INCOME_THRESHOLD = 0.45

const MONTHS_IN_YEAR = 12

export const generateRequestId = () => {
  customAlphabet(urlAlphabet, REQUEST_ID_LENGTH)
  return nanoid()
}

export const formatRequestId = (requestId: number | string) => {
  return String(requestId).padStart(REQUEST_ID_LENGTH, `0`)
}

export const calculateInitialPayment = (
  {propertyAmount, initialPaymentPercentage}: FormData
) => {
  return Math.round(propertyAmount * initialPaymentPercentage / PERCENTAGE_CONSTRAINT.max)
}

export const calculateInitialPaymentPercentage = (
  initialPaymentPercentageConstraint: Constraint,
  {propertyAmount}: FormData,
  initialPayment: number,
) => {
  return propertyAmount === 0
    ? initialPaymentPercentageConstraint.min
    : initialPayment / propertyAmount * PERCENTAGE_CONSTRAINT.max
}

export const calculateCreditAmount = ({
  creditGoalValue,
  propertyAmount,
  initialPaymentPercentage,
  isMaternityCapital
}: FormData) => {
  const initialPayment = propertyAmount / PERCENTAGE_CONSTRAINT.max * initialPaymentPercentage

  switch (creditGoalValue) {
    case CreditGoalKey.MORTGAGE:
      return propertyAmount - initialPayment - Number(isMaternityCapital && MATERNITY_CAPITAL_AMOUNT)

    case CreditGoalKey.CAR:
      return propertyAmount - initialPayment
  }
  return 0
}

export const calculateInterestRate = ({
  creditGoalValue,
  propertyAmount,
  initialPaymentPercentage,
  isCasco,
  isLifeInsurance
}: FormData) => {
  switch (creditGoalValue) {
    case CreditGoalKey.MORTGAGE:
      return initialPaymentPercentage < MORTGAGE_INTEREST_RATE.initialPaymentPercentageThreshold
        ? MORTGAGE_INTEREST_RATE.lowerBound
        : MORTGAGE_INTEREST_RATE.upperBound

    case CreditGoalKey.CAR:
      return ((isCasco && isLifeInsurance) && CAR_INTEREST_RATE.withCascoAndLifeInsurance)
        || ((isCasco || isLifeInsurance) && CAR_INTEREST_RATE.withCascoOrLifeInsurance)
        || (propertyAmount < CAR_INTEREST_RATE.propertyAmountThreshold
          ? CAR_INTEREST_RATE.lowerBound
          : CAR_INTEREST_RATE.upperBound)
  }
  return 0
}

export const calculateMonthlyPayment = (formData: FormData) => {
  const {creditPeriod} = formData

  const creditAmount = calculateCreditAmount(formData)
  const interestRate = calculateInterestRate(formData) / MONTHS_IN_YEAR / PERCENTAGE_CONSTRAINT.max
  const paymentMonths = creditPeriod * MONTHS_IN_YEAR

  return (creditAmount * interestRate) / (1 - Math.pow(1 + interestRate, -paymentMonths))
}

export const calculateMonthlyIncome = (formData: FormData) => {
  const {creditGoalValue} = formData

  switch (creditGoalValue) {
    case CreditGoalKey.MORTGAGE:
      return calculateMonthlyPayment(formData) / MORTGAGE_INCOME_THRESHOLD

    case CreditGoalKey.CAR:
      return calculateMonthlyPayment(formData) / CAR_INCOME_THRESHOLD
  }
  return 0
}

export const isValidFormData = (
  {FieldConstraint}: CreditGoalModel,
  {propertyAmount, initialPaymentPercentage, creditPeriod}: FormData,
) => {
  return isValidByConstraint(propertyAmount, FieldConstraint.PROPERTY_AMOUNT)
    && isValidByConstraint(initialPaymentPercentage, FieldConstraint.INITIAL_PAYMENT_PERCENTAGE)
    && isValidByConstraint(creditPeriod, FieldConstraint.CREDIT_PERIOD)
}

export const findCreditGoalByKey = (key: CreditGoalKey): CreditGoalModel => {
  return CREDIT_GOALS.find(({value}) => key === value)!
}
