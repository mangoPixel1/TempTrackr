import React from "react";
import "./WeatherCodeIcons.css";

function Fog() {
	return (
		<svg className="weatherCodeIcon fog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<defs>
				<symbol id="a" viewBox="0 0 359 231">
					<path d="M295.5,223.5a56,56,0,0,0,0-112c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,140.1,47.42,55.91,55.91,0,0,0,55.5,95.5a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,67.5,223.5" fill="none" stroke="#e2e8f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="15" />
				</symbol>
				<symbol id="b" viewBox="0 0 258 66" overflow="visible">
					<line x1="9" y1="57" x2="249" y2="57" fill="none" stroke="#e2e8f0" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="18">
						<animateTransform attributeName="transform" additive="sum" type="translate" values="-24 0; 24 0; -24 0" dur="6s" repeatCount="indefinite" />
					</line>
					<line x1="9" y1="9" x2="249" y2="9" fill="none" stroke="#e2e8f0" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="18">
						<animateTransform attributeName="transform" additive="sum" type="translate" values="24 0; -24 0; 24 0" dur="6s" repeatCount="indefinite" />
					</line>
				</symbol>
			</defs>
			<use width="359" height="231" transform="translate(76.5 140.5)" xlinkHref="#a" />
			<use width="258" height="66" transform="translate(127 405)" xlinkHref="#b" />
		</svg>
	);
}

export default Fog;