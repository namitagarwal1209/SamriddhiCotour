import React from 'react'
import Header from './../components/header'

const MainLayout = props => {
    return (
        <div className='fullHeight'>
            <Header {...props}/>
            <div className="main">
                {props.children}
            </div> 
        </div>
    )
}

export default MainLayout
