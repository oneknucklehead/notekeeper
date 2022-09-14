import { Box } from '@mui/material'
import React from 'react'
import NoteArea from '../NoteArea/NoteArea'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <NoteArea />
    </Box>
  )
}

export default Home
