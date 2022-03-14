import React from 'react'
import BookList from '../pages/BookList'
import DailyRoutineList from '../pages/DailyRoutineList'
import Navi from './Navi'
import Figure from 'react-bootstrap/Figure'
export default function Dashbaoard() {
  
    return (
    <div>
      <Navi/>
      <BookList/>
      <DailyRoutineList/>
    </div>
    
  )
}
