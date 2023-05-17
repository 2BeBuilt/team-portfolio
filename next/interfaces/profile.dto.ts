import Social from './social.dto'

export default interface Profile {
  name: string
  title: string
  img: string
  socials: Social[]
}
