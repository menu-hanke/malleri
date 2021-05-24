export interface Post {
  body: string
  id: number
  title: string
}

export interface ModelFunctionPublicationDetails {
  date: string
  modeledBy: string[]
  publishedIn: string
  references: string[]
}

export interface ModelFunctionTechnicalDetails {
  writtenBy: string
  programmingLanguage: string
  file: string
  // TODO: model this?
  dependencies: any
  siblingModels: any
}

export interface ModelFunctionInput {
  name: string
  varname: string
  description: string
  group: string
  unit: string
}

export interface ModelFunctionOutput {
  varname: string
  group: string
  unit: string
  type: string
}

export interface ModelFunctionCertificationDetails {
  certifiedBy: string
  version: string
  date: string
  modified: string
  validation: object
  calibration: any
}

export interface ModelFunctionGeneralDetails {
  name: string
  group: string
  description: string
  applicableTo: any
  output: ModelFunctionOutput[]
  input: ModelFunctionInput[]
}

export interface ModelFunction {
  publicationDetails: ModelFunctionPublicationDetails
  technicalDetails: ModelFunctionTechnicalDetails
  certificationDetails: ModelFunctionCertificationDetails
  generalDetails: ModelFunctionGeneralDetails
  additionalContent: any
}

export interface ModelFunctionPackage {
  package: string
  searchPhrases: string[]
  models: ModelFunction[]
}
