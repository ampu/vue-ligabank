export enum LocalPath {
  INDEX = `/`,
  CURRENCY = `/currency`,

  SERVICES = `/#services`,
  CREDIT_CALCULATOR = `/#credit-calculator`,
  CONTACTS = `/#contacts`,

  SIGN_IN = `/sign-in`,
  FORGOTTEN_PASSWORD = `/forgotten-password`,
  ASK_QUESTION = `/ask-question`,

  DEPOSITS = `/deposits`,
  INSURANCE = `/insurance`,
  ONLINE_SERVICES = `/online-services`,
  CREDIT_REQUEST = `/credit-request`,

  CURRENCY_TO_RATE = `/api/currency-to-rate`,
}

export const CREDIT_PATHS = [
  LocalPath.INDEX,
  LocalPath.SERVICES,
  LocalPath.CREDIT_CALCULATOR,
  LocalPath.CONTACTS,
  LocalPath.SIGN_IN,
]

export enum ExternalLink {
  FACEBOOK = `https://facebook.com/`,
  INSTAGRAM = `https://instagram.com/`,
  TWITTER = `https://twitter.com/`,
  YOUTUBE = `https://youtube.com/`,
}
