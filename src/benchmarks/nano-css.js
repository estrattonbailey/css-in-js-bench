import { test } from '../test'
import { create } from 'nano-css';
import { addon as rule } from 'nano-css/addon/rule';
import { addon as cache } from 'nano-css/addon/cache'

const nano = create();

rule(nano);
cache(nano);

export function bench () {
  const { run } = test({
    render(i) {
      const outer = nano.rule({
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })
      const inner = nano.rule({
        width: 10 + i / 2 + 'px',
        height: 10 + i / 2 + 'px',
        background: 'tomato',
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
