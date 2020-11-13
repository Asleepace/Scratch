import { TextArea } from 'components/textarea'
import React from 'react'
import { Container } from '../components'
import { TextArea as TextAreaCode } from '../components/textarea'
import { expressHook } from 'api/express'


export const App = () => {
  const [request] = expressHook('/testAPI')

  return (
    <Container connection={request?.text}>
      <TextAreaCode />
    </Container>
  )
}