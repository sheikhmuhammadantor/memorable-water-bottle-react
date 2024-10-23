import { useState, useEffect } from "react";
import Bottle from "./Bottle";
import Cart from "./Cart";
import { addToCarts, getCartFromLocalStorage, removeFromStorage } from "../utilities/localStorage";

export default function Bottles() {
    const [bottles, setBottles] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        if (bottles.length) {
            const storageCard = getCartFromLocalStorage();
            const savedCart = [];
            storageCard.forEach((id) => {
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle);
                }
            })
            setCarts(savedCart)
        }
    }, [bottles]);

    const addToCart = (cart) => {
        const isExist = carts.find(c => c.id === cart.id);
        if (isExist) return
        setCarts([...carts, cart]);
        addToCarts(cart.id);
    }

    const removeCard = (id) => {
        // Remove from UI
        const remainingCarts = carts.filter(cart => cart.id !== id)
        setCarts(remainingCarts);
        // Remove from LocalStorage;
        removeFromStorage(id);
    }
    return (
        <section>
            <p className="text-2xl text-center font-bold text-cyan-600">Bottles Available: {bottles.length}</p>
            <p className="text-xl text-center font-bold text-green-600">In Cart: {carts.length}</p>
            {/* Cart Added; */}
            <div className={`flex gap-2 flex-wrap ${carts.length && 'border my-2 p-2'} rounded-lg mx-5`}>
                {carts.map(cart => <Cart key={cart.id} cart={cart} ></Cart>)}
            </div>
            {/* Bottle Grid Section; */}
            <section className="grid grid-cols-3 gap-x-4 gap-y-10 justify-center items-center px-5 my-8">
                {bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} addToCart={addToCart} removeCard={removeCard} ></Bottle>)}
            </section>
        </section>
    )
}
