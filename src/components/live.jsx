import React, { Component } from 'react';
import images from '../images/first.png';
import ReactDOM from 'react-dom';
class Live extends Component {
    state = { 
         headings : [
            'Date',
            'Campaign',
            'View',
            'Action',            
          ],
          rows: [{
            "name": "Test Whatsapp",
            "region": "US",
            "createdOn": 1559807714999,
            "price": "Price info of Test Whatsapp",
            "csv": "Some CSV link for Whatsapp",
            "report": "Some report link for Whatsapp",
            "image_url":"./images/first.png" 
          },
          {
            "name": "Super Jewels Quest",
            "region": "CA, FR",
            "createdOn": 1559806715124,
            "price": "Price info of Super Jewels Quest",
            "csv": "Some CSV link for Super Jewels Quest",
            "report": "Some report link for Super Jewels Ques",
            "image_url":"Some image url of the campaign"
          },
          {
            "name": "Mole Slayer",
            "region": "FR",
            "createdOn": 1559806711124,
            "price": "Price info of Mole Slayer",
            "csv": "Some CSV link for Mole Slayer",
            "report": "Some report link for Mole Slayer",
            "image_url":"Some image url of the campaign"
          },
          {
            "name": "Mancala Mix",
            "region": "JP",
            "createdOn": 1559806680124,
            "price": "Price info of Mancala Mix",
            "csv": "Some CSV link for Mancala Mix",
            "report": "Some report link for Mancala Mix",
            "image_url":"Some image url of the campaign"
          }
        ]

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
        
        return ( <div>EFFXr
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
                                    <td><img src={data.image_url} alt="Smiley face"/></td>
                                    <td>{data.price}</td>
                                    <td>{data.csv}</td>
                                    <td>{data.report}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div> );
    }
}
 
export default Live;