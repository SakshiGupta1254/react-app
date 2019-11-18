import React, { Component } from 'react';
import first from '../images/first.png';
import calendar from '../images/calendar.png';
import file from '../images/file.png';
import Price from '../images/Price.png';
import stat from '../images/statistics-report.png';
import ReactDOM from 'react-dom';
//import '../images';
class Upcoming extends Component {
    state = { 
        

     }
     handeleIncrement=() => {
        console.log("incremented",this);
        this.setState({count:this.state.count+1})
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
    
     handleDecrement= counterId => {
        console.log("decremented",counterId);
        const counters = this.state.counters.filter(c=> c.id !== counterId);
        this.setState({counters});
    }
    render() { 
        
        return ( <div>
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
                        {this.state.rows.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{this.displayDate(data.createdOn)}</td>
                                    <td><img src={first} /></td>
                                    <td><img src={Price}/>{data.price}</td>
                                    <td><img src={file} />CSV</td>
                                    <td><img src={stat} />Report</td>
                                    <td onClick={this.handeleIncrement}><img src={calendar}/>Schedule Again</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div> );
    }
}
 
export default Upcoming;