import {
  type AnySchema, boolean, object, string,
} from 'yup'

export const createSchemaObject = (schema: Record<string, AnySchema>) => {
  return object({ ...schema })
}

export const validation = {
  // expose thirdparty validation here, when needed
  boolean,
  url: (message: string) => string().url(message),
}

export const isNumber = (value: string) => {
  const parsed = parseInt(value)
  return !isNaN(parsed) && `${parsed}` === value
}
