import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";

// Icons
import { BsPlayFill } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

// Data
import moviesData from "../../data/movies.json";

// CSS
import style from "./Detail.module.scss";

const Detail = (props) => {
	const [bookmarked, setBookmarked] = useState(false);
	const params = useParams();
	const intendedMovieId = params.id;
	const intendedMovie = moviesData.movies.find((movie) => movie.id === intendedMovieId);

	// If intended movie not found!
	if (!intendedMovie) {
		return <Navigate to="/home" />;
	}

	return (
		<main
			className={`min-h-screen flex items-end pb-8 md:pb-16 pt-20 ${style.detail}`}
			style={{
				backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 70%), url(${intendedMovie.backgroundImage})`,
			}}
		>
			<div className="wrapper">
				<div className={`${style.detailContent}`}>
					<div className="mb-8 md:mb-12">
						<img src={intendedMovie.titleImage} alt={intendedMovie.title} />
					</div>
					<div>
						<div className={`mb-5 ${style.buttonsBox}`}>
							<button
								className={`rounded flex items-center gap-2 py-3 px-4 ${style.squareButtons} ${style.playButton}`}
							>
								<i>
									<BsPlayFill />
								</i>
								<span className="uppercase font-semibold">Play</span>
							</button>
							<button
								className={`rounded flex items-center gap-2 py-3 px-4 ${style.squareButtons} ${style.trailerButton}`}
							>
								<i>
									<RiMovie2Line />
								</i>
								<span className="uppercase font-semibold">Trailer</span>
							</button>
							<button
								className={`${style.circleButtons}`}
								onClick={() => setBookmarked((c) => !c)}
							>
								<i>{bookmarked ? <BsBookmarkFill /> : <BsBookmark />}</i>
							</button>
							<button className={`${style.circleButtons}`}>
								<i>
									<FaUserFriends />
								</i>
							</button>
						</div>
						<div className="mb-3">
							<p className="text-sm">{intendedMovie.subTitle}</p>
						</div>
						<div>
							<p className="text-lg font-medium">{intendedMovie.description}</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Detail;
