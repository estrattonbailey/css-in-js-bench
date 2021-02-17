import * as nanoCss from './benchmarks/nano-css'
import * as emotion from './benchmarks/emotion'
import * as hypostyle from './benchmarks/hypostyle'
import * as goober from './benchmarks/goober'

document.body.innerHTML = `
  <div style="padding-top: 20px">
    <nav style="position: absolute; top: 0; z-index: 100">
      <a href="/emotion">/emotion</a>
      <a href="/nano-css">/nano-css</a>
      <a href="/hypostyle">/hypostyle</a>
      <a href="/goober">/goober</a>
    </nav>
    <div id="root"></div>
  </div>
`

!(async () => {
  if (window.location.pathname === '/nano-css') {
    nanoCss.bench()
  }
  if (window.location.pathname === '/emotion') {
    emotion.bench()
  }
  if (window.location.pathname === '/hypostyle') {
    hypostyle.bench()
  }
  if (window.location.pathname === '/goober') {
    goober.bench()
  }
})()
