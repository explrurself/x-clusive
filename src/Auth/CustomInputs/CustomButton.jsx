import React from 'react';

import '../../scss/customButton.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps})=>(

    <button className={` ${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : "" } custom-button`} {...otherProps} >
        {children}
    </button>
)
export default CustomButton