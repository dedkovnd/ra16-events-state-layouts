import React from "react";

export function ListView ({state,item}) {
    if (state === "view_list") {
        return (
            <div>
                {item.map((e, i) => <div key={i} className="card-list">
                    <img src={e.img} style={{maxWidth:"100px"}}/>
                    <span>{e.name}</span>
                    <span>{e.color}</span>
                    <span>{e.price}</span>
                </div>)}
            </div>
        )
    } else {
        return null
    }
}