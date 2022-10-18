import React from 'react'
import { Note } from '../modal/note.model';
import Notes from './Notes'
interface INotesProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}
const NotesList: React.FC<INotesProps> = ({ notes,setNotes }) => {
  const handleDelete = (id: string) => {
    window.confirm("Do you want to delete")
    setNotes(notes.filter(note => note.id !== id));
  }
  const renderNotes = (): JSX.Element[] => {
    return notes.map(note => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />
    })
  }
  return (
    <>
      <h2 className='=mt-3'>Noteslist</h2>
      <div>{renderNotes()}</div>
    </>
  )
}

export default NotesList;