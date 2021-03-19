import React from 'react'
import { hypostyle } from 'hypostyle'
import presets from 'hypostyle/presets'
import { Hypo, Box } from '@hypobox/react'

import { ITERATIONS } from '../'

const theme = hypostyle(presets)

export function bench({ i }) {
  const size = ((i / ITERATIONS) * 100 + 10) + 'px'

  return (
    <Hypo value={theme}>
      <Box f aic jcc h="500px" style={{ overflow: 'hidden' }}>
        <Box mx={2} w={size} h={size} bg='blue' style={{
          borderRadius: '1000px'
        }} />
        <Box mx={2} w={size} h={size} bg='blue' style={{
          transform: `translateY(${1000 / i}px)`,
        }} />
      </Box>
    </Hypo>
  )
}

export const title = '@hypobox/react'
