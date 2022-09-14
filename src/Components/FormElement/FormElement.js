import { ClickAwayListener, styled, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { NoteContext } from '../../Context/Context'
const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  padding: 0.3rem 1rem;
  border-color: #e0e0e0;
  max-width: 600px;
  min-width: 250px;
  border-radius: 8px;
  min-height: 30px;
  margin: auto;
  transition: 0.3s all ease-in-out;
`

const FormElement = () => {
  const [show, setShow] = useState(false)

  const { notes, setNotes } = useContext(NoteContext)

  const [note, setNote] = useState({
    id: uuid(),
    title: '',
    tagline: '',
    text: '',
  })

  const onTextAreaClick = () => {
    setShow(true)
  }
  const handleClickAway = () => {
    setShow(false)
    setNote({ ...note, id: uuid() })
    if (note.title || note.text || note.tagline) {
      setNotes((state) => [note, ...state])
    }
    setNote({
      id: uuid(),
      title: '',
      tagline: '',
      text: '',
    })
    console.log(notes)
  }

  const handleNoteChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Container>
          {show && (
            <>
              <TextField
                placeholder='Title'
                variant='standard'
                InputProps={{ disableUnderline: true }}
                name='title'
                sx={{ width: '50%' }}
                onChange={(e) => handleNoteChange(e)}
                value={note.title}
              />
              <TextField
                placeholder='Tagline'
                variant='standard'
                InputProps={{ disableUnderline: true }}
                sx={{ width: '50%' }}
                value={note.tagline}
                onChange={(e) => handleNoteChange(e)}
                name='tagline'
              />
            </>
          )}
          <TextField
            placeholder='Take a note...'
            variant='standard'
            onClick={onTextAreaClick}
            multiline
            name='text'
            InputProps={{ disableUnderline: true }}
            onChange={(e) => handleNoteChange(e)}
            value={note.text}
          />
        </Container>
      </ClickAwayListener>
    </>
  )
}

export default FormElement
