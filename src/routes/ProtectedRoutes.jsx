import { Outlet, Navigate } from "react-router-dom";

// Context
import { useContext } from "react";
import TokenContext from "../context/tokenContext";

const ProtectedRoutes = (props) => {
	const { token } = useContext(TokenContext);

	if (token) {
		return <Outlet />;
	} else {
		return <Navigate to="/" />;
	}
};

export default ProtectedRoutes;
