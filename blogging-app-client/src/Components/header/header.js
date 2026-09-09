import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Navigate, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ['Home','MyBlogs','LogOut'];

function DrawerAppBar(props) {

    const navigator = useNavigate();    
   
    function navigateToPage(item){

        if(item=="logout"){
            logoutUser();
        }
else{
        navigator(`/${item}`)
    }
    }
    
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              BLOG NEST
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} onClick={()=>navigateToPage(item)} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const logoutUser = ()=>{
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        navigator("/")

    }

    const container = window !== undefined ? () => window().document.body : undefined;

    

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar  component="nav" style={{backgroundColor:"black" , color:"white"}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        onClick={()=> navigator("/home")}
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                     <span id="app-bar-logo">Blog Nest</span>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, color:"white" }}>
                        {navItems.map((item) => (
                            <Button  onClick={()=>{
                                navigateToPage(item.toLowerCase())
                            }}  key={item} sx={{ color: 'white' }}>
                                {item}
                            </Button>
                        ))}
                        <IconButton title='Logout' onClick={logoutUser} style={{ color: "white" }}>
                            <ExitToAppIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                      
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </Box>
    );
}


export default DrawerAppBar;



// const Header = ()=>{

//     return(
//         <div>hello from header</div>
//     )
// }

// export default Header;