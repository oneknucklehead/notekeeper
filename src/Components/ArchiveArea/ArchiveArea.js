import React from 'react'
import { styled } from '@mui/material'
import { Box } from '@mui/system'

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}))
const ArchiveArea = () => {
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
        display archive here
      </Box>
    </Box>
  )
}

export default ArchiveArea
