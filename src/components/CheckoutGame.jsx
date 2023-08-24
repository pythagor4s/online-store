import React from "react";
import disca from "../assets/discard.svg"

export default function CheckoutGame(props) {
    return (
        <div className="checkout-container">

                <h2 className="game-name-style">{props.name}</h2>
                <p className="game-price-style"><span className="bolded-price">{props.price}€</span></p>
        </div>
    )
}