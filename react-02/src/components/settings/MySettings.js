import React from 'react';
import { ThemeContext } from '../MyTheme.js'
import './settings.css';


const Settings = (props) => {
    const themeContext = React.useContext(ThemeContext);
    return(
        <div className="settings-wrapper" style={{ background: themeContext.theme.background }}>
            <p className="eachSetting">Change App Background:</p>
            <select className="options" onChange={(e) => props.handleSettingsChange(e)} value={props.themeValue}>
                <option value="gradient">Gradient</option>
                <option value="solid">Solid</option>
            </select>
        </div>
    )
};


export default Settings;