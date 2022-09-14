import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import React from 'react'
import FormElement from '../FormElement/FormElement'

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}))
const NoteArea = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader></DrawerHeader>
        <FormElement />
      </Box>
    </Box>
  )
}

export default NoteArea
