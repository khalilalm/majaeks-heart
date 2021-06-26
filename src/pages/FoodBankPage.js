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
                        <h3>Food Distribution Center Feeding Families</h3>
                        <p>
                        110 View Ct, Mt Pocono, PA 18344
                        </p>
                    </div>
                    <div>
                        <h3>Pocono Mountain Ecumenical Hunger Ministry</h3>
                        <p>
                        5570 Memorial Blvd, Tobyhanna, PA 18466
                        </p>
                    </div>
                   
                </div>
                {/* <div className="col">
                    <LoadScript googleMapsApiKey='AIzaSyAOhYMEA3ODWX3r7yGkzkNT5Pn9x4WVdWQ'>
                        <GoogleMap
                            mapContainerStyle={mapStyles} 
                            zoom={13} 
                            center={defaultCenter}
                        >
                            {
                                <Marker key="MHFoodBank" position={{ 
                                    lat: 40.81891,
                                    lng: -73.92626
                                }} />
                            }
                        </GoogleMap>
                    </LoadScript>
                </div> */}
            </div>
        </div>
        
    );
}

export default FoodBank;