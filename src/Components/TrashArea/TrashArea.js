import { styled } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { NoteContext } from '../../Context/Context'

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}))

const TrashArea = () => {
  const { trash, setTrash } = useContext(NoteContext)
  console.log(trash)
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader></DrawerHeader>
        display trash "yourself" here
        {trash.map((note) => (
          <div key={note.id}>
            <div>{note.title}</div>
          </div>
        ))}
      </Box>
    </Box>
  )
}

export default TrashArea
