import React from 'react';
import { ThemeContext } from '../MyTheme.js'
import './settings.css';


const Settings = (props) => {
    const theme = React.useContext(ThemeContext);
    return(
        <div className="settings-wrapper">
            <p className="eachSetting">Change App Background:</p>
            <select className="options" onChange={(e) => props.handleSettingsChange(e)} >
                <option value="gradient">Gradient</option>
                <option value="solid">Solid</option>
            </select>
        </div>
    )
};


export default Settings;