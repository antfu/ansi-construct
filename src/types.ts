export interface AnsiObject {
  text: string
  color?: BuiltinColors | BuiltinColors[]
  padStart?: number | [number, string]
  /**
   * When both padStart and padEnd are set, padStart will be executed first.
   */
  padEnd?: number | [number, string]
}

export type AnsiArray =
  | [string]
  | [string, BuiltinColors]
  | [string, BuiltinColors, BuiltinColors]
  | [string, BuiltinColors, BuiltinColors, BuiltinColors]
  | [string, BuiltinColors, BuiltinColors, BuiltinColors, BuiltinColors]

export interface AnsiObjectShorthand {
  /**
   * Text
   */
  t: AnsiObject['text']
  /**
   * Color
   */
  c?: AnsiObject['color']
  /**
   * padStart
   */
  ps?: AnsiObject['padStart']
  /**
   * padEnd
   *
   * When both padStart and padEnd are set, padStart will be executed first.
   */
  pe?: AnsiObject['padEnd']
}

export type AnsiItem = AnsiObject | AnsiObjectShorthand | AnsiArray | string | undefined | null | false
export type AnsiItems = AnsiItem[]
export type AnsiLines = AnsiItems[]

export type BuiltinColors =
  | 'reset'
  | 'bold'
  | 'dim'
  | 'italic'
  | 'underline'
  | 'inverse'
  | 'hidden'
  | 'strikethrough'
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'gray'
  | 'bgBlack'
  | 'bgRed'
  | 'bgGreen'
  | 'bgYellow'
  | 'bgBlue'
  | 'bgMagenta'
  | 'bgCyan'
  | 'bgWhite'
