import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";

// Libraries

// Pages
import Intro from "./pages/Intro/Intro";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import NotFound from "./pages/NotFound/NotFound";

// Components
import Header from "./components/Header/Header";

const App = (props) => {
	const location = useLocation();

	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Intro />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/home" element={<Home />} />
					<Route path="/detail/:id" element={<Detail />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
