import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@mui/material';

import Homepage from './components/homepage';
import WorkShop1 from './components/workshop1';
import WorkShop2 from './components/workshop2';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/workshop1" component={WorkShop1} />
          <Route path="/workshop2" component={WorkShop2} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
