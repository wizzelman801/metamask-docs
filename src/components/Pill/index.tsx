import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'
import styles from './styles.module.css'

const colors = new Set(['green', 'red', 'orange', 'blue', 'grey'])

type PillProps = PropsWithChildren<{
  color: 'green' | 'red' | 'orange' | 'blue' | 'grey'
}>

export default function Pill({ color, children }: PillProps) {
  if (!colors.has(color)) {
    throw new Error(
      `Invalid color: ${color}. Available colors are: ${Array.from(colors).join(', ')}`
    )
  }

  return (
    <mark role="note" className={clsx(styles.pill, styles[`pill--${color}`])}>
      {children}
    </mark>
  )
}
