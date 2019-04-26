import React, { Component } from 'react'
import Event from './Event';

class Events extends Component {
    
    render() { 
        return ( 
                <div className="uk-child-width-1-4@m" uk-grid="true">
                    {Object.keys(this.props.events).map (key =>(
                        <Event
                        key = {key}
                        info = {this.props.events[key]}
                        />

                    ))}
                </div>

         );
    }
}
 
export default Events;