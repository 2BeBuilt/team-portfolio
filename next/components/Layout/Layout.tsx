import { ReactNode } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}
