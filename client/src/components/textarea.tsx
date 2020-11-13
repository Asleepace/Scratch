import React from 'react'
import { TextAreaProps } from '../interfaces'
import { useStickyState } from '../api/storage'

export const TextArea: React.FC<{}> = () => {
  const [data, setData] = useStickyState("", "data");
  return <textarea defaultValue={data} onChange={e => {
    setData(e.target.value)
  }} />
}