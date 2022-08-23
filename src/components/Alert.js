import React from 'react'

function Alert(props) {
    const capitlized = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1) ;
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> */}
            <strong>{capitlized(props.alert.type)}</strong> : {props.alert.msg}

            {/* <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> */}
            <button type="button" className="close"  data-bs-dismiss="alert" aria-label="Close">&times;</button>
        </div>
    )
}

export default Alert
