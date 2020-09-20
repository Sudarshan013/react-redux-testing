import React, { memo } from 'react'
import NoteList from './NoteList'
import Note from "./Note"

export default memo(function App() {
  return (
    <div>
      <Note />
      <NoteList/>
    </div>
  )
})
