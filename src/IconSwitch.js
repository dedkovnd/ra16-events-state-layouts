import React from "react";

export function Switch ({view,onClick}) {
    return (
        <>
            <i className="material-icons myswitch" onClick={onClick}>{view}</i>
        </>
    )
}