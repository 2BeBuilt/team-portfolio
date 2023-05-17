import Social from './social.dto'

export default interface Project {
  name: string
  description: string
  img: string
  socials: Social[]
}
