import {
  CardContent,
  CardHeader,
  Fade,
  IconButton,
  Modal,
  styled,
  Typography,
  Backdrop,
  TextField,
} from '@mui/material'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import PushPinIcon from '@mui/icons-material/PushPin'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import React, { useContext, useState } from 'react'
import { NoteContext } from '../../Context/Context'
import { Box } from '@mui/system'

const NoteCard = styled('div')`
  border: 1px solid #c0c0c0;
  border-radius: 8px;
  background: #fff;
  transition: all 0.1s ease-in-out;
  overflow-wrap: break-word;
  word-break: break-all;
  &:hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
    transition: all 0.1s ease-in-out;
  }
`
const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
}

const Note = ({ note }) => {
  const { notes, setNotes, pinnedNotes, setPinnedNotes, trash, setTrash } =
    useContext(NoteContext)

  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)
  const handlePinNote = (note) => {
    if (note.pinned) {
      const updatedNotes = pinnedNotes.filter((data) => data.id !== note.id)
      setPinnedNotes(updatedNotes)
      note.pinned = false
      setNotes((state) => [note, ...state])
    } else {
      const updatedNotes = notes.filter((data) => data.id !== note.id)
      setNotes(updatedNotes)
      note.pinned = true
      setPinnedNotes((state) => [note, ...state])
    }
  }
  const handleDeleteNotes = (note) => {
    var deletedNote
    if (note.pinned) {
      deletedNote = pinnedNotes.filter((data) => data.id === note.id)
      const updatedNotes = pinnedNotes.filter((data) => data.id !== note.id)
      setPinnedNotes(updatedNotes)
    } else {
      deletedNote = notes.filter((data) => data.id === note.id)
      const updatedNotes = notes.filter((data) => data.id !== note.id)
      setNotes(updatedNotes)
    }
    setTrash((state) => [...deletedNote, ...state])
  }
  const handleModal = () => {
    setOpen(!open)
  }

  const handleNoteChange = (e) => {
    const updatedNote = { ...note, [e.target.name]: e.target.value }
    let updatedNotes
    if (
      updatedNote.title === '' &&
      updatedNote.tagline === '' &&
      updatedNote.text === ''
    ) {
      if (note.pinned) {
        updatedNotes = pinnedNotes.filter((data) => data.id !== note.id)
        setPinnedNotes([...updatedNotes])
      } else {
        updatedNotes = notes.filter((data) => data.id !== note.id)
        setNotes([...updatedNotes])
      }
    } else {
      if (note.pinned) {
        updatedNotes = pinnedNotes.filter((data) => data.id !== note.id)
        setPinnedNotes([updatedNote, ...updatedNotes])
      } else {
        updatedNotes = notes.filter((data) => data.id !== note.id)
        setNotes([updatedNote, ...updatedNotes])
      }
    }
  }
  return (
    <>
      {!open && (
        <NoteCard
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleModal}
        >
          <CardContent>
            <CardHeader
              style={{ padding: 0 }}
              titleTypographyProps={{ variant: 'h6' }}
              title={note.title}
              action={
                hover ? (
                  <IconButton
                    disableTouchRipple
                    onClick={() => handlePinNote(note)}
                  >
                    {note.pinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}
                  </IconButton>
                ) : null
              }
            />

            <Typography
              sx={{ fontSize: '0.8rem' }}
              color='text.secondary'
              gutterBottom
            >
              {note.tagline}
            </Typography>
            <Typography
              sx={{ fontSize: '1rem' }}
              color='text.primary'
              gutterBottom
            >
              {note.text}
            </Typography>
            {hover && (
              <IconButton
                disableTouchRipple
                onClick={() => handleDeleteNotes(note)}
              >
                <DeleteForeverIcon />
              </IconButton>
            )}
          </CardContent>
        </NoteCard>
      )}
      {
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={open}
          onClose={handleModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <TextField
                placeholder='Title'
                id='transition-modal-title'
                variant='standard'
                InputProps={{ disableUnderline: true }}
                name='title'
                onChange={(e) => handleNoteChange(e)}
                defaultValue={note.title}
              />
              <TextField
                placeholder='Tagline'
                id='transition-modal-title'
                variant='standard'
                InputProps={{ disableUnderline: true }}
                defaultValue={note.tagline}
                onChange={(e) => handleNoteChange(e)}
                name='tagline'
              />
              <TextField
                placeholder='Edit your note..'
                id='transition-modal-title'
                variant='standard'
                multiline
                InputProps={{ disableUnderline: true }}
                defaultValue={note.text}
                onChange={(e) => handleNoteChange(e)}
                name='text'
              />
            </Box>
          </Fade>
        </Modal>
      }
    </>
    // )
  )
}

export default Note
