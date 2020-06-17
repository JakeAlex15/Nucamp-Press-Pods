import React, { Component } from 'react';

export default class AF extends Component {
    render() {
        return (
            <div className= "container py-5"> 
            <div className= "row">
                <div className= "col-10 mx-auto text-center text-blue my-5">
                    <h1>Stephen King Daily Podcast</h1>
                </div>
            </div>
            <div className= "row">
                <div className= "col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src= "img/SKC.jpg" width= "200" className= "img-fluid" alt= "Stephen King" />
                </div>
                <div className= "col-10 mx-auto col-md-6 my-3 text-capitalize">

                    <h2>Presented By: Stephen King</h2>
                    <h5 className= "text-title mt-3 mb-2">
                    Stephen Edwin King is an American author of horror, supernatural fiction, suspense, crime, science-fiction, 
                    and fantasy novels. His books have sold more than 350 million copies, and many have been adapted into films, 
                    television series, miniseries, and comic books.
                    </h5>

                </div>
            </div>
            </div>
        );
    }
}
