import React, { useState, useEffect } from 'react'

const host = "http://localhost:9000"

export interface ApiResponse {
  response: Response,
  text?: string,
  json?: string,
  code: number,
}


/* Public methods  - - - - - - - - - - - - - - - - - - - - - - */


export const expressHook = (path: string) => {
  console.log('[express] hook called: ', path)
  const [response, setResponse] = useState<ApiResponse>()

  useEffect(() => {
    const handleResponse = (response: ApiResponse) => {
      setResponse(response)
    }
    requestExpress(path)
      .then(handleResponse)
      .catch(error => console.log('[express] hook error:', error))
  })

  return [response]
}


export const requestExpress = async (path: string = '') => {
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
  return { response, text, code: response.status }
}