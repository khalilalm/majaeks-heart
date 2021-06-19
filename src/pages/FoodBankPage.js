import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function FoodBank() {
    const mapStyles = {
        width: '400px',
        height: '400px',
    };

    const defaultCenter = {
        lat: 40.81892,
        lng: -73.92626
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div>
                        <h3>Zona de Cuba - Just and example</h3>
                        <p>
                            558 Grand Concourse<br />
                            Bronx, NY 10451
                        </p>
                    </div>
                </div>
                <div className="col">
                    <LoadScript googleMapsApiKey='AIzaSyAuHol6C3Fm5V789n6Hf1VGtdiFLbBgpZM'>
                        <GoogleMap
                            mapContainerStyle={mapStyles} 
                            zoom={13} 
                            center={defaultCenter}
                        >
                            {
                                <Marker key="MHFoodBank" position={{ 
                                    lat: 40.81892,
                                    lng: -73.92626
                                }} />
                            }
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
        
    );
}

export default FoodBank;