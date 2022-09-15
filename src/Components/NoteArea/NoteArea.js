import Lightbulb from '@mui/icons-material/LightbulbOutlined'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { NoteContext } from '../../Context/Context'
import FormElement from '../FormElement/FormElement'
import Note from '../Note/Note'

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}))

const PinnedArea = styled('div')`
  background: salmon;
`

const EmptyContainer = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 20vh;
`
const NoteArea = () => {
  const { notes, setNotes } = useContext(NoteContext)

  const handleOnDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(notes)
    const [reordered] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reordered)
    setNotes(items)
  }
  console.log(notes)
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader></DrawerHeader>
        <FormElement />
        <PinnedArea></PinnedArea>
        {/* <AllNotes> */}
        {notes.length > 0 ? (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='droppable'>
              {(provided, snapshot) => (
                <Grid
                  container
                  spacing={2}
                  style={{ marginTop: '1rem' }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {notes.map((note, index) => (
                    <Draggable
                      key={note.id}
                      draggableId={note.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Grid
                          xs={2}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          item
                        >
                          <Note note={note} />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <EmptyContainer>
            <Lightbulb style={{ fontSize: '7rem', color: '#c0c0c0' }} />
            <Typography style={{ fontSize: '1.5rem', color: '#80868B' }}>
              Notes you add appear here
            </Typography>
          </EmptyContainer>
        )}
        {/* </AllNotes> */}
      </Box>
    </Box>
  )
}

export default NoteArea
