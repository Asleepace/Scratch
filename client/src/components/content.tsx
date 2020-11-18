

import React from 'react'
import { useStickyState } from '../api/storage'
import { markdown } from 'markdown'

export type OnChangEvent = React.FormEvent<HTMLDivElement>

export const Content: React.FC<{}> = () => {
  const [text, setText] = useStickyState("", "text");
  const [edit, setEdit] = React.useState(false)
  const onChange = (e: OnChangEvent) => {
    setText(e.currentTarget.innerText)
  }
  return (
    <div className={"editable-content-container"}>
      <div
        suppressContentEditableWarning={true}
        onBlur={() => setEdit(false)}
        onInput={onChange}
        contentEditable={true}
        className={'editable-content'}
        defaultValue={text}
      />
      <div
        dangerouslySetInnerHTML={{ __html: markdown.toHTML(text) }}
        suppressContentEditableWarning={true}
        onClick={() => setEdit(true)}
        className={'markdown-content'}
      />
    </div>
  )
}