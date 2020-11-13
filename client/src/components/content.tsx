

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
  const props = { text, setEdit, onChange }
  return edit ? <EditableContent {...props} /> : <DisplayedContent {...props} />
}

interface EditableProps {
  onChange?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined,
  setEdit: (edit: boolean) => void,
  text: string
}

const EditableContent: React.FC<EditableProps> = ({ text, onChange, setEdit }) => (
  <div
    suppressContentEditableWarning={true}
    onBlur={() => setEdit(false)}
    onChange={onChange}
    contentEditable={true}
    defaultValue={text}
    id={'display-content'}
  />
)

const DisplayedContent: React.FC<EditableProps> = ({ text, setEdit }) => (
  <div
    dangerouslySetInnerHTML={{ __html: markdown.toHTML(text) }}
    suppressContentEditableWarning={true}
    onClick={() => setEdit(true)}
    id={'display-content'}
  />
)