import React from 'react'
import { rootReducer } from '../redux/reducers'

/** Interfaces
 * 
 *  This file consolidates all of the applications types into a single file for easy access
 *  and organization since we subclass many native elements.
 */

export interface ViewProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  styles?: React.CSSProperties | React.CSSProperties[]
}

export type TextProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type TextAreaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export interface Stock {
  name?: string,
  paid?: number,
  sold?: number,
  diff?: number,
  id: number,
}

export type RootState = ReturnType<typeof rootReducer>