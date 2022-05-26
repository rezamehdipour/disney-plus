import React, { useState } from "react";

// Token Key
const { REACT_APP_TOKEN_KEY: tokenKey } = process.env || "token";

// Initial State
const initialState = window.localStorage.getItem(tokenKey) || false;

const TokenContext = React.createContext();
export function TokenContextProvider({ children }) {
	const [token, setTheToken] = useState(initialState);

	const setToken = (token) => {
		setTheToken((currentToken) => {
			// If User Signout
			if (!token) {
				setTheToken(false);
				window.localStorage.removeItem(tokenKey);
			} else {
				setTheToken(token);
				window.localStorage.setItem(tokenKey, token);
			}
		});
	};

	return <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>;
}

export default TokenContext;
