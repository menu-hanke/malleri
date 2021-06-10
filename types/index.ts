export interface IOParameter {
  name: string
  unit: string | null
}

export interface ModelFunction {
  name: string
  modelId: string
  package: string
  description: string
  applicability: any
  outputs: IOParameter[]
  inputs: IOParameter[]
  reference: string
  referenceUrl: string
  year: number
  developers: string[]
  language: string
  createdDate: Date | string
  modifiedDate: Date | string
  remarks?: string
}

export interface ModelFunctionPackage {
  name: string
  description: string
  models: ModelFunction[]
}
