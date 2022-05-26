import { Link } from "react-router-dom";

// Context
import { useContext } from "react";
import TokenContext from "../../context/tokenContext";

const NotFound = (props) => {
	const { token } = useContext(TokenContext);

	return (
		<div className="h-screen flex-center">
			<div>
				<h1 className="mb-4 text-3xl font-semibold">Page Not Found!</h1>
				<p className="text-lg text-center">
					Return to the{" "}
					<Link to={token ? "/home" : "/"} className="text-green-400 ">
						{token ? "home" : "login"} page
					</Link>
				</p>
			</div>
		</div>
	);
};

export default NotFound;
