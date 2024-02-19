import { useRef } from 'react'

import { ContentMotion, TextMotion, WrapperMotion } from './styles'

import { wrap } from '@motionone/utils'
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion'

interface ParallaxProps {
  children: string
  baseVelocity: number
}

export default function ParallaxText({
  children,
  baseVelocity = 100
}: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <WrapperMotion>
      <ContentMotion style={{ x }}>
        <TextMotion>{children}</TextMotion>
        <TextMotion>{children}</TextMotion>
        <TextMotion>{children}</TextMotion>
        <TextMotion>{children}</TextMotion>
      </ContentMotion>
    </WrapperMotion>
  )
}
