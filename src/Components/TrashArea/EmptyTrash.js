import { styled } from '@mui/system'
import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { Typography } from '@mui/material'

const NoteCard = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 20vh;
`

const EmptyTrash = () => {
  return (
    <NoteCard>
      <DeleteOutlinedIcon style={{ fontSize: '7rem', color: '#c0c0c0' }} />
      <Typography style={{ fontSize: '1.5rem', color: '#80868B' }}>
        No notes in Trash
      </Typography>
    </NoteCard>
  )
}

export default EmptyTrash
