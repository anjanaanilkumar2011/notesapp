import * as React from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Note } from '../modal/note.model';
interface ICreateNotesProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>

}
const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({ notes, setNotes }) => {
const [error, setError] = React.useState<string>("");
const textRef = React.useRef<HTMLTextAreaElement>(null);
const titleRef = React.useRef<HTMLInputElement | null>(null);
const colorRef = React.useRef<HTMLInputElement | null>(null);
const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory");
    }
    setError("");
    setNotes([...notes, {
      id: (new Date()).toString(),
      title: (titleRef.current as HTMLInputElement).value,
      text: (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: (new Date()).toString()
    }]);
    (titleRef.current as HTMLInputElement).value="";
    (textRef.current as HTMLTextAreaElement).value="";
  }
  return (
    <>
    <h2>Create Notes</h2>
    {error && <Alert variant="danger">{error}</Alert>}
      <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formtitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title for the note" ref={titleRef} />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formtext">
          <Form.Label>Text</Form.Label>
          <Form.Control type="text" placeholder="Enter Text" as="textarea" rows={3} ref={textRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formtext">
          <Form.Label htmlFor='colourinput'>Notes color</Form.Label>
          <Form.Control type="color" id="colorInput" defaultValue={"#dfefef"} title="Choose color" ref={colorRef} />
        </Form.Group>
        <Button type="submit" variant="info">Add</Button>
      </Form>
    </>
  );
};

export default CreateNotes;
