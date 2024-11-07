import React from "react";
import "./WeatherCodeIcons.css";

function Drizzle() {
	return (
		<svg className="weatherCodeIcon drizzle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<defs>
				<symbol id="a" viewBox="0 0 359 231">
					<path d="M295.5,223.5a56,56,0,0,0,0-112c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,140.1,47.42,55.91,55.91,0,0,0,55.5,95.5a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,67.5,223.5" fill="none" stroke="#e2e8f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="15" />
				</symbol>
			</defs>

			<use width="359" height="231" transform="translate(76.5 140.5)" xlinkHref="#a" />

			{/* Raindrop 1 */}
			<path d="M200,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,200,376Z" fill="#0a5ad4" opacity="0">
				<animateTransform id="x1" attributeName="transform" additive="sum" type="translate" values="0 -32; 0 -32; 0 120;" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" />
				<animate id="y1" attributeName="opacity" values="0; 1; 0" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" />
			</path>

			{/* Raindrop 2 */}
			<path d="M256,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,256,376Z" fill="#0a5ad4" opacity="0">
				<animateTransform id="x2" attributeName="transform" additive="sum" type="translate" values="0 -32; 0 -32; 0 120;" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" />
				<animate id="y2" attributeName="opacity" values="0; 1; 0" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" />
			</path>

			{/* Raindrop 3 */}
			<path d="M312,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,312,376Z" fill="#0a5ad4" opacity="0">
				<animateTransform id="x3" attributeName="transform" additive="sum" type="translate" values="0 -32; 0 -32; 0 120;" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" />
				<animate id="y3" attributeName="opacity" values="0; 1; 0" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" />
			</path>
		</svg>
	);
}

export default Drizzle;
