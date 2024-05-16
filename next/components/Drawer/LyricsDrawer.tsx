import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { ReactNode, useEffect, useRef } from 'react'

export default function LyricsDrawer(props: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio('/degen-chorus.wav')
    audio.volume = 0.75
    bgAudioRef.current = audio
  }, [])

  const handleOpen = () => {
    onOpen()
    const audio = bgAudioRef.current
    if (audio) {
      audio.play().catch((error) => {
        console.log('Audio play failed:', error)
      })
    } else {
      console.log('Audio element is null')
    }
  }

  return (
    <>
      <Flex onClick={handleOpen} cursor={'pointer'}>
        {props.children}
      </Flex>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <DrawerCloseButton />
            </DrawerHeader>
            <DrawerBody>
              <Center>
                <Text fontSize="2xl" textAlign="center" whiteSpace="pre-wrap">
                  Web3 degen, on a quest so bold,{'\n'}
                  In the land of crypto, searching for gold.{'\n'}
                  Degenerative me, lost in the thrill,{'\n'}
                  Building dreams on buildr.build.
                </Text>
              </Center>
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
