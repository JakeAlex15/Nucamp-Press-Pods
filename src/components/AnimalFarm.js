import React, { Component } from 'react';

export default class AnimalFarm extends Component {
    render() {
        return (
            <div className= "container py-5"> 
            <div className= "row">
                <div className= "col-10 mx-auto text-center text-blue my-5">
                    <h1>The Animal Farm Podcast</h1>
                </div>
            </div>
            <div className= "row">
                <div className= "col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src= "img/AF.jpg" className= "img-fluid" alt= "Animal Farm" />
                </div>
                <div className= "col-10 mx-auto col-md-6 my-3 text-capitalize">

                    <h2>Presented By: George Orwell</h2>
                    <h5 className= "text-title mt-3 mb-2">
                    Eric Arthur Blair, better known by his pen name George Orwell, was an English novelist and essayist, 
                    journalist and critic. His work is characterised by lucid prose, biting social criticism, 
                    and opposition to totalitarianism.
                    </h5>

                </div>
            </div>
            </div>
        );
    }
}
