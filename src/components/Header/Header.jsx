import { Link } from "react-router-dom";

// Context
import { useContext } from "react";
import TokenContext from "../../context/tokenContext";

// Libraries
import { v4 as uuidv4 } from "uuid";

// Images
import disneyLogoSvg from "../../images/disney-logo.svg";

// Icons

// Data
import { headerMenuData } from "./headerMenuData";

// CSS
import style from "./Header.module.scss";

const Header = (props) => {
	const { token, setToken } = useContext(TokenContext);

	return (
		<header className={`fixed w-full ${style.header}`}>
			<div className="flex items-center justify-between h-full px-4 sm:px-8">
				{/* Header Logo */}
				<div>
					<Link to={token ? "/home" : "/"}>
						<img src={disneyLogoSvg} alt="Disney+" className={`${style.headerLogoImage}`} />
					</Link>
				</div>

				{/* Header Options */}
				{token && (
					<nav className="hidden ml-12 gap-x-7 lg:flex">
						{headerMenuData.length > 0 &&
							headerMenuData.map(({ path, title, icon }) => (
								<Link
									key={uuidv4()}
									to={path}
									className={`flex items-center gap-x-2 ${style.headerMenuOption}`}
								>
									<i className={`${style.headerMenuOptionIcon}`}>{icon}</i>
									<span className="flex-center">{title}</span>
								</Link>
							))}
					</nav>
				)}

				{/* Header Login */}
				<div className="ml-auto">
					{token ? (
						<button
							className={`uppercase rounded-lg py-1 px-3 duration-300 ${style.headerLoginButton}`}
							onClick={() => setToken(false)}
						>
							Signout
						</button>
					) : (
						<button
							className={`uppercase rounded-lg py-1 px-3 duration-300 ${style.headerLoginButton}`}
							onClick={() => setToken(uuidv4())}
						>
							Login
						</button>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
