import React from 'react'
import './style.scss'

const FormWrapper = ({headline, children}) => {
    return (
        <div className='formwrapper'>
            <div className='wrap'>
                {headline && 
                    <h3> {headline} </h3>
                }

                <div className='formchild'>
                    {children && children}
                </div>


            </div>
        </div>
    )
}

export default FormWrapper;
