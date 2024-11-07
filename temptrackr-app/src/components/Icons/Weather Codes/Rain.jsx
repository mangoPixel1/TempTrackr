import React from "react";
import "./WeatherCodeIcons.css";

function Rain() {
	return (
		<svg className="weatherCodeIcon rain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<defs>
				<symbol id="a" viewBox="0 0 359 231">
					<path d="M295.5,223.5a56,56,0,0,0,0-112c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,140.1,47.42,55.91,55.91,0,0,0,55.5,95.5a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,67.5,223.5" fill="none" stroke="#e2e8f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="15" />
				</symbol>
				<symbol id="b" viewBox="0 0 128 56" overflow="visible">
					{/* Raindrop 1 */}
					<path d="M8,56a8,8,0,0,1-8-8V8A8,8,0,0,1,16,8V48A8,8,0,0,1,8,56Z" fill="#0a5ad4" opacity="0">
						<animateTransform id="x1" attributeName="transform" additive="sum" type="translate" values="0 -60; 0 60" begin="0s; x1.end+.33s" dur=".67s" />
						<animate id="y1" attributeName="opacity" values="0; 1; 0" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" />
					</path>

					{/* Raindrop 2 */}
					<path d="M64,56a8,8,0,0,1-8-8V8A8,8,0,0,1,72,8V48A8,8,0,0,1,64,56Z" fill="#0a5ad4" opacity="0">
						<animateTransform id="x2" attributeName="transform" additive="sum" type="translate" values="0 -60; 0 60" begin=".33s; x2.end+.33s" dur=".67s" />
						<animate id="y2" attributeName="opacity" values="0; 1; 0" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" />
					</path>

					{/* Raindrop 3 */}
					<path d="M120,56a8,8,0,0,1-8-8V8a8,8,0,0,1,16,0V48A8,8,0,0,1,120,56Z" fill="#0a5ad4" opacity="0">
						<animateTransform id="x3" attributeName="transform" additive="sum" type="translate" values="0 -60; 0 60" begin="-.33s; x3.end+.33s" dur=".67s" />
						<animate id="y3" attributeName="opacity" values="0; 1; 0" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" />
					</path>
				</symbol>
			</defs>

			{/* Cloud */}
			<use width="359" height="231" transform="translate(76.5 140.5)" xlinkHref="#a" />
			{/* Rain Animation */}
			<use width="128" height="56" transform="translate(192 344)" xlinkHref="#b" />
		</svg>
	);
}

export default Rain;
