export function test ({
  render
}) {
  return {
    run() {
      const then = performance.now()

      for (let i = 0; i < 1000; i++) {
        render(i)
      }

      return performance.now() - then
    }
  }
}
