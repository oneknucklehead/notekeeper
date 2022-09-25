import {
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  styled,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { NoteContext } from '../../Context/Context'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import PushPinIcon from '@mui/icons-material/PushPin'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EmptyTrash from './EmptyTrash'
import TrashNote from './TrashNote'

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
        {trash.length > 0 ? (
          <Grid container spacing={1}>
            {trash.map((note) => (
              <Grid item key={note.id} xs={12} md={4} lg={2}>
                <TrashNote note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyTrash />
        )}
      </Box>
    </Box>
  )
}

export default TrashArea
