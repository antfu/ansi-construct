import pc from 'picocolors'
import { toArray } from '@antfu/utils'
import type { AnsiItem, AnsiLines, AnsiObjectShorthand, ConstructOptions } from './types'

export function c(...items: AnsiItem[]): string {
  return items.map(i => constructItem(i)).join('')
}

export function construct(items: AnsiItem[], options?: ConstructOptions): string {
  return items.map(i => constructItem(i, options)).join(options?.padding ?? '')
}

export function constructLines(items: AnsiLines, options?: ConstructOptions): string {
  return items.map(i => construct(i, options)).join('\n')
}

function constructItem(item: AnsiItem, options?: ConstructOptions) {
  if (typeof item === 'string')
    return item
  if (!item)
    return ''

  if (Array.isArray(item)) {
    item = <AnsiObjectShorthand>{
      t: item[0],
      c: item.slice(1),
    }
  }
  else if ('text' in item) {
    item = <AnsiObjectShorthand>{
      t: item.text,
      c: item.color,
      ps: item.padStart,
      pe: item.padEnd,
    }
  }

  let text = item.t
  if (item.ps)
    text = Array.isArray(item.ps) ? text.padStart(...item.ps) : text.padStart(item.ps)
  if (item.pe)
    text = Array.isArray(item.pe) ? text.padEnd(...item.pe) : text.padEnd(item.pe)

  if (item.c && options?.colors !== false) {
    const colors = toArray(item.c).reverse()
    colors.forEach((c) => {
      text = pc[c](text)
    })
  }
  return text
}
