import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import HomeOutlined from '@mui/icons-material/HomeOutlined';

const Navbar = (props) => {
    return (
        <Box sx={{ marginBottom: 4 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Link to="/" style={{ color: 'white' }}>
                            <HomeOutlined />
                        </Link>
                    </IconButton>
                    <Typography variant="h3" component="div">
                        {props.header}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;