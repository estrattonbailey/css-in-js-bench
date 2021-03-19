import React from 'react'
import { render } from 'react-dom'
import { hypostyle } from 'hypostyle'
import presets from 'hypostyle/presets'
import { Hypo, Box } from '@hypobox/react'

import * as hypoboxBench from './benchmarks/Hypobox'
import * as styledComponents from './benchmarks/StyledSystem'

const theme = hypostyle(presets)

export const ITERATIONS = 10000

theme.injectGlobal({
  'html, body': {
    m: 0,
    p: 0,
  },
  'h1, h2, h3, h4, h5, h6, p': {
    m: 0,
  }
})

function Runner (props) {
  const [i, setI] = React.useState(null)
  const [runs, setRuns] = React.useState(0)
  const [timeStart, setTimeStart] = React.useState(0)
  const [timeLast, setTimeLast] = React.useState(0)
  const [timeTotal, setTimeTotal] = React.useState(0)

  const start = React.useCallback(() => {
    setTimeStart(performance.now())
    setI(1)
  }, [i, setI])

  const stop = React.useCallback(() => {
    setI(null)
    setRuns(runs + 1)

    const timeEnd = performance.now()
    const newTimeLast = timeEnd - timeStart

    setTimeLast(newTimeLast)
    setTimeTotal(newTimeLast + timeTotal)
  }, [runs, timeStart, timeTotal])

  React.useEffect(() => {
    if (i === null) return

    if (i > 100) {
      stop()
      return
    }

    setI(i + 1)
  }, [i, stop])

  return (
    <Box p={6}>
      <Box as="h1" fs={4} mb={2} ta='center'>{props.title}</Box>
      <Box fs={4}>
        <Box as="button" onClick={start}>{'run'}</Box>
        <Box ml={2}>time: {timeLast}ms</Box>
        <Box ml={2}>average: {timeTotal / runs}ms over {runs} runs</Box>
      </Box>

      {props.bench({ i })}
    </Box>
  )
}

function App() {
  return (
    <>
      <Runner {...hypoboxBench} />
      <Runner {...styledComponents} />
    </>
  )
}

render(
  (
    <Hypo value={theme}>
      <App />
    </Hypo>
  ),
  document.getElementById('app')
)
