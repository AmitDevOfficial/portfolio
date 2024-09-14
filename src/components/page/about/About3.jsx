import React from 'react';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export default function About3() {
    return (
        <div className='edu container'>
            <h3 className='prohead'>Professional Journey</h3>
            <div className="profjour">
                <div className='proJur'>
                    <AppRegistrationIcon className='eduIcon' />
                    <hr />
                </div>
                <div className="eduInfoSec">
                    <p><b>Webtech Integration Indore (Madhya Pradesh)</b></p>
                    <ul>
                        <li>WordPress and PHP Developer</li>
                        <li><b>(2023 - 2023)</b></li>
                    </ul>
                </div>
            </div>
            <div className="profjour">
                <div className='proJur'>
                    <AppRegistrationIcon className='eduIcon' />
                    
                </div>
                <div className="eduInfoSec profjourtwo">
                    <p><b>Lemosys Infotech PVT LTD Indore Madhya Pradesh</b></p>
                    <ul>
                        <li>WordPress and PHP Developer</li>
                        <li><b>(2023 - 2024)</b></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
