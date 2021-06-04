import React from 'react';
import ghagra from './../../assets/ghagra.jpg';
import dress from './../../assets/dress.jpeg';
import kurti from './../../assets/kurti.jpg';
import nightdress from './../../assets/nightdress.jpeg';
import shortdress from './../../assets/shortdress.jpeg';
import './style.scss';

const Directory = props => {
    return (
        <div className = 'directory'>
            <div className = 'wrap'>
                <div className= 'item' style = {{
                    backgroundImage: `url(${ghagra})`
                    }}>
                        <a> SHOP GHAGRA</a>
                </div>

                <div className= 'item' style = {{
                    backgroundImage: `url(${dress})`
                    }}>
                        <a> SHOP DRESS</a>
                </div>

                <div className= 'item' style = {{
                    backgroundImage: `url(${kurti})`
                    }}>
                        <a> SHOP KURTI</a>
                </div>

                <div className= 'item' style = {{
                    backgroundImage: `url(${nightdress})`
                    }}>
                        <a> SHOP NIGHTDRESS</a>
                </div>

                <div className= 'item' style = {{
                    backgroundImage: `url(${shortdress})`
                    }}>
                        <a> SHOP SHORTDRESS</a>
                </div>

            </div>
        </div>
    )
}

export default Directory;
