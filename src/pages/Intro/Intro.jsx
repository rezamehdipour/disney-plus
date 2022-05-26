import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

// Context
import { useContext } from "react";
import TokenContext from "../../context/tokenContext";

// Libraries

// Images
import introBackgroundJpg from "../../images/intro-background.jpg";
import huluDisneyEspa from "../../images/intro-hulu-disney-espa.svg";
import disneyPixarMarvelStarWarsNationalGeographicPng from "../../images/intro-disney-pixar-marvel-starwars-ng.png";

// CSS
import style from "./Intro.module.scss";

// Animation
const IntroPageAnimation = {
	exit: { opacity: 0 },
};

const Intro = (props) => {
	const { token } = useContext(TokenContext);

	// If user Logged in, redirect to `Home Page`
	if (token) {
		return <Navigate to="/home" />;
	}

	return (
		<main
			style={{ backgroundImage: `url(${introBackgroundJpg})` }}
			className={`h-screen flex-center ${style.intro}`}
			{...IntroPageAnimation}
		>
			<div className={`w-full px-4 ${style.introContentWrapper}`}>
				<div className="mb-3">
					<img src={huluDisneyEspa} alt="3 Companies" />
				</div>
				<div className="mb-3">
					<button
						className={`px-2 py-4 uppercase w-full rounded font-semibold text-base sm:text-lg ${style.introContentButton}`}
					>
						Get all there
					</button>
				</div>
				<div className="mb-4">
					<p className={`text-xs text-center tracking-wide`}>
						Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+
						subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase
						by $1.
					</p>
				</div>
				<div>
					<img src={disneyPixarMarvelStarWarsNationalGeographicPng} alt="5 Companies" />
				</div>
			</div>
		</main>
	);
};

export default Intro;
