import React from 'react'
import { ThemeProvider, css } from 'styled-components'
import { theme, Box } from '@truework/ui'

import { ITERATIONS } from '../'

export function bench({ i }) {
  const size = ((i / ITERATIONS) * 100 + 10) + 'px'

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center" justifyContent="center" height="500px" style={{ overflow: 'hidden' }}>
        <Box mx="xs" width={size} height={size} bg='blue' style={{
          borderRadius: '1000px'
        }} />
        <Box mx="xs" width={size} height={size} bg='blue' style={{
          transform: `translateY(${1000 / i}px)`,
        }} />
      </Box>
    </ThemeProvider>
  )
}

export const title = 'styled-components + styled-system'
