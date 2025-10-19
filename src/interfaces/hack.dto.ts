import Prize from './prize.dto'
import Social from './social.dto'

export default interface Hackathon {
  name: string
  logo: string
  date: string
  project: string
  prizes: Prize[]
  socials?: Social[]
}
