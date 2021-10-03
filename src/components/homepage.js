import { Link } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'
import Navbar from './navbar';

const Homepage = () => {
    return (
        <div>
            <Navbar header={'Homepage'} />
            <Grid container spacing={1}>
                <Grid item xs={6} md={8}>
                    <Typography variant="h4" color="black">
                        <Link to="/workshop1" style={styles.link}>Workshop 1 Form Validator</Link>
                        <Link to="/workshop2" style={styles.link}>Workshop 2 Quiz App</Link>
                        <Link to="/workshop3" style={styles.link}>Workshop 3 Theme Dark / Light</Link>
                        <Link to="/workshop4" style={styles.link}>Workshop 4 Accordion</Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

const styles = {
    link: {
        display: 'flex',
        flexDirections: 'column',
        fontSize: '2rem',
        padding: '1.5rem',
        marginBottom: '1rem',
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: '16px',
        textDecoration: 'none',
    }
}

export default Homepage;