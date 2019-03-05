import React from 'react';

export default class About extends React.Component {
	render() {
		return (
			<section className="page-section bg-primary" id="about">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 text-center">
							<h2 className="text-white mt-0">We've got what you need!</h2>
							<hr className="divider light my-4" />
							<p className="text-white-50 mb-4">
							Free Investment Calculator can be used to calculate a Return On Investment in a real estate in Prague. 
							It should help you to understand: how much do you need to invest, if you need a mortgage and which type of property 
							sholud you choose</p>
							<a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
						</div>
					</div>
				</div>
			</section>			
		);
	}
};