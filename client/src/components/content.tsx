

import React from 'react'
import { useStickyState } from '../api/storage'
import { markdown } from 'markdown'


export type OnChangEvent = React.FormEvent<HTMLDivElement>

export const Content: React.FC<{}> = () => {
  const [text, setText] = useStickyState("", "text");
  const [edit, setEdit] = React.useState(false)

  const onChange = (e: OnChangEvent) => {
    console.log('[content] saving text:', e)
    const currentText = e.currentTarget.innerText
    setText(currentText)
  }
  console.log('[Content] render:', { text, edit })
  return (
    <div className={"content"}>
      <div
        suppressContentEditableWarning={true}
        onBlur={() => setEdit(false)}
        onInput={onChange}
        contentEditable={true}
        className={'display-content'}
        defaultValue={text}
        hidden={!edit}
      />
      <div
        dangerouslySetInnerHTML={{ __html: markdown.toHTML(text) }}
        suppressContentEditableWarning={true}
        onClick={() => setEdit(true)}
        className={'display-content'}
        hidden={edit}
      />
    </div>
  )
}