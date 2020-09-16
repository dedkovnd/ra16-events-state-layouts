import React from "react";

export function CardView ({state,item}) {
    if (state === "view_module") {
        return (
            <div className="card-view">
                {item.map((e, i) =>
                    <div className="shop-card" key={i}>
                       <div>{e.name}</div>
                       <div>{e.color}</div>
                        <img src={e.img} style={{maxWidth: "200px"}}/>
                       <div>{e.price}</div>
                    </div>
                )}
            </div>
        )
    } else {
        return null
    }
}