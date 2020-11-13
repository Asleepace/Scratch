import React from 'react'
import { TextAreaProps } from '../interfaces'
import { useStickyState } from '../api/storage'
import { request } from '../api/express'

export const TextArea: React.FC<{}> = () => {
  const [data, setData] = useStickyState("", "data");

  request('/testAPI').then(response => {
    setData(`${data}\n\n${response}`)
  })

  return <textarea defaultValue={data} onChange={e => {
    setData(e.target.value)
  }} />
}