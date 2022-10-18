import React, {useState} from 'react';
import './App.css';
import { Note } from './modal/note.model';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Noteslist from './components/NotesList';
import CreateNotes from './components/CreateNotes';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NotesList from './components/NotesList';
function App() {
  const [notes,setNotes]=useState<Note[]>([{
    id:(new Date).toString(),
    title:"Meetings",
    text:"Schedule meeting ",
    color:"#dfdfde",
    date:(new Date).toString()
  }]);

return (
  <>
   <Header/>

  <Container className='mt-5'>
      <Row>
        <Col>
        <NotesList notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
      <Row>
        <Col>
  <CreateNotes notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
    </Container>
  
</>
)
}

export default App;
