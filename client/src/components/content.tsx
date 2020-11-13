import React from 'react'
import { useStickyState } from '../api/storage'

export type OnChangEvent = React.FormEvent<HTMLDivElement>

export const Content: React.FC<{}> = () => {
  const [data, setData] = useStickyState("", "data");
  const onChnage = (event: OnChangEvent) => {
    const current = event.currentTarget
    console.log({ current })
    setData(current.textContent)
  }
  return (
    <div id={'display-content'} contentEditable={true} onChange={onChnage}>
      {data}
    </div>
  )
}