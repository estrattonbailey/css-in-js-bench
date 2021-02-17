import { test } from '../test'
import { css } from '@emotion/css';

export function bench () {
  const { run } = test({
    render(i) {
      const outer = css`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      `
      const inner = css`
        width: ${10 + i / 2}px;
        height: ${10 + i / 2}px;
        background: tomato;
        border-radius: 1000px;
      `

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

