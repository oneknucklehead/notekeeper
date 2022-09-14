import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Archive from '@mui/icons-material/ArchiveOutlined'
import Lightbulb from '@mui/icons-material/LightbulbOutlined'
import Delete from '@mui/icons-material/DeleteOutlineOutlined'
const NavList = () => {
  const lists = [
    {
      id: 1,
      name: 'Notes',
      icon: <Lightbulb sx={{ padding: 0, margin: 0 }} />,
    },
    { id: 2, name: 'Archives', icon: <Archive /> },
    { id: 3, name: 'Trash', icon: <Delete /> },
  ]

  return (
    <List>
      {lists.map((list) => (
        <ListItem
          key={list.id}
          button
          sx={{
            borderBottomRightRadius: '2rem',
            borderTopRightRadius: '2rem',
          }}
        >
          <ListItemIcon>{list.icon}</ListItemIcon>
          <ListItemText primary={list.name} />
        </ListItem>
      ))}
    </List>
  )
}

export default NavList
