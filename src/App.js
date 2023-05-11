import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Error from './Error';
import Menu from './Menu';
function App() {
  const Name = () => {
    return <h1>I am Name page.</h1>
  }
  return (
      <>
      <Menu/>
        <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/contact/name" component={Name}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/menu" component={Menu}/>
        <Route  component={Error}/>
      </Switch>
      
      </>
  );
}

export default App;
