import { Link } from "react-router-dom";

// Data
import moviesData from "../../data/movies.json";

// CSS
import style from "./Movies.module.scss";

const Movies = ({ title, type }) => {
	// Filter movies with intended type
	const movies = moviesData.movies.filter((movie) => movie.type === type);

	console.log(movies);

	return (
		<div className="mb-10">
			<div className="mb-3">
				<h4 className="text-base font-medium sm:text-lg">{title}</h4>
			</div>
			<div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-4 sm:grid-cols-2">
				{movies.length > 0 &&
					movies.map(({ id, title, cardImage }) => (
						<Link
							to={`/detail/${id}`}
							className={`block overflow-hidden rounded duration-300 ${style.moviesMovie}`}
						>
							<img src={cardImage} alt={title} className="w-full" />
						</Link>
					))}
			</div>
		</div>
	);
};

export default Movies;
