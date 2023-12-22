import React from "react";

import "./index.css";

export default function Nav({ setCity, fetchApi }) {
	return (
		<nav className="search-bar">
			<form onSubmit={(e) => fetchApi(e)} method="get">
				<input
					type="search"
					id="search"
					name="q"
					placeholder="Ville"
					onChange={(e) => {
						setCity(e.target.value);
					}}
				/>
				<button type="submit">🔍</button>
			</form>
		</nav>
	);
}
