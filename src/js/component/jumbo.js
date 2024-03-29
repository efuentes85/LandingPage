import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

export class Jumbo extends React.Component {
	render() {
		return (
			<header className="jumbotron text-center my-4">
				<h1 className="display-3">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero aliquid similique quaerat nam nobis illo
					aspernatur vitae fugiat numquam repellat.
				</p>
				<a href="#" className="btn btn-primary btn-lg">
					Call to action!
				</a>
			</header>
		);
	}
}
