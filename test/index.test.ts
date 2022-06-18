import { describe, expect, it } from 'vitest'
import { c, space } from '../src'

describe('should', () => {
  it('works', () => {
    const result = c(
      { text: 'hello', padStart: 10 },
      space(),
      { t: 'world', c: 'red', pe: 2 },
      undefined,
      ['foo', 'green', 'bold'],
      'bar',
    )
    // console.log(result)
    expect(result)
      .toMatchInlineSnapshot('"     hello [31mworld[39m[32m[1mfoo[22m[39mbar"')
  })
})
