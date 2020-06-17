import React, { Component } from 'react';

export default class PodcastList extends Component {
    render() {
        return (
          <div className="col-sm-14">
            <div class="card text-center">
              <div class="card-header">
               <strong>Editor's Choice</strong>
              </div>
              <div class="card-body">
                <h5 class="card-title">The Animal Farm Podcast</h5>
                <img src="img/AF.jpg" />
                <p class="card-text">Presented By: George Orwell</p>
                <a href="/AnimalFarm" class="btn btn-primary">Play Now!</a>
              </div>
            </div>

            <div class="card text-center">
              <div class="card-header" />
              <div class="card-body">
                <h5 class="card-title">The Shack Podcast</h5>
                <img src="img/TS.jpg" />
                <p class="card-text">Presented By: William P. Young</p>
                  <a href="/TheShack" class="btn btn-success">Play Now!</a>
              </div>
            </div>

            <div class="card text-center">
              <div class="card-header" />
              <div class="card-body">
                <h5 class="card-title">Stephen King Daily Podcast</h5>
                <img src="img/SKC.jpg" height= "300" width= "185" />
                <p class="card-text">Presented By: Stephen King </p>
                <a href="/StephenKing" class="btn btn-danger">Play Now!</a>
              </div>
            </div>
        </div>
        );
    }
}
