import React, { Component } from 'react';
import './Hero.css';
import background from '../../assets/videos/background.mp4';
import Navbar from "../navbar/Navbar";
import { MenuItems } from "../navbar/MenuItems"
import Antoine from "../../assets/images/Antoine.png";


class Hero extends Component {

    state = {
        isVisible: true,
        onPlay: false,
        onChose: true,
        stepB: false,
    };

    anime = () => {
        this.setState(prevState => ({ isVisible: !prevState.isVisible }));
        this.setState(prevState => ({ onPlay: !prevState.onPlay }));
    };

    out = () => {
        this.setState(prevState => ({ onChose: !prevState.onChose }));
        this.setState(prevState => ({ stepB: !prevState.stepB }));

    }

    render() {

        const { isVisible } = this.state;
        const { onPlay } = this.state;
        const { onChose } = this.state;
        const { stepB } = this.state;



        return (

            <>
            <div className="over">
            <video className='video' autoPlay loop muted>
                <source src={background} type='video/mp4' />
                </video>

                <div className={this.state.isVisible ? "heroContent" : "anime"}>
                    <h2 className="neonanim"><em> Website </em></h2>

                <div className = 'buttonhero' >
                        <button className='buth' onClick={this.anime}> Enter </button> 
                    </div>
                </div>

                    <div className={this.state.onPlay ? "start" : "stop"}>
                        <div className={this.state.onChose ? "notChose" : "Chose"}>

                             <h2 className="neonanim_2">where do you wanna go ?</h2>
                                 <div className="submenu"> <ul>

                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a className={item.cName} href={item.url} onClick={this.out}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>

                            </div>
                        </div>
                        </div>

                        <div className={this.state.stepB ? "Appear" : "NotAppear"}>
                             <h2 className="neonanim_2"><em> This is who I am </em></h2>

                        <div className='row' >
                            <div className='column' >
                                <img src={ Antoine }/>
                                 </div>

                            <div className='column' >
                                <ul>
                                    <li> <p className="btn"> Antoine HOELLINGER </p> </li>
                                    <li> <p className="btn"> Age : 21 yo </p> </li>
                                    <li> <p className="btn"> Location : Paris </p> </li>
                                    <li> <p className="btn"> Love to design & code </p> </li>

                                </ul>

                                         </div>

                        </div>
                    </div>
                </div>
                </>
            )
    }
}

export default Hero