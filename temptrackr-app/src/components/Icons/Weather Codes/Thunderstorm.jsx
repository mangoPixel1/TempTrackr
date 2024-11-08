import React, { useEffect } from "react";
import "./WeatherCodeIcons.css";

function Thunderstorm() {
	return (
		<svg className="weatherCodeIcon thunderstorm" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
			<defs>
				<symbol id="a" viewBox="0 0 359 231">
					<path d="M295.5,223.5a56,56,0,0,0,0-112c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,140.1,47.42,55.91,55.91,0,0,0,55.5,95.5a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,67.5,223.5" fill="none" stroke="#e2e8f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="15" />
				</symbol>
				<symbol id="b" viewBox="0 0 96 176">
					{/* lightning-bolt */}
					<polygon points="32 0 0 96 32 96 16 176 96 64 48 64 80 0 32 0" fill="#f6a823">
						<animate id="x1" attributeName="opacity" values="1; 1; 0; 1; 0; 1; 0; 1" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" />
					</polygon>
				</symbol>
			</defs>
			<use width="359" height="231" transform="translate(76.5 140.5)" xlinkHref="#a" />
			<use width="96" height="176" transform="translate(208 293)" xlinkHref="#b" />
		</svg>
	);
}

export default Thunderstorm;
