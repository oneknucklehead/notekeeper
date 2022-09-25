import { CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React, { useContext, useState } from 'react'
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import { NoteContext } from '../../Context/Context'

const Note = styled('div')`
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
    cursor: pointer;
  }
`

const TrashNote = ({ note }) => {
  const [hover, setHover] = useState(false)
  const { notes, setNotes, pinnedNotes, setPinnedNotes, trash, setTrash } =
    useContext(NoteContext)
  const handleRestore = () => {
    const toRestore = trash.filter((data) => data.id !== note.id)
    if (note.pinned) {
      setPinnedNotes((state) => [note, ...state])
    } else {
      setNotes((state) => [note, ...state])
    }
    setTrash([...toRestore])
  }

  const handleDeletePermanently = () => {
    const toRestore = trash.filter((data) => data.id !== note.id)
    setTrash([...toRestore])
  }

  return (
    <Note
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CardContent>
        <CardHeader
          style={{ padding: 0 }}
          titleTypographyProps={{ variant: 'h6' }}
          title={note.title}
        />
        <Typography
          sx={{ fontSize: '0.8rem' }}
          color='text.secondary'
          gutterBottom
        >
          {note.tagline}
        </Typography>
        <Typography sx={{ fontSize: '1rem' }} color='text.primary' gutterBottom>
          {note.text}
        </Typography>
      </CardContent>
      <div style={{ padding: '4px', height: '2.5rem' }}>
        <IconButton disableTouchRipple onClick={handleRestore}>
          {hover && <RestoreFromTrashOutlinedIcon />}
        </IconButton>
        <IconButton disableTouchRipple onClick={handleDeletePermanently}>
          {hover && <DeleteForeverOutlinedIcon />}
        </IconButton>
      </div>
    </Note>
  )
}

export default TrashNote
