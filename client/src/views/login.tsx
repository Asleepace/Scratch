import React from 'react'
import { View, Input } from '../components'
import * as Auth from '../api/robinhood'
import CircularIntegration from '../components/buttons'

enum Status { LOGIN = 'login', MFA = 'mfa', LOADING = 'loading', SUCCESS = 'success' }

interface State {
  status: Status,
}

export class LoginView extends React.Component<{}, State> {
  username = ''
  password = ''

  constructor(props: any) {
    super(props)
    this.state = {
      status: Status.LOGIN,
    }
  }

  onClick = async () => {
    await this.loginWithUser()
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('login on submit:', e)
    alert(e)
    e.preventDefault()
  }

  loginWithUser = async () => {
    this.setState({ status: Status.LOADING })
    try {
      const { username, password } = this
      console.log('[login] on click:', this.username, this.password)
      const result = await Auth.loginWithCredentials(username, password)
      console.log('[Login] loginWithUser:', result)
      if (result?.mfa_required) {
        this.setState({ status: Status.MFA })
      }
    } catch (error) {
      console.log('[Login] login with user error', error)
    } finally {
      this.setState({ status: Status.LOGIN })
    }
  }

  validate2FAToken = async (token: string) => {
    this.setState({ status: Status.LOADING })
    try {
      const authorization = await Auth.multiFactorLogin(token)
      console.log('[Login] validate token', authorization)
      if (true) {
        this.setState({ status: Status.SUCCESS })
      }

    } catch (error) {
      console.log('[Login] validate token', error)
      this.setState({ status: Status.SUCCESS })
    } finally {
      this.setState({ status: Status.MFA })

    }
  }

  loginScreen = (mfa_required?: boolean) => mfa_required ?
    this.multiFactorScreen() : this.emailLoginScreen()


  emailLoginScreen = () => (
    <View className={"login-inputs"}>
      <Input id={"username"} type={"text"} placeholder={"username"} onChange={() => null} />
      <div className={"spacer"} />
      <Input id={"password"} type={"password"} placeholder={"password"} onChange={() => null} />
    </View>
  )

  multiFactorScreen = () => (
    <View className={"login-inputs"}>
      <Input id={"code"} type={"text"} placeholder={"code"} onChange={() => null} />
    </View>
  )

  getScreenFromStatus = () => {
    if (this.state.status === Status.LOADING) return null
    if (this.state.status === Status.LOGIN) return this.emailLoginScreen()
    if (this.state.status === Status.MFA) return this.multiFactorScreen()
    return this.loginScreen()
  }

  render() {
    const { status } = this.state
    const isLoading = status === Status.LOADING
    const onSuccess = status === Status.SUCCESS
    console.log({ isLoading, onSuccess })
    return (
      <View className={"center"}>
        <form className={"login-content"} onSubmit={this.onSubmit}>
          {isLoading ? null : <h1>Login</h1>}
          {this.getScreenFromStatus()}
          <CircularIntegration title={"AUTHENTICATE"} onClick={this.onClick} status={status} />
        </form>
      </View>
    )
  }
}
