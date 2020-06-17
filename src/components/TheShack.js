import React, { Component } from 'react';

export default class TheShack extends Component {
    render() {
        return (
            <div className= "container py-5"> 
            <div className= "row">
                <div className= "col-10 mx-auto text-center text-blue my-5">
                    <h1>The Shack Podcast</h1>
                </div>
            </div>
            <div className= "row">
                <div className= "col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src= "img/TS.jpg" className= "img-fluid" alt= "The Shack" />
                </div>
                <div className= "col-10 mx-auto col-md-6 my-3 text-capitalize">

                    <h2>Presented By: William P. Young</h2>
                    <h5 className= "text-title mt-3 mb-2">
                    Young attended bible college, and later received a BA in Religion from Warner Pacific College in Portland, Oregon. 
                    Young married Kim Warren and held a number of jobs in early adulthood including working for a church and 
                    owning businesses in insurance, construction, and more. The couple had six children, and Christianity played a large 
                    role in the family. Young wrote The Shack, his first novel, as a gift for his children.
                    </h5>
                </div>
            </div>
        </div>
        );
    }
}
