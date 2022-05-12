import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../styles/Navbar.css"
const theme = createTheme({
  palette: {
    primary: {
      main: '#0b010f'
    }
  }
})

const sections = ['AboutMe', 'Skills', 'Portafolio', 'Contact']

export const Navbar = () => {
  const [anchorElNav, setanchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => { 
    setanchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = (event) => {
    setanchorElNav(null)
  }
  return (
    <Box sx={{ flexGrow: 1}}>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" color='primary'>
        <Toolbar variant="regular" sx={{ justifyContent: 'space-between'}}>
          <a className='logo' href='#Home'>
            <Typography variant="h6" color="inherit" component="div">
              WEB DESIGNER
            </Typography>
          </a>


          <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }, }}>
              {sections.map((section) => (
                <MenuItem key={section} onClick={handleCloseNavMenu}>
                  <a className='page' href={`#${section}`}>
                    <Typography textAlign="center">{section}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box  sx={{  display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section) => (
              <a className='page' href={`#${section}`}>
                  <Button key={section} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    {section}
                  </Button>
              </a>

            ))}
          </Box>

        </Toolbar>
      </AppBar>
      </ThemeProvider>
      
    </Box>
  );
}
