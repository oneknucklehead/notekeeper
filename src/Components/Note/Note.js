import { CardContent, styled, Typography } from '@mui/material'
import React from 'react'

const NoteCard = styled('div')`
  border: 1px solid #c0c0c0;
  border-radius: 8px;
  background: #fff;
  transition: all 0.1s ease-in-out;
  overflow-wrap: break-word;
  &:hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
    transition: all 0.1s ease-in-out;
  }
`

const Note = ({ note }) => {
  return (
    <NoteCard>
      <CardContent>
        <Typography
          sx={{ fontSize: '1rem', fontWeight: 'bold' }}
          //   color='text.secondary'
          gutterBottom
        >
          {note.title}
        </Typography>
        <Typography
          sx={{ fontSize: '1rem' }}
          color='text.secondary'
          gutterBottom
        >
          {note.tagline}
        </Typography>
        <Typography sx={{ fontSize: '1rem' }} color='text.primary' gutterBottom>
          {note.text}
        </Typography>
      </CardContent>
    </NoteCard>
  )
}

export default Note
