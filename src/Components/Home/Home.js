import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import NoteArea from '../NoteArea/NoteArea'
import Sidebar from '../Sidebar/Sidebar'
import TrashArea from '../TrashArea/TrashArea'
import ArchiveArea from '../ArchiveArea/ArchiveArea'

const Home = () => {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<NoteArea />} />
          <Route path='trash' element={<TrashArea />} />
          <Route path='archive' element={<ArchiveArea />} />
        </Routes>
      </Router>
    </Box>
  )
}

export default Home
