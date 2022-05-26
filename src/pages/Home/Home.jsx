import { useEffect } from "react";
import { Navigate } from "react-router-dom";

// Components
import Slider from "../../components/Slider/Slider";
import Companies from "../../components/Companies/Companies";
import Movies from "../../components/Movies/Movies";

// CSS
import style from "./Home.module.scss";

const Home = (props) => {
	return (
		<main className={`pt-20 ${style.home}`}>
			<div className="wrapper">
				{/* Slider */}
				<div className="mb-12 overflow-hidden rounded">
					<Slider />
				</div>

				{/* Companies */}
				<div className="mb-12">
					<Companies />
				</div>

				{/* Movies (Recommended) */}
				<Movies title="Recommended for you" type="recommended" />

				{/* Movies (New) */}
				<Movies title="New to Disney+" type="new" />

				{/* Movies (Originals) */}
				<Movies title="Originals" type="original" />

				{/* Movies (Trending) */}
				<Movies title="Trending" type="trending" />
			</div>
		</main>
	);
};

export default Home;
