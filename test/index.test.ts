import { describe, expect, it } from 'vitest'
import { ansi, space } from '../src'

describe('should', () => {
  it('works', () => {
    const result = [
      ansi({ text: 'hello', padStart: 10 }),
      space(),
      ansi({ t: 'world', c: 'red', pe: 2 }),
      undefined,
      ansi('foo', 'green', 'bold'),
      'bar',
    ].join('')
    expect(result)
      .toMatchInlineSnapshot('"     hello [31mworld[39m[32m[1mfoo[22m[39mbar"')
  })
})
