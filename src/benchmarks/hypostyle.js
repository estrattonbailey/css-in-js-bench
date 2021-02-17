import { test } from '../test'
import { hypostyle } from 'hypostyle';
import * as presets from 'hypostyle/presets'

const { css } = hypostyle(presets)

export function bench () {
  const { run } = test({
    render(i) {
      const outer = css({
        abs: true,
        cover: true,
        f: true,
        aic: true,
        jcc: true,
      })
      const inner = css({
        w: 10 + i / 2 + 'px',
        h: 10 + i / 2 + 'px',
        bg: 'tomato',
        borderRadius: '1000px'
      })

      document.getElementById('root').innerHTML = `
        <div class="${outer}">
          <div class="${inner}"></div>
        </div>
      `
    }
  })

  document.getElementById('root').innerHTML = `
    <button id="button">Run</button>
  `

  document.getElementById('button').onclick = () => {
    const time = run()
    alert(time + 'ms')
  }
}

