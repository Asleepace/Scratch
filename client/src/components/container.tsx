import React from 'react'
interface Props { }

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className={"container"}>
      <header className={"header"}>
        <p className={"title"}>Robinhood</p>
      </header>
      <div className={"content"}>
        {children}
      </div>
    </div>
  )
}
