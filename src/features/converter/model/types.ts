export interface ConverterProps {
  data?: IConverterData
}

export interface IConverterData {
  coins: {
    [coinName: string]: {
      name: string,
      unit: string,
      value: number,
      type: string
    },
  },
}