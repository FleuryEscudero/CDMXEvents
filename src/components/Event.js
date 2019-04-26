import React, { Component } from 'react';

class Event extends Component {
    state = {  }
    render() {
        
       const {name, logo , logo_id, url} = this.props.info;
       let desc = this.props.info.description.text;

       if (desc.length > 300){
           desc = desc.substr(0,300);
       }
       
      
       if(!name) return null;

        return ( 
                <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                    {logo !=null ? 
                                      <img src={logo.url} alt={logo_id}/> :
                                      ''
                                      }                              
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">{name.text} </h3>
                                <p>{desc}</p>
                            </div>
                            <div className="uk-card-footer">
                               <a className="uk-button uk-button-secondary" href={url} target="_blank" > Mas Info...</a>
                            </div>
                        </div>
                </div>
         );
    }
}
 
export default Event;