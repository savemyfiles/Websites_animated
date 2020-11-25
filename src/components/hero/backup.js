import React, { Component } from 'react';
import './Hero.css';
import background from '../../assets/videos/background.mp4';

class Hero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (

            <>
                <video className='video' autoPlay loop muted>
                <source src={background} type='video/mp4' />
                </video>

                {  this.state.show ?   <div className="heroContent">
                <h2> Website </h2>

                <div className = 'buttonhero' >
                                <button onClick={() => { this.setState({ show: !this.state.show }) }}> Enter </button>
                            </div>

                        </div> : null

                }

                </>
            )
    }
}

export default Hero