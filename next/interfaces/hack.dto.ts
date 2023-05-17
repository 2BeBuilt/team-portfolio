import Prize from './prize.dto'

export default interface Hackathon {
  name: string
  logo: string
  date: string
  project: string
  prizes: Prize[]
}
