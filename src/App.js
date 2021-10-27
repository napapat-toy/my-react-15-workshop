import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@mui/material';

import Homepage from './components/homepage';
import WorkShop1 from './components/workshop1';
import WorkShop2 from './components/workshop2';
import Workshop3 from './components/workshop3';
import Workshop4 from './components/workshop4';
import Workshop5 from './components/workshop5';
import Workshop6 from './components/workshop6';
import Workshop7 from './components/workshop7';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/workshop1" component={WorkShop1} />
          <Route path="/workshop2" component={WorkShop2} />
          <Route path="/workshop3" component={Workshop3} />
          <Route path="/workshop4" component={Workshop4} />
          <Route path="/workshop5" component={Workshop5} />
          <Route path="/workshop6" component={Workshop6} />
          <Route path="/workshop7" component={Workshop7} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
