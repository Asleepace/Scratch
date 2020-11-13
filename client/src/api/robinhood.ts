import { rejects } from 'assert'
import api, { RobinhoodWebApi } from 'robinhood'


export interface RobinhoodStore extends RobinhoodWebApi {
  set_mfa_code?: (code: string, callback: () => void) => void
}

export type RobinhoodInitResponse = {
  mfa_required?: boolean
}

// private member variables
let connection: RobinhoodStore | undefined
let accessToken: string | null | undefined = null


export const loginWithCredentials = (username: string, password: string): Promise<RobinhoodInitResponse> => new Promise((resolve) => {
  console.log('[Robinhood] loginWithCredentials:', { username, password })
  connection = api({ username, password }, resolve)
})

export const multiFactorLogin = (mfa_code: string) => new Promise(async (resolve, reject) => {
  console.log('[Robinhood] multiFactorLogin:', { mfa_code })
  connection?.set_mfa_code?.(mfa_code, () => {
    accessToken = connection?.auth_token()
    if (accessToken) resolve(true)
    else reject("failed to load token")
  })
})

