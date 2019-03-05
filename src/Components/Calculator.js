import React from 'react';

const questions = [
	'How much do you want to invest?',
	'How much do you want to borrow?',
	'Over how long?',
	'How many bedrooms does your flat have?',
	'How many square meters does your flat have?'
];

export default class Calculator extends React.Component {
	render() {
		return (
			<section className="page-section bg-primary" id="about">
				<div className="container">
					<div className="row justify-content-center">

						<div className="col-lg-9 text-center">
							<h2 className="text-white mt-0">Calculate your Return On Investment</h2>
							<hr className="divider light my-4" />

							{questions.map((el, i) => {
								return <CalculatorItem 
											question={el}
											range= { i < 3 }
											options={i!==3}
										/>
							})}
						</div>

						<div className="col-lg-3 text-left text-white">
							<h2 className="text-white mt-0">Estimated KPIs</h2>
							<hr className="divider light my-4" />
							<ul class="list-group ">
							  <li class="list-group-item bg-primary">ROI: 14%</li>
							  <li class="list-group-item bg-primary">ROE: 28%</li>
							  <li class="list-group-item bg-primary">Recomended interest rate for your loan: 3%</li>
							</ul>
							<p className="text-white-50 mb-4">Now, when you have an indicative results of your investment it's time to find a flat improve this KPIs</p>
							<a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
						</div>


					</div>
				</div>
			</section>			
		);
	}
}


class CalculatorItem extends React.Component {
	render() {
		return(
			<div className="row justify-content-center">
				<Question 
					question={this.props.question}
					range={this.props.range}
				/>
				<Value options={this.props.options} />
			</div>			
		);
	}
};

class Question extends React.Component {

	render() {
		return(
			this.props.range ? 
				<div className="col-lg-6 text-center">
					<form>
					  <div class="form-group text-white">
					   	<label for="total-investment">{this.props.question}</label>
						<input type="range" class="form-control-range" id="total-investment" />
					  </div>
					</form>
				</div>
				:
				<div className="col-lg-6 text-center">
					<div class="form-group text-white">
						<label for="total-investment">{this.props.question}</label>
					</div>
				</div>
		);
	}
}

class Value extends React.Component {
	render() {
		return(
			this.props.options ? 
			<div className="col-lg-3 text-center">
			    <input type="text" class="form-control pt-10" id="total-investment" aria-describedby="emailHelp" placeholder="Amount"/>
			</div>
			:
			<div className="col-lg-3 text-center">
			    <form>
				  	<div class="btn-group btn-group-toggle" data-toggle="buttons">
					  <Option />
					</div>
				</form>
			</div>
		);
	}
}

class Option extends React.Component {

	render() {
		let options = ['0', '1', '2', '3', '4+'];
		return(
			options.map(el=> {
				return <label class="btn btn-info">
					    <input type="radio" name="options" id="option1" autocomplete="off" /> {el}
					  </label>
			})
		);
	}
}

