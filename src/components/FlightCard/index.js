import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import S7Logo from '../../img/S7_logo.png';
import KLMLogo from '../../img/klm_logo.png';
import AeroflotLogo from '../../img/aeroflot_logo.png';

const FlightCard = ({item}) => {
    let logo;
    switch (item.carrier) {
        case 'S7':
            logo = S7Logo;
            break;
        case 'Aeroflot':
            logo = AeroflotLogo;
            break;
        case 'KLM':
            logo = KLMLogo;
            break;
        default:
            break;
    }
    return (
        <div className="content-container">
            <div className="item-container">
                <img className="logo" src={logo} alt={`${item.carrier} logo`}/>
                <p>Carrier: {item.carrier}</p>
            </div>
            <div className="item-container">
                <p>From: {item.direction.from}</p>
                <p>To: {item.direction.to}</p>
            </div>
            <div className="item-container">
                <p>Departure: {moment(item.departure).format('HH:mm, Do MMMM YYYY')}</p>
                <p>Arrival: {moment(item.arrival).format('HH:mm, Do MMMM YYYY')}</p>
            </div>
        </div>
    );
};

FlightCard.propTypes = {
    item: PropTypes.object
};

export default FlightCard;
