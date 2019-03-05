import React from 'react';


export default class Navbar extends React.Component {
	render() {
		const menuItems = ['About', 'Services', 'Portfolio', 'Contact'];
		return (
			<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
		    	<div className="container">
		      		<a className="navbar-brand js-scroll-trigger" href="#page-top">Investment calculator</a>
		      		<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		        		<span className="navbar-toggler-icon"></span>
		      		</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto my-2 my-lg-0">
							 {menuItems.map((el) => {
 							 	return <NavbarItem label={el}/>
 							 })}
						</ul>
					</div>
			    </div>
		  </nav>
		)  
	
	}
};


class NavbarItem extends React.Component {
	render() {
		const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
		return (
			<li className="nav-item">
				<a className="nav-link js-scroll-trigger" href={url} >{this.props.label}</a>
			</li>
		);
	}
};
