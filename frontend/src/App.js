import "./App.css"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navigation/Navbar"
import Index from "./components/pages/Index"
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import Admin from "./components/pages/Admin"
import Services from "./components/pages/Services"

function App() {
	return (
		<div className="App">
			<Navbar>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Signup />} />
					<Route path="/services" element={<Services />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>
			</Navbar>
		</div>
	)
}

export default App
