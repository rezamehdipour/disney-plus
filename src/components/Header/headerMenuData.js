// Icons
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsBookmark, BsStar } from "react-icons/bs";
import { MdOutlineMovie, MdOutlineLocalMovies } from "react-icons/md";

const headerMenuData = [
	{ path: "/home", title: "Home", icon: <AiOutlineHome /> },
	{ path: "", title: "Search", icon: <AiOutlineSearch /> },
	{ path: "", title: "Watchlist", icon: <BsBookmark /> },
	{ path: "", title: "Originals", icon: <BsStar /> },
	{ path: "", title: "Movies", icon: <MdOutlineMovie /> },
	{ path: "", title: "Series", icon: <MdOutlineLocalMovies /> },
];

export { headerMenuData };
