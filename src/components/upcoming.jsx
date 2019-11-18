import React, { Component } from 'react';
import first from '../images/first.png';
import calendar from '../images/calendar.png';
import file from '../images/file.png';
import Price from '../images/Price.png';
import stat from '../images/statistics-report.png';
import Calendar from 'react-calendar';
//import '../images';
class Upcoming extends Component {
    state = { 
        callCalendar:false

     }
     handleDate=() => {
        this.setState({
            callCalendar: !this.state.callCalendar,
          });
    }
     displayDate=(date)=>{
        var event = new Date(date);
        var options = { month: 'short', year: 'numeric', day: 'numeric' };
        var frame;
        if(new Date(date)>= new Date()){
            var Difference_In_Time = new Date(date).getTime()-new Date().getTime();
            frame= "Days Ahead";
        }
        else
        {var Difference_In_Time = new Date().getTime()-new Date(date).getTime();
         frame=" Days Ago";
        }
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);       
        return `${event.toLocaleDateString('en-EN', options)} ${parseInt(Difference_In_Days)}  ${frame}`;
     }
     onChange = (date) => {
        console.log(date);
        }
    render() { 
        
        return ( 
        <div>
            <button onClick={this.upcomingClicked}>{this.props.label}</button>
            <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Campaign</th>
                        <th>View</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                                    <td>{this.displayDate(this.props.date)}</td>
                                    <td><img src={first} /></td>
                                    <td><img src={Price}/>{this.props.price}</td>
                                    <td><img src={file} />CSV</td>
                                    <td><img src={stat} />Report</td>
                                    <td onClick={this.handleDate}>
                                    {this.state.callCalendar ? <Calendar onChange={this.onChange()} value={new Date(this.props.date)}/>: null} <img src={calendar}/>Schedule Again</td>
                                </tr>         
                    </tbody>
                </table>
        </div> );
    }
}
 
export default Upcoming;