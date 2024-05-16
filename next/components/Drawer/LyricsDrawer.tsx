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
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import { ReactNode, useEffect, useRef, useState } from 'react'

export default function LyricsDrawer(props: { children: ReactNode }) {
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const bgAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio('/degen-chorus.mp3')
    audio.volume = 0.75
    bgAudioRef.current = audio

    const timer = setTimeout(() => {
      setTooltipVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleOpen = () => {
    onOpen()

    setTooltipVisible(false)

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
      <Tooltip
        placement={'bottom'}
        label={'click me'}
        hasArrow
        isOpen={tooltipVisible}
      >
        <Flex onClick={handleOpen} cursor={'pointer'}>
          {props.children}
        </Flex>
      </Tooltip>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent backgroundImage="linear-gradient(to top, gray.700 0%, gray.900 100%)">
            <DrawerHeader>
              <DrawerCloseButton />
            </DrawerHeader>
            <DrawerBody>
              <Center>
                <Text fontSize="2xl" textAlign="start" whiteSpace="pre-wrap">
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
