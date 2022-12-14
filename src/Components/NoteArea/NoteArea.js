import Lightbulb from '@mui/icons-material/LightbulbOutlined'
import { Grid, Pagination, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { NoteContext } from '../../Context/Context'
import FormElement from '../FormElement/FormElement'
import Note from '../Note/Note'

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}))

const EmptyContainer = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 20vh;
`

const PaginationContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`
const MAX_NOTE = 6
const NoteArea = () => {
  const [page, setPage] = useState({
    number: 0,
    start: 0,
    end: MAX_NOTE,
  })
  const { notes, setNotes, pinnedNotes } = useContext(NoteContext)

  const handlePageChange = (e, value) => {
    setPage({
      number: value,
      start: value * MAX_NOTE - MAX_NOTE,
      end: value * MAX_NOTE,
    })
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(notes.slice(page.start, page.end))
    const [reordered] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reordered)
    const newarr = [
      ...notes.slice(0, page.start),
      ...items,
      ...notes.slice(page.end),
    ]
    setNotes(newarr)
  }
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
        <FormElement />

        {pinnedNotes.length > 0 ? (
          // <PinnedArea>
          <div style={{ marginTop: '1rem' }}>
            <Typography
              sx={{ fontSize: '0.9rem', fontWeight: '500', color: '#d3d3d3' }}
            >
              PINNED
            </Typography>
            <Grid container spacing={1}>
              {pinnedNotes.map((pinnedNote) => (
                <Grid key={pinnedNote.id} item xs={12} md={4} lg={2}>
                  <Note note={pinnedNote} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : // </PinnedArea>
        null}
        {notes.length > 0 ? (
          <>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId='droppable' direction='horizontal'>
                {(provided) => (
                  <div style={{ marginTop: '1rem' }}>
                    {pinnedNotes.length > 0 ? (
                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          color: '#d3d3d3',
                        }}
                      >
                        OTHERS
                      </Typography>
                    ) : null}
                    <Grid
                      container
                      spacing={1}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {/* {just to get rid of the error} */}
                      <span style={{ display: 'none' }}>
                        {provided.placeholder}
                      </span>
                      {notes.slice(page.start, page.end).map((note, index) => (
                        <Draggable
                          key={note.id}
                          draggableId={note.id}
                          index={index}
                        >
                          {(provided) => (
                            <Grid
                              xs={12}
                              md={4}
                              lg={2}
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
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </>
        ) : (
          <EmptyContainer>
            <Lightbulb style={{ fontSize: '7rem', color: '#c0c0c0' }} />
            <Typography style={{ fontSize: '1.5rem', color: '#80868B' }}>
              Notes you add appear here
            </Typography>
          </EmptyContainer>
        )}
        {notes.length > 0 ? (
          <PaginationContainer>
            <Pagination
              count={Math.ceil(notes.length / MAX_NOTE)}
              shape='rounded'
              page={page.number}
              onChange={handlePageChange}
              variant='outlined'
            />
          </PaginationContainer>
        ) : null}
      </Box>
    </Box>
  )
}

export default NoteArea
