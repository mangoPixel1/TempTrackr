import React from "react";
import "./WeatherCodeIcons.css";

function PartlyCloudyDay() {
	return (
		<svg className="weatherCodeIcon partlyCloudyDay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<defs>
				<clipPath id="a">
					<path d="M288,148a83.84,83.84,0,0,0-71.4,39.92A55.91,55.91,0,0,0,132,236a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,84,304H0V0H288Z" fill="none" />
				</clipPath>
				<symbol id="c" viewBox="0 0 193 193">
					{/* Sun core */}
					<circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" strokeMiterlimit="10" strokeWidth="9" />

					{/* Sun rays */}
					<path d="M96.5,29.88V4.5m0,184V163.12M143.61,49.39l17.94-17.94M31.45,161.55l17.94-17.94m0-94.22L31.45,31.45m130.1,130.1-17.94-17.94M4.5,96.5H29.88m158.62,0H163.12" fill="none" stroke="#fbbf24" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="9">
						<animateTransform attributeName="transform" additive="sum" type="rotate" values="0 96.5 96.5; 45 96.5 96.5" dur="6s" repeatCount="indefinite" />
					</path>
				</symbol>
				<symbol id="d" viewBox="0 0 359 231">
					<path d="M295.5,223.5a56,56,0,0,0,0-112c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,140.1,47.42,55.91,55.91,0,0,0,55.5,95.5a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,67.5,223.5" fill="none" stroke="#e2e8f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="15" />
				</symbol>
				<symbol id="b" viewBox="0 0 435.5 371.5">
					<g clipPath="url(#a)">
						<use width="193" height="193" transform="translate(69.5 110.5)" xlinkHref="#c" />
					</g>
					<use width="359" height="231" transform="translate(76.5 140.5)" xlinkHref="#d" />
				</symbol>
			</defs>
			<use width="435.5" height="371.5" xlinkHref="#b" />
		</svg>
	);
}

export default PartlyCloudyDay;