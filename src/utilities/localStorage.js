export const getCartFromLocalStorage = () => {
    const cartsString = localStorage.getItem('cart');
    if (cartsString) {
        return JSON.parse(cartsString);
    }
    return []
}

export const setCartToLocalStorage = (carts) => {
    const stringCards = JSON.stringify(carts);
    localStorage.setItem('cart', stringCards);
}

export const addToCarts = (cart) => {
    const carts = getCartFromLocalStorage();
    carts.push(cart);
    setCartToLocalStorage(carts)
}

export const removeFromStorage = (id) => {
    const carts = getCartFromLocalStorage()
    const remainingCart = carts.filter(cart => cart !== id);
    setCartToLocalStorage(remainingCart);
}
