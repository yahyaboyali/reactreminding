import React from 'react'
import { useParams } from 'react-router-dom'

export default function BookDetail() {
  let {id} = useParams()
  return (
    <div>BookDetail+ {id}</div>
  )
}
