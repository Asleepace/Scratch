const host = "http://localhost:9000"

export interface ApiResponse {
  response: Response,
  text?: string,
  json?: string,
  code: number,
}


/* Public methods  - - - - - - - - - - - - - - - - - - - - - - */


export const request = async (path: string = '') => {
  return fetch(format(path)).then(parse)
}

/* Private methods  - - - - - - - - - - - - - - - - - - - - - - */

const format = (path: string = ''): string => {
  const formated = `${host}${path}`
  console.log('[express] fetching url:', formated)
  return formated
}

const parse = async (response: Response): Promise<ApiResponse> => {
  console.log('[express] parsing response:', { response })
  const text = await response?.text()
  const json = await response?.json()
  return { response, text, json, code: response.status }
}