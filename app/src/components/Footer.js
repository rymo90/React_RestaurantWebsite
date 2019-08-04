import React from 'react';
import "./Footer.css"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { footer: "This is Footer" }
    }

    render() { 
        const style = {
            
            width: '100%',
            height: '50%'
        }
        return ( <div id ="map">
        
        <Map google={this.props.google} style = {style} zoom={15} initialCenter = {{
            lat: 59.236598,
            lng: 17.835475
        }}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
 </InfoWindow>
</Map>
            </div> );
    }
}
 


export default GoogleApiWrapper({
    apiKey: ('AIzaSyAff3BDPBnSVAaiPoDtl_F3jt7eS1gei30')
  })(Footer)