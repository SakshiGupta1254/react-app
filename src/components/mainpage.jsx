import React, { Component } from 'react';
import Upcoming from './upcoming';
import Live from './live';
import '../css/header.css';
import Past from './past'; 
import ReactDOM from 'react-dom';
class Mainpage extends Component {
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
     
     upcomingClicked = () => {
        document.getElementById('upcoming').style.display='block';
        document.getElementById('past').style.display='none';
        document.getElementById('live').style.display='none';
    
     }
     liveClicked= () => {
        document.getElementById('upcoming').style.display='none';
        document.getElementById('past').style.display='none';
        document.getElementById('live').style.display='block';
        debugger;
     }
     pastClicked= () => {
        document.getElementById('upcoming').style.display='none';
        document.getElementById('past').style.display='block';
        document.getElementById('live').style.display='none';
     }
     handleDecrement= counterId => {
        console.log("decremented",counterId);
        
    }
     
    render() { 
        
        return (
            <div>
                <button onClick={this.upcomingClicked}>Upcoming Campaigns</button>
                <button onClick={this.liveClicked}>Live Campaigns</button>
                <button onClick={this.pastClicked}>Past Campaigns</button>
                {
                  <React.Fragment>
                  <div id="upcoming">{this.state.rows.map(rows =><Upcoming date={rows.createdOn} event={rows.Component} price={rows.price} selected={true} ondelete={this.handleDecrement}/>)}
                  </div>
                  <div id="live"><Live/></div>
                  <div id="past"><Past /></div></React.Fragment>
               
                   
                }
            </div>
        )
    }
}
 
export default Mainpage;