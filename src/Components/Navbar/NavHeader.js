import { IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MuiAppBar from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import logo from '../../Images/notekeeper.svg'
import React from 'react'

const Navbar = styled(MuiAppBar)`
  z-index: 1201; //since drawer already has a zindex of 1200
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`
const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  margin-left: 15px;
`
const NavHeader = ({ open, handleDrawer }) => {
  return (
    <Navbar position='fixed' open={open}>
      <Toolbar>
        <IconButton
          aria-label='open drawer'
          onClick={handleDrawer}
          edge='start'
          sx={{
            padding: 2,
            marginRight: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt='brand-logo' width={30} />
        <Heading>Notekeeper</Heading>
      </Toolbar>
    </Navbar>
  )
}

export default NavHeader
