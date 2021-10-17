import { Button, Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import { Menu, Home, Person, ShoppingCart } from "@mui/icons-material"
import { useState } from "react";
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from "./navbar";

const pages = [
    {
        text: 'Main',
        link: 'main',
        icon: < Home />
    },
    {
        text: 'Member',
        link: 'member',
        icon: <Person />
    },
    {
        text: 'Product',
        link: 'product',
        icon: <ShoppingCart />
    },
]
const MainPage = () => {
    return (
        <Box sx={{ backgroundColor: 'lightblue', textAlign: 'center', p: 5 }}>
            <Typography variant="h2">MainPage</Typography>
            <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Press button [<Menu />] to change page</Typography>
        </Box>
    )
}

const MemberPage = () => {
    return (
        <Box sx={{ backgroundColor: 'lightgreen', textAlign: 'center', p: 5 }}>
            <Typography variant="h2">MemberPage</Typography>
            <Typography variant="h5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore suscipit consectetur eligendi dolorum hic ipsum
                perspiciatis unde voluptatem quam, quod adipisci assumenda est magni animi, labore illum in! Accusamus, quibusdam
                aliquid commodi iure voluptas sequi libero, iusto natus mollitia error nostrum excepturi vitae, dolorum distinctio vel
                saepe eligendi hic sint?</Typography>
            <Button variant="contained" sx={{ m: 2 }}>สมัครเป็นสมาชิก</Button>
        </Box>
    )
}

const ProductPage = () => {
    return (
        <Box sx={{ backgroundColor: 'lightpink', textAlign: 'center', p: 5 }}>
            <Typography variant="h2">สินค้าในระบบ</Typography>
            <Typography variant="h5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore suscipit consectetur eligendi dolorum hic ipsum
                perspiciatis unde voluptatem quam, quod adipisci assumenda est magni animi, labore illum in! Accusamus, quibusdam
                aliquid commodi iure voluptas sequi libero, iusto natus mollitia error nostrum excepturi vitae, dolorum distinctio vel
                saepe eligendi hic sint?</Typography>
        </Box>
    )
}

const pageList = () => {
    return (
        <List>
            {pages.map(({ text, link, icon }, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <Link to={`/workshop6/${link}`} style={{ textDecoration: 'none', color: '#333' }} >
                        <ListItemText primary={text} />
                    </Link>
                </ListItem>
            ))
            }
        </List >
    )
}

const Workshop6 = () => {

    const [drawer, setDrawer] = useState(false)
    const toggleDrawer = () => {
        setDrawer(prev => !prev)
    }

    return (
        <>
            <Navbar header="Workshop 6 Navigation" />
            <Button onClick={toggleDrawer} variant="outlined" sx={{ mb: 1 }}>
                <Menu />
            </Button>
            <Drawer
                anchor='left'
                open={drawer}
                onClose={toggleDrawer}
            >
                {pageList()}
            </Drawer>
            <Switch>
                <Route path="/workshop6/main" component={MainPage} />
                <Route path="/workshop6/member" component={MemberPage} />
                <Route path="/workshop6/product" component={ProductPage} />
                <Redirect to="/workshop6/main" />
            </Switch>
        </>
    )
}

export default Workshop6;