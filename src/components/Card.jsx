import React from "react";
export default function Card(props) {
console.log(props.image)
    return(
        <div className="card-body">
                <div className="card">
                    <img className="eee" src={props.image} />
                                    <div className="content">
                                        <p>{props.name}</p>
                                        <p>{props.description}</p>
                                       
                                        <div className="card-price">{props.price}€</div>
                                        <div className={props.basket ? "card-buy" : "card-remove"} onClick={props.toggle}>{props.basket ? "Remove from cart" : "Add to cart"}</div>
                                        
                                    </div>
                </div>
            
            {/* <div className={props.basket ? "card-buy" : "card-remove"} onClick={props.toggle}>{props.basket ? "Remove from cart" : "Add to cart"}</div> */}
        </div>
    )
}
