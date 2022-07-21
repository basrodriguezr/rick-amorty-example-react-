import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Inicio from './components/Inicio';
import Personaje from './components/Personaje';

function App() {
  return (
    <div className="App">
        <Router>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/personaje:id" element={<Personaje></Personaje>}></Route>
        </Router>
    </div>
  );
}

export default App;
