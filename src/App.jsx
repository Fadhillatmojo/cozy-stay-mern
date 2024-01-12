import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';

function App() {

  return (
		<div className="app">
			<Router>
				<Routes>
					<Route exact path="/" Component={LandingPage}/>
				</Routes>
			</Router>
		</div>
  )
}

export default App
