import React from 'react'
import { Sample } from '../components/Sample'

export default function Home() {
  const greeting: string = 'Hello World'

  return (
    <div>
      <div>{greeting}</div>
      <Sample />
    </div>
  )
}
