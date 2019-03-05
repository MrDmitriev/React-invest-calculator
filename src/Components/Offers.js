import React from 'react';
import Strnad from './img/970x647/gandon.jpg';
import Kytlicka from './img/970x647/kytlicka.jpg';
import Spind from './img/970x647/spind.jpg';

const fadeText = {
    color: '#bfc1c7'
};

const fotoStyle = {
    'display': 'block',
    'max-width': '100%',
    'height': 'auto'
}

const offersList = [
    {
        'photo': Kytlicka,
        'title': 'One-bedroom flat. Kytlicka str. Prague 9',
        'totalInvestment': '4 100 000 CZK',
        'roi': '7%',
        'description': 'Fresh flat in a perfect state. Best choice for a long-term rent.'
    },
    {
        'photo': Strnad,
        'title': 'Two-bedroom flat. Na lysinach str. Prague 4',
        'totalInvestment': '8 790 000 CZK',
        'roi': '9%',
        'description': 'Luxury flat in a residential project. Best choice for a long and short-term rent.'
    },
    {
        'photo': Spind,
        'title': 'One-bedroom flat. Okruzni str. Spindleruv Mlyn',
        'totalInvestment': '7 690 000 CZK',
        'roi': '11%',
        'description': 'Luxury flat in a residential project. Best choice for a short-term rent.'
    }
]

export default class Offers extends React.Component {
	render() {
		return (
			<div className="page-section bg-white" id="offers">
            <div className="content-lg container">
                <div className="row">
                    {offersList.map(el => {
                        return <Offer 
                                    photo={el.photo}
                                    title={el.title}
                                    totalInvestment={el.totalInvestment}
                                    roi={el.roi}
                                    description={el.description}
                                />
                    })}
                </div>
            </div>
        </div>
		)
	}
}

class Offer extends React.Component {
    render() {
        return(
            <div className="col-sm-4 sm-margin-b-50">
                <div className="margin-b-20">
                    <img className="img-responsive" src={this.props.photo} alt="offer" style={fotoStyle} />
                </div>
                <h4><a href="#">{this.props.title}</a></h4>
                <span className="text-uppercase margin-l-20" style={fadeText} > Total investment: {this.props.totalInvestment}</span>
                <hr/>
                <span className="text-uppercase margin-l-20" style={fadeText}> ROI: {this.props.roi}</span>
                <p>{this.props.description}</p>
                <a className="link" href="contactform/send.php" target="_blank">Choose investment</a>
            </div> 
        );
    }
}