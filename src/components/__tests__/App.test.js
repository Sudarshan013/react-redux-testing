import { shallow } from "enzyme"
import App from "../App"
import React from "react"
import Note from "../Note"
import NoteList from "../NoteList"

it("Has Note Component", () => {
  const wrapped = shallow(<App/>)
  expect(wrapped.find(Note).length).toEqual(1)
})

it("Has Note List Component", () => {
  const wrapped = shallow(<App />)
  expect(wrapped.find(NoteList).length).toEqual(1)
})