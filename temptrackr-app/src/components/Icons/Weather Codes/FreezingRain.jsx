import React from "react";
import "./WeatherCodeIcons.css";

function FreezingRain() {
	return (
		<svg className="weatherCodeIcon freezing-rain" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
			<defs>
				<symbol id="a" viewBox="0 0 359 231">
					<path d="M295.5,223.5a56,56,0,0,0,0-112c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,140.1,47.42,55.91,55.91,0,0,0,55.5,95.5a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,67.5,223.5" fill="none" stroke="#e2e8f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="15" />
				</symbol>
				<symbol id="c" viewBox="0 0 155.2 48" overflow="visible">
					{/* snowflake-1 */}
					<g>
						<path d="M41.17,30.54l-5.78-3.3a13.74,13.74,0,0,0,0-6.47l5.79-3.31A4,4,0,0,0,42.66,12a4.08,4.08,0,0,0-5.54-1.46l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L6.08,10.54A4.08,4.08,0,0,0,.54,12,4,4,0,0,0,2,17.46l5.78,3.3a13.74,13.74,0,0,0,0,6.47L2,30.54A4,4,0,0,0,.54,36a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44a4.05,4.05,0,0,0,8.1,0V37.39a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,41.17,30.54ZM18.56,29.2A6,6,0,0,1,16.34,21a6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8A6,6,0,0,1,26.86,27,6.12,6.12,0,0,1,18.56,29.2Z" fill="#86c3db" opacity="0">
							<animateTransform attributeName="transform" additive="sum" type="rotate" values="0 24 24; 360 24 24" dur="6s" repeatCount="indefinite" />

							<animate id="t1" attributeName="opacity" values="0; 1; 1; 0" begin="0s; t1.end+1s" dur="2s" keyTimes="0; .17; .83; 1" />
						</path>

						<animateTransform id="s1" attributeName="transform" additive="sum" type="translate" values="0 -36; 0 92;" begin="0s; s1.end+1s" dur="2s" />
					</g>

					{/* snowflake-2 */}
					<g>
						<path d="M97.17,30.54l-5.78-3.3a13.74,13.74,0,0,0,0-6.47l5.79-3.31A4,4,0,0,0,98.66,12a4.08,4.08,0,0,0-5.54-1.46l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23l-5.78-3.29A4.08,4.08,0,0,0,56.54,12,4,4,0,0,0,58,17.46l5.78,3.3a13.74,13.74,0,0,0,0,6.47L58,30.54A4,4,0,0,0,56.54,36a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44a4.05,4.05,0,0,0,8.1,0V37.39a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,97.17,30.54ZM74.56,29.2A6,6,0,0,1,72.34,21a6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8A6,6,0,0,1,82.86,27,6.12,6.12,0,0,1,74.56,29.2Z" fill="#86c3db" opacity="0">
							<animateTransform attributeName="transform" additive="sum" type="rotate" values="0 80 24; 360 80 24" dur="6s" repeatCount="indefinite" />

							<animate id="t2" attributeName="opacity" values="0; 1; 1; 0" begin="-.83s; t2.end+1s" dur="2s" keyTimes="0; .17; .83; 1" />
						</path>

						<animateTransform id="s2" attributeName="transform" additive="sum" type="translate" values="0 -36; 0 92;" begin="-.83s; s2.end+1s" dur="2s" />
					</g>

					{/* snowflake-3 */}
					<g>
						<path d="M153.17,30.54l-5.78-3.3a13.74,13.74,0,0,0,0-6.47l5.79-3.31A4,4,0,0,0,154.66,12a4.08,4.08,0,0,0-5.54-1.46l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23l-5.78-3.29A4.08,4.08,0,0,0,112.54,12,4,4,0,0,0,114,17.46l5.78,3.3a13.74,13.74,0,0,0,0,6.47L114,30.54A4,4,0,0,0,112.54,36a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44a4.05,4.05,0,0,0,8.1,0V37.39a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,153.17,30.54ZM130.56,29.2a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,130.56,29.2Z" fill="#86c3db" opacity="0">
							<animateTransform attributeName="transform" additive="sum" type="rotate" values="0 136 24; 360 136 24" dur="6s" repeatCount="indefinite" />

							<animate id="t3" attributeName="opacity" values="0; 1; 1; 0" begin=".83s; t3.end+1s" dur="2s" keyTimes="0; .17; .83; 1" />
						</path>

						<animateTransform id="s3" attributeName="transform" additive="sum" type="translate" values="0 -36; 0 92;" begin=".83s; s3.end+1s" dur="2s" />
					</g>
				</symbol>
				<symbol id="b" viewBox="0 0 155.2 48" overflow="visible">
					<use width="155.2" height="48" xlinkHref="#c" />

					{/* raindrop-1 */}
					<path d="M21.6,38a8,8,0,0,1-8-8V18a8,8,0,0,1,16,0V30A8,8,0,0,1,21.6,38Z" fill="#0a5ad4" opacity="0">
						<animateTransform id="x1" attributeName="transform" additive="sum" type="translate" values="0 -32; 0 -32; 0 120;" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" />

						<animate id="y1" attributeName="opacity" values="0; 1; 0" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" />
					</path>

					{/* raindrop-2 */}
					<path d="M77.6,38a8,8,0,0,1-8-8V18a8,8,0,0,1,16,0V30A8,8,0,0,1,77.6,38Z" fill="#0a5ad4" opacity="0">
						<animateTransform id="x2" attributeName="transform" additive="sum" type="translate" values="0 -32; 0 -32; 0 120;" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" />

						<animate id="y2" attributeName="opacity" values="0; 1; 0" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" />
					</path>

					{/* raindrop-3 */}
					<path d="M133.6,38a8,8,0,0,1-8-8V18a8,8,0,0,1,16,0V30A8,8,0,0,1,133.6,38Z" fill="#0a5ad4" opacity="0">
						<animateTransform id="x3" attributeName="transform" additive="sum" type="translate" values="0 -32; 0 -32; 0 120;" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" />

						<animate id="y3" attributeName="opacity" values="0; 1; 0" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" />
					</path>
				</symbol>
			</defs>
			<use width="359" height="231" transform="translate(76.5 140.5)" xlinkHref="#a" />
			<use width="155.2" height="48" transform="translate(178.4 338)" xlinkHref="#b" />
		</svg>
	);
}

export default FreezingRain;
