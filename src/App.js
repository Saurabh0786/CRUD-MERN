import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AllUser from './Components/AllUser';
import AddUser from './Components/AddUser';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import NotFound from './Components/NotFound';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Switch>
        <Route exact path="/" component={Home}/> 
   <Route exact path="/all" component={AllUser}/> 
      <Route exact path="/add" component={AddUser}/> 
      <Route component={NotFound}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
