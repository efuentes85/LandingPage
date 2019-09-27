import React from "react";
import ReactDOM from "react-dom";

export class Cards extends React.Component {
	render() {
		let str = [];
		for (let i = 0; i < 4; i++) {
			str.push(
				<div className="row text-center">
					<div className="col-lg-3 col-md-6 mb-4">
						<div className="card h-100">
							<img
								className="card-img-top"
								src="http://placehold.it/500x325"
								alt=""
							/>
							<div className="card-body">
								<h4 className="card-title">Card title</h4>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Sapiente esse
									necessitatibus neque.
								</p>
							</div>
							<div className="card-footer">
								<a href="#" className="btn btn-primary">
									Find Out More!
								</a>
							</div>
						</div>
					</div>
				</div>
			);
		}
		return str;
	}
}
