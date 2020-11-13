import React from 'react'
import { Header } from '../components/header'

interface Props { }

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className={"container"}>
      <Header />
      <div className={"content"}>
        {children}
      </div>
    </div>
  )
}
