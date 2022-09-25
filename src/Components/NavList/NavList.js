import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Archive from '@mui/icons-material/ArchiveOutlined'
import Lightbulb from '@mui/icons-material/LightbulbOutlined'
import Delete from '@mui/icons-material/DeleteOutlineOutlined'
import { Link } from 'react-router-dom'
const NavList = () => {
  const lists = [
    {
      id: 1,
      name: 'Notes',
      icon: <Lightbulb sx={{ padding: 0, margin: 0 }} />,
      route: '/notekeeper',
    },
    { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
    { id: 3, name: 'Trash', icon: <Delete />, route: '/trash' },
  ]

  return (
    <List>
      {lists.map((list) => (
        <Link
          key={list.id}
          to={`${list.route}`}
          style={{ textDecoration: 'none', color: '#5f6368' }}
        >
          <ListItem
            button
            sx={{
              borderBottomRightRadius: '2rem',
              borderTopRightRadius: '2rem',
            }}
          >
            <ListItemIcon>{list.icon}</ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItem>
        </Link>
      ))}
    </List>
  )
}

export default NavList
