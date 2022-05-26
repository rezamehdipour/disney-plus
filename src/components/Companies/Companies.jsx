// Libraries
import { v4 as uuidv4 } from "uuid";

// Data
import { companiesData } from "./companiesData";

// CSS
import style from "./Companies.module.scss";

const Companies = (props) => {
	return (
		<div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-5">
			{companiesData.length > 0 &&
				companiesData.map(({ image, alt, poster, video }) => (
					<div
						key={uuidv4()}
						className={`relative rounded overflow-hidden duration-300 cursor-pointer ${style.company}`}
					>
						<video
							src={video}
							poster={poster}
							autoPlay
							loop
							muted
							className={`absolute inset-0 w-full ${style.companyVideo}`}
						></video>
						<img src={image} alt={alt} className="relative w-full" />
					</div>
				))}
		</div>
	);
};

export default Companies;
