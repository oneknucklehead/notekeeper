import React, { createContext, useState } from 'react'

export const NoteContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  const [pinnedNotes, setPinnedNotes] = useState([])
  const [trash, setTrash] = useState([])
  const [archive, setArchive] = useState([])
  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        trash,
        setTrash,
        pinnedNotes,
        setPinnedNotes,
        archive,
        setArchive,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}

export default ContextProvider
