

import React from 'react'
import { useStickyState } from '../api/storage'
import { markdown } from 'markdown'


export type OnChangEvent = React.FormEvent<HTMLDivElement>

export const Content: React.FC<{}> = () => {
  const [data, setData] = useStickyState("", "data");
  const markup = markdown.toHTML(data)
  const onChnage = (event: OnChangEvent) => {
    console.log('[content] on change:', event.currentTarget)
    setData(event.currentTarget.innerText)
  }
  return (
    <div id={'display-content'} contentEditable={true} onChange={onChnage}
      suppressContentEditableWarning={true} onBlur={onChnage}>
      {markup}
    </div>
  )
}