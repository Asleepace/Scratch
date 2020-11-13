import React from 'react'
import * as express from '../api/express'


export const Header: React.FC<{}> = () => {

  const [isConnected, setConnected] = React.useState<boolean>(false)

  const status = isConnected ? "Connected" : "Disconnected"
  const styles = isConnected ? "header-message" : "header-message red-text"

  express.request('/testAPI').then(response => {
    setConnected(response.code === 200)
  })

  return (
    <header className={"header"}>
      <p className={"header-title"}>Phoenix</p>
      <div className={"v-line"} />
      <p className={styles}>{status}</p>
    </header>
  )
}
