import React from "react";
import Card from "../components/Card";
import data from "../data"
import CheckoutGame from "../components/checkoutGame";

export default function Games() {

    const [games, setGames] = React.useState(data)

    function toggle(id) {
        setGames(prevGames => {
            return prevGames.map((game) => {
                return game.id === id ? {...game, basket: !game.basket} : game
            })
        })
    }


    const basketItems = games.map(game => {
        if(game.basket === true) {
            return <CheckoutGame 
                name={game.name}
                price={game.price}
            />
        } 
    }
    )

    const totalItems = []
    games.map(game => game.basket ? totalItems.push(game.price) : "")


    /////////////////////////////////////////////////////////////////////////



    /////////////////////////////////////////////////////////////////////////

    const sum = totalItems.reduce((partialSum, a) => partialSum + a, 0).toFixed(2);

    console.log(data)
    const gameElements = games.map(game => {
        return <Card 
             name={game.name}
             description={game.description}
             price={game.price}
             basket={game.basket}
             play={game.play}
             id={game.id}
             key={game.key}
             toggle={() => toggle(game.id)}
             path={game.path}
             image={game.image}
        />
     })

     function notify(array) {
        console.log(array.length < 1 
            ? alert("Error: The cart is empty!") 
            : alert("Order placed sucessfully"))
     }

     



 

    return(
        <div className="wrapper">
            <div className="cart-holder">
                <div>
                <div className="top-info">
                    <h1 className="cart-up">Cart</h1>
                    <h1 className="cart-up">{totalItems.length < 1 ? null : totalItems.length} {totalItems.length === 0 ? "empty" : totalItems.length === 1 ? "Item" : "Items"}</h1>
                </div>
                <div className="cart-body">
                    {basketItems}
                </div>
                </div>
                
                {totalItems.length > 0 ? <h1 className="other">Total:<span className="total">{sum}€</span></h1> : null}
                <div className="checkout-button" onClick={() => notify(totalItems)}>Place order</div>
            </div>
            <div className="games-holder">
                {gameElements}
            </div>
        </div>
    )
}