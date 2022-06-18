# ansi-construct

[![NPM version](https://img.shields.io/npm/v/ansi-construct?color=a1b858&label=)](https://www.npmjs.com/package/ansi-construct)

Construct ANSI colors strings from object descriptors.

## Usage

```ts
import type { AnsiItem } from 'ansi-construct'
import { construct } from 'ansi-construct'

const items: AnsiItem[] = [
  { text: 'foo', color: 'red', padStart: 5 },
  { text: 'bar', color: ['green', 'bold', 'underline'] },
  ' raw text ',
  { t: 'shorthand', c: 'cyan' }
]

console.log(construct(items)) // '\x1b[31mfoo\x1b[0m \x1b[32mbar\x1b[0m raw text \x1b[36m\x1b[0m'
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [Anthony Fu](https://github.com/antfu)
