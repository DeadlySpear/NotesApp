import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import {Routes, Route, Navigate} from "react-router-dom"
import NewNote from './NewNote.tsx';

export type Note = {
  id: string
} & NoteData

export type NoteData ={
  title: string, tags: Tag[], markdown: string
}

export type Tag={
  id: string,
  label: string
}
function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>home</h1>}></Route>
        <Route path="/new" element={<NewNote/>}></Route>
        <Route path="*" element={<Navigate to="/"/>}></Route>
        
        <Route path="/:id">
          <Route index element={<h1>show</h1>}></Route>
          <Route path="edit" element={<h1>edit</h1>}></Route>

        </Route>

      </Routes>
    </Container>
  )     
}

export default App
