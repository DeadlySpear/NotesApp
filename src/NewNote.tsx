import {Form, Stack, Row, Col, Button,} from "react-bootstrap"
import CreatableReactSelect from "react-select/creatable"
import {Link} from "react-router-dom"
import { useRef, useState} from "react"
import type { NoteData, Tag } from "./App"

type NoteFormProps = {
  onSubmit: (data: NoteData) => void
}

export default function NewNote({ onSubmit}: NoteFormProps) {
  const titleRef=useRef<HTMLInputElement>(null)
  const markdownRef=useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  function submitHandler(e: React.FormEvent) {
    e.preventDefault()
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    })
  }
  return (
    <Form onSubmit={submitHandler}>
      <Stack gap={4}>
        <Row>
          <h1>Create a Note</h1>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required ref={titleRef}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect isMulti value={selectedTags.map(tag=>{return {label: tag.label, value: tag.id}})} 
                onChange={tags => {
                  setSelectedTags(tags.map(tag=>{return {label: tag.label, id: tag.value}}))
                }}/>
            </Form.Group>
          </Col>
        </Row>
            <Form.Group controlId="markdown">
              <Form.Label>Body</Form.Label>
              <Form.Control required as="textarea" rows={15} ref={markdownRef} />
            </Form.Group>
            <Stack direction="horizontal" gap={2}>
              <Button type="submit" variant="primary">Save</Button>
              <Link to="..">
              <Button type="button" variant="outline-secondary">Cancel</Button>
              </Link>
            </Stack>
      </Stack>
    </Form>
  )
}