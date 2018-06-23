import React from 'react'
import {AddTodo, VisibleTodo} from 'containers'

const HomePage = () => {
  return(
    <div>
      <h1>{'\u2728'}Todo List{'\u2728'}</h1>
      <AddTodo />
      <VisibleTodo />
    </div>
  )
}

export default HomePage
