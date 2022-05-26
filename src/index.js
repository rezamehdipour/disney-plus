import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Context
import { TokenContextProvider } from "./context/tokenContext";

// Components
import App from "./App";

// CSS
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TokenContextProvider>
			<BrowserRouter basename="/disney-plus">
				<App />
			</BrowserRouter>
		</TokenContextProvider>
	</React.StrictMode>
);
