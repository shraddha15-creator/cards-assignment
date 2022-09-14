import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { CardsListing, Cart } from "./pages";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<CardsListing />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
