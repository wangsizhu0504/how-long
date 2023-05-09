export interface Options {
  dotSize: number
  dotColor: string
  backgroundColor: string
  layout: 'vertical' | 'horizontal'
  highlightWeekend: boolean
  weekendColor: string
}

export const defaultOptions: Options = {
  dotSize: 5,
  dotColor: '#389e0d',
  backgroundColor: '#000',
  highlightWeekend: false,
  weekendColor: '#1890ff',
  layout: 'vertical',
}
