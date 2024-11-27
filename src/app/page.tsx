import React from 'react'
import { Sample } from '@/components/Sample'

export default function Home() {
  const greeting: string = 'Hello World'

  return (
    <div className="bg-red-100 p-4 pt-12">
      <div>{greeting}</div>
      <Sample />
    </div>
  )
}
