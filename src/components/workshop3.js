import { Container, Switch, Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "./navbar";

const Workshop3 = () => {

    const [mode, setMode] = useState('light');

    const switchTheme = () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));


    return (
        <div style={{ backgroundColor: mode === 'dark' ? '#333' : '#fff', color: mode === 'dark' ? '#fff' : '#333' }}>
            <Navbar header={'Workshop 3 Theme Dark / Light'} />
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography variant="h4" sx={{ color: mode === 'dark' ? '#ffa333' : '#333' }}>Mode [ {mode} ]</Typography>
                <Switch onChange={switchTheme} />
            </Container>
            <Typography variant="h5" sx={{ padding: '2rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Est modi esse inventore earum nihil expedita voluptatibus velit obcaecati alias,
                illum consequatur ipsa officia ab hic error, nostrum nam laborum ducimus veritatis laboriosam incidunt illo veniam.
                Voluptate atque corrupti quisquam ex nobis dolore labore iste soluta, nisi dolorum aliquid alias aperiam perferendis.
                Incidunt suscipit, soluta odio repudiandae ab error rerum natus corporis.
                Incidunt beatae quod laudantium minus numquam sed mollitia ipsam possimus eveniet,
                reiciendis doloribus maiores aspernatur iusto consequatur doloremque aliquid magnam saepe.
                Officiis corporis inventore ipsam recusandae ad vel deserunt,
                soluta autem amet cumque itaque accusamus quaerat voluptatem id ducimus.</Typography>
        </div>
    )
};

export default Workshop3;