import { DateField  as DatePicker } from 'react-date-picker';

import React from 'react';

import './date.css'


class DateRange extends React.Component {
    state = {
        startValue: null,
        endValue: null,
        endOpen: false,
    };

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
        this.props.onStartPanelChange(value);
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
        this.props.onEndPanelChange(value);
    }


    render() {
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div  style={{
                width: '52%',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '1rem'
            }}>
                <DatePicker
                    dateFormat="YYYY-MM-DD"
                    value={startValue}
                    placeholder="Start"
                    onChange={this.onStartChange}
                />
                <DatePicker
                    dateFormat="YYYY-MM-DD"
                    value={endValue}
                    placeholder="End"
                    onChange={this.onEndChange}
                />
            </div>
        );
    }
}

export default DateRange