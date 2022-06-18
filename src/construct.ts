import pc from 'picocolors'
import { toArray } from '@antfu/utils'
import type { AnsiItem, AnsiObject, BuiltinColors } from './types'

export function normalizeItem(item: AnsiItem, toString = true): AnsiObject {
  let result: AnsiObject

  if (typeof item === 'string') {
    result = { text: item }
  }
  else if (!item) {
    result = { text: '' }
  }
  else if (Array.isArray(item)) {
    result = {
      text: item[0],
      color: item.slice(1) as BuiltinColors[],
    }
  }
  else if ('t' in item) {
    result = {
      text: item.t,
      color: item.c,
      padStart: item.ps,
      padEnd: item.pe,
    }
  }
  else {
    result = item
  }

  if (toString)
    defineToString(result)

  return result
}

export function ansi(text: string, ...colors: BuiltinColors[]): AnsiObject
export function ansi(item: AnsiItem): AnsiObject
export function ansi(...args: any): AnsiObject {
  return normalizeItem(args.length > 1 ? args : args[0])
}

export function construct(items: AnsiItem[]): string {
  return items.map((i) => {
    return stringifyItem(normalizeItem(i, false))
  }).join('')
}

function defineToString(item: AnsiObject) {
  const toString = () => stringifyItem(item)

  if (!Object.hasOwn(item, 'toString'))
    Object.defineProperty(item, 'toString', { value: toString, enumerable: false })
  if (!Object.hasOwn(item, Symbol.toStringTag))
    Object.defineProperty(item, Symbol.toStringTag, { value: toString, enumerable: false })

  return item
}

function stringifyItem(item: AnsiObject) {
  let text = item.text
  if (item.padStart)
    text = Array.isArray(item.padStart) ? text.padStart(...item.padStart) : text.padStart(item.padStart)
  if (item.padEnd)
    text = Array.isArray(item.padEnd) ? text.padEnd(...item.padEnd) : text.padEnd(item.padEnd)

  if (item.color) {
    const colors = toArray(item.color).reverse()
    colors.forEach((c) => {
      text = pc[c](text)
    })
  }
  return text
}
