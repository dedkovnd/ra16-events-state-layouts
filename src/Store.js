import React,{useState} from "react";
import {Switch} from "./IconSwitch";
import {CardView} from "./CardView";
import {ListView} from "./ListView";

export function Store(props){
    const [icon,setIcon] = useState("view_list")
    function  checkIcon(icon) {
       if (icon === "view_list") {
           setIcon("view_module")
       } else {
           setIcon("view_list")
       }
    }
    const onTest = evt => {
       setIcon(prevState => {checkIcon(prevState)})
    }

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    return(
        <>
            <Switch view={icon} onClick={onTest}/>
            <CardView state={icon} item={products}/>
            <ListView state={icon} item={products}/>
            </>
    )
}