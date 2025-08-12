import Sponsor from './sponsor.dto'

export default interface Prize {
  nomination: string
  sponsor: Sponsor
  amount?: number
}
