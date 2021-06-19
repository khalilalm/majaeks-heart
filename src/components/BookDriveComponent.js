import React from 'react';

function BookDrive() {
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col align-items-center">
                    <img src="/assets/images/bookdrive_lg.jpg" alt="Book Drive" />
                    <div className="mt-5">You can donate books by dropping them off, or sending them to:</div>
                    <p>Some future address</p>
                    <p>Or, you can purchase your book(s) through Amazon from Majaek’s Heart gift registry: </p>
                    <p><a href="https://www.amazon.com/registries/custom/1F8RTPOW8CM4G/guest-view">Majaek’s Heart Book Drive</a></p>
                </div>
            </div>
        </div>
    );
}

export default BookDrive;