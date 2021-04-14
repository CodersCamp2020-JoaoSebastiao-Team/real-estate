import './index.scss';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

class Calendar extends Component {
    constructor(props: any){
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }
        startedDate = () => {
         // @ts-ignore
        alert((Math.abs(this.state.startDate - this.state.endDate))/(1000*3600*24)+1); 
        }

    render() {
        return (
            <div id="calendar_container">
                <DateRangePicker
                //@ts-ignore
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                //@ts-ignore
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                //@ts-ignore
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />
                {/* <button onClick={this.startedDate}>COST</button> */}
                <p>Łącznie: {//@ts-ignore
                (Math.abs(this.state.startDate - this.state.endDate))/(1000*3600*24)+1} dni</p>
            </div>

        )

    }
}
























// import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

// function Calendar() {
    
//     const startValue: Date = new Date(new Date().getFullYear(), new Date().getMonth());
//     const minValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
//     const endValue: Date = new Date(new Date().getFullYear(), new Date().getMonth());
//     return (

//         <div id="calendar_container">
//             <DateRangePickerComponent placeholder="Which days you want to book ?"
//             startDate = {startValue}
//             endDate = {endValue}
//             min = { minValue }
            
//             format="dd-MM-yy"></DateRangePickerComponent>
//         </div>
//     );
// }

export default Calendar;