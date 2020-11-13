import React from 'react'
import { ViewProps } from '../interfaces'

/** View Component
 * 
 * This is a wrapper around the html div element to make it more react like,
 * and can be extended in the futures.
 */
export const View: React.FC<ViewProps> = (props) => {
  return <div {...props}>{props.children}</div>
}

