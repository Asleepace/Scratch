

import React from 'react'
import { useStickyState } from '../api/storage'
import { markdown } from 'markdown'


export type OnChangEvent = React.FormEvent<HTMLDivElement>

export const Content: React.FC<{}> = () => {
  const [data, setData] = useStickyState("", "data");
  const onChange = (event: OnChangEvent) => {
    setData(event.currentTarget.innerText)
  }
  return (
    <div
      dangerouslySetInnerHTML={{ __html: markdown.toHTML(data) }}
      suppressContentEditableWarning={true}
      onInput={onChange}
      contentEditable={true}
      id={'display-content'}
      onBlur={onChange}
    />
  )
}