import Backer from './backer.dto'
import Social from './social.dto'

export default interface Project {
  name: string
  description: string
  img: string
  socials: Social[]
  backers?: Backer[]
  screenshots?: string[]
}
