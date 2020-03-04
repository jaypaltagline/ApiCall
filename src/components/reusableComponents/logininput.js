import React from 'react'

export default function Logininput({ name, label, type, value, onChange }) {
    return (
        
             <React.Fragment>
            <label>{label}</label>
            <br />
            <input name={name} type={type} value={value} onChange={onChange} />
            <br />
            </React.Fragment>
        
    )
}
