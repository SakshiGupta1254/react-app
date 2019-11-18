import React, {Component} from 'react';
import '../css/header.css';
export default class Header extends Component{


    render(){
        return (
        <React.Fragment>
        <div className="header"><p>This Is Header</p>
        <div className="wlcmMsg">Welcome Dear User!
         <div className="listOptions">
        <ul>
            <li>{ }            </li>
        </ul>
         </div>
        </div>
        </div>
        </React.Fragment>
        );
    }
}
