import React from 'react'

const Alert = (props) => {
    const capitalizeFirst =(text)=>{
        return text.charAt(0).toUpperCase() + text.slice(1)
        console.log(text);
    }
    return (

        <>
            <div style={{ height: '50px' }}>
                {props.alert &&
                    <div className={`alert alert-${props.alert.type} alert-dismissible fade show absolute`} role="alert">
                        <strong>{capitalizeFirst(props.alert.type)}</strong>{props.alert.msg}
                    </div>}
            </div>
        </>
    )
}

export default Alert
