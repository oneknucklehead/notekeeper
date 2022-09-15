import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const Note = ({ note }) => {
  return (
    <Card>
      <CardContent>
        <Typography
          sx={{ fontSize: '1rem' }}
          color='text.secondary'
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
    </Card>
  )
}

export default Note
