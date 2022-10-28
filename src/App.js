import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage'


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
           <Route path='/' element={<HomePage/>}/>
        </Routes>
      </Router> */}
      <HomePage/>
    </div>
  );
}

export default App;
