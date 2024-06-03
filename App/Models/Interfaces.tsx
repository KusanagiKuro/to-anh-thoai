// Interface for the default response of all API in the app
export interface IResponse<T>{
  data?: T | null
  error?: string | null
  loading: boolean
}

export interface PaginationData<T>{
  data: Array<T> | null
  page: number
  pageSize: number
}

// Interface for user that will be used to login and stored in the local database
export interface LocalUser {
  seed: string
  email: string
  password: string
}

// Interface for user that will be returned from the API
export interface OnlineUser {
  gender: string
  name: Name
  email: string
  dob: Dob
  phone: string
  cell: string
  id: Id
  picture: Picture
}

export interface Name {
  title: string
  first: string
  last: string
}

export interface Dob {
  date: string
  age: number
}

export interface Id {
  name: string
  value: string
}

export interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface FilterData {
  searchPhrase?: string
  statuses?: Array<string>
}