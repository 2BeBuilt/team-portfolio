import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function FourOuFour() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  }, [])

  return
}
