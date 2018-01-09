import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFlights, getSelectedCarrier} from '../../selectors/aviaInfoSelectors';
import {changeSelectedCarrier, loadFlightsData} from '../../actions/flightsActions';
import FlightCard from '../../components/FlightCard';
import constants from '../../constants';
import '../../styles/main.css';

class App extends Component {
    state = {
        carriers: []
    };

    componentDidMount() {
        this.props.loadFlightsData();
    }

    componentWillReceiveProps(nextProps) {
        const {flightsData} = nextProps;
        if (flightsData.length) {
            const carriers = flightsData
                .map((item) => item.carrier)
                .filter((value, index, self) => self.indexOf(value) === index);
            this.setState({
                carriers
            });
        }
    }

    render() {
        const {handleSelectChange, selectedCarrier} = this.props;
        let flights = this.props.flightsData;
        if (selectedCarrier !== constants.ALL) {
            flights = flights.filter((item) => item.carrier === selectedCarrier);
        }
        return (
            <div className="main-container">
                <div className="select-container">
                    <select className="select" onChange={(event) => handleSelectChange(event.target.value)}>
                        <option value={constants.ALL}>All carriers</option>
                        {this.state.carriers.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                {flights.map((item) => (
                        <FlightCard key={item.id} item={item}/>
                    ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    flightsData: getFlights(state),
    selectedCarrier: getSelectedCarrier(state)
});

App.propTypes = {
    loadFlightsData: PropTypes.func,
    flightsData: PropTypes.array,
    selectedCarrier: PropTypes.string,
    handleSelectChange: PropTypes.func
};

export default connect(
    mapStateToProps,
    {
        loadFlightsData,
        handleSelectChange: changeSelectedCarrier
    }
)(App);
