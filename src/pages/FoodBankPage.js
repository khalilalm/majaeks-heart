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
                        <p>110 View Ct, Mt Pocono, PA 18344 </p>
                        <h3>Pocono Mountain Ecumenical Hunger Ministry</h3>
                        <p>5570 Memorial Blvd, Tobyhanna, PA 18466 </p>
                    </div>
                </div>
               
            </div>
        </div>
        
    );
}

export default FoodBank;