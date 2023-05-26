import React from "react";
import "../item-menu/item-menu.css";
import { ItemMenu } from "../item-menu/item-menu";
import Susi1 from "../images/Menu/susi/susi1.png"
import Susi2 from "../images/Menu/susi/susi2.png"
import Susi3 from "../images/Menu/susi/susi3.png"
import Susi5 from "../images/Menu/susi/susi5.png"
import Susi7 from "../images/Menu/susi/susi7.png"

const SusiMenu = () => {
    const susis = [
        {
            id: 1,
            name: "гункан с крабом",
            photo: `${Susi1}`,
            weight: "60",
            price: 255 
        },
        {
            id: 2,
            name: "суси из тунца",
            photo: `${Susi2}`,
            weight: "55",
            price: 125
        },
        {
            id: 3,
            name: "гункан с угрем",
            photo: `${Susi3}`,
            weight: "60",
            price: 275
        },
        {
            id: 4,
            name: "суси из семги",
            // photo: `${}`,
            weight: "55",
            price: 135
        },
        {
            id: 5,
            name: "гункан с семгой",
            photo: `${Susi5}`,
            weight: "60",
            price: 285
        },
        {
            id: 6,
            name: "суси из креветки",
            // photo: `${Susi1}`,
            weight: "55",
            price: 115
        },
        {
            id: 7,
            name: "суси из угря",
            photo: `${Susi7}`,
            weight: "55",
            price: 265
        }
    ];

  return (
    <div className="item-menu">
      <h1>ГУНКАНЫ И СУСИ</h1>
      <ItemMenu items={susis} />
    </div>
  );
};

export default SusiMenu;




