import React from "react";
import "./WeatherCodeIcons.css";

function Overcast() {
	return (
		<svg className="weatherCodeIcon overcast" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<defs>
				<clipPath id="a">
					<path d="M351.5,308a56,56,0,0,0-56-56c-.85,0-1.68.09-2.53.13A83.7,83.7,0,0,0,211.5,148V0H447.66V308Z" fill="none">
						<animateTransform attributeName="transform" additive="sum" type="translate" values="-18 0; 18 0; -18 0" dur="6s" repeatCount="indefinite" />
					</path>
				</clipPath>
				<symbol id="c" viewBox="0 0 214.26 140.12">
					<path d="M7.5,100.18a32.44,32.44,0,0,0,32.44,32.44H169.69v-.12c.77.05,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,130,30.62A48.58,48.58,0,0,0,41.4,67.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,7.5,100.18Z" fill="none" stroke="#94a3b8" strokeLinejoin="round" strokeWidth="15" />
				</symbol>
				<symbol id="d" viewBox="0 0 359 231">
					<path d="M295.5,223.5a56,56,0,0,0,0-112c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,140.1,47.42,55.91,55.91,0,0,0,55.5,95.5a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,67.5,223.5" fill="none" stroke="#e2e8f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="15" />
				</symbol>
				<symbol id="b" viewBox="0 0 447.66 371.5" overflow="visible">
					<g clipPath="url(#a)">
						<use width="214.26" height="140.12" transform="translate(195.51 165.01)" xlinkHref="#c">
							<animateTransform attributeName="transform" additive="sum" type="translate" values="-9 0; 9 0; -9 0" dur="6s" repeatCount="indefinite" />
						</use>
					</g>

					<use width="359" height="231" transform="translate(0 140.5)" xlinkHref="#d">
						<animateTransform attributeName="transform" additive="sum" type="translate" values="-18 0; 18 0; -18 0" dur="6s" repeatCount="indefinite" />
					</use>
				</symbol>
			</defs>
			<use width="447.66" height="371.5" transform="translate(64.34)" xlinkHref="#b" />
		</svg>
	);
}

export default Overcast;
