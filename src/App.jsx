import './App.css'
import Header from './parts/Header.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
	<Router>
      <div className="App">
        <Header />
        {/* Other components or routes go here */}
      </div>
    </Router>
  )
}

export default App
