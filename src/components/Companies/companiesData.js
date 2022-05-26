// Images
import disneyPng from "../../images/home-disney.png";
import pixarPng from "../../images/home-pixar.png";
import marvelPng from "../../images/home-marvel.png";
import starWarsPng from "../../images/home-star-wars.png";
import nationalGeographicPng from "../../images/home-national-geographic.png";

// Video Posters
import disneyPosterJpg from "../../images/home-disney-poster.jpg";
import pixarPosterJpg from "../../images/home-pixar-poster.jpg";
import marvelPosterJpg from "../../images/home-marvel-poster.jpg";
import starWarsPosterJpg from "../../images/home-star-wars-poster.jpg";
import nationalGeographicPosterJpg from "../../images/home-national-geographic-poster.jpg";

// Videos
import disneyMp4 from "../../videos/disney.mp4";
import pixarMp4 from "../../videos/pixar.mp4";
import marvelMp4 from "../../videos/marvel.mp4";
import starWarsMp4 from "../../videos/star-wars.mp4";
import nationalGeographicMp4 from "../../videos/national-geographic.mp4";

const companiesData = [
	{
		image: disneyPng,
		alt: "disney",
		poster: disneyPosterJpg,
		video: disneyMp4,
	},
	{
		image: pixarPng,
		alt: "pixar",
		poster: pixarPosterJpg,
		video: pixarMp4,
	},
	{
		image: marvelPng,
		alt: "marvel",
		poster: marvelPosterJpg,
		video: marvelMp4,
	},
	{
		image: starWarsPng,
		alt: "star wars",
		poster: starWarsPosterJpg,
		video: starWarsMp4,
	},
	{
		image: nationalGeographicPng,
		alt: "national geographic",
		poster: nationalGeographicPosterJpg,
		video: nationalGeographicMp4,
	},
];

export { companiesData };
