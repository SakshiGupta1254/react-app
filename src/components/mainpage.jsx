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
         live: {
           showLiveData: false,
           data:[{
           "name": "Test Whatsapp",
           "id":"12",
           "region": "US",
           "createdOn": 1559807714999,
           "price": "Price info of Test Whatsapp",
           "csv": "Some CSV link for Whatsapp",
           "report": "Some report link for Whatsapp",
           "image_url":"./images/first.png" 
           }]
          },
         UpComing:{
           showUpcomingData:true,
           data:[{"name": "Super Jewels Quest",
           "id":"11",
           "region": "CA, FR",
           "createdOn": 1559806715124,
           "price": "Price info of Super Jewels Quest",
           "csv": "Some CSV link for Super Jewels Quest",
           "report": "Some report link for Super Jewels Ques",
           "image_url":"Some image url of the campaign"}]
         },
         past:{
           showPastData:false,
           data:[{"name": "Mole Slayer",
           "id":"10",
           "region": "FR",
           "createdOn": 1559806711124,
           "price": "Price info of Mole Slayer",
           "csv": "Some CSV link for Mole Slayer",
           "report": "Some report link for Mole Slayer",
           "image_url":"Some image url of the campaign"}]
         },
        
       

    }
     
     upcomingClicked = () => {
       
    
     }
     
     
    render() { 
        
        return (
            <div>
                
                {
                  <React.Fragment>
                  <div id="upcoming">{this.state.UpComing.data.map(data =><Upcoming key={data.id} label="Upcoming Events" date={data.createdOn}/>)}
                  </div>
                  <div id="live">{this.state.live.data.map(data =><Upcoming key={data.id} label="Live Events" date={data.createdOn}/>)}
                  </div>
                  <div id="past">{this.state.past.data.map(data =><Upcoming key={data.id} label="Past Events" date={data.createdOn}/>)}</div>
                  </React.Fragment> 
               
                   
                }
            </div>
        )
    }
}
 
export default Mainpage;