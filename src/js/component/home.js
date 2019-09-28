import React from "react";
import { Cards } from "../../js/component/cards.js";
import { Nav } from "../../js/component/nav.js";
import { Jumbo } from "../../js/component/jumbo.js";
import { Footer } from "./footer.js";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<Jumbo />
				<div className="container">
					<div className="row">
						<Cards />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
