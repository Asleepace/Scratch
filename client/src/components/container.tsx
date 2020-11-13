import React from 'react'

interface Props {
  connection?: string
}

export const Container: React.FC<Props> = ({ connection = "offline", children }) => {
  return (
    <div className={"container"}>
      <header className={"header"}>
        <p className={"header-title"}>Phoenix</p>
        <div className={"v-line"} />
        <p className={"header-message"}>{connection}</p>
      </header>
      <div className={"content"}>
        {children}
      </div>
    </div>
  )
}
