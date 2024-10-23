/* eslint-disable react/prop-types */
function Bottle({ bottle, addToCart, removeCard }) {
    return (
        <div className="">
            <div className="mx-auto border max-w-60 p-4 text-center rounded-xl space-y-4">
                <h2 className="text-xl text-white">{bottle.name}</h2>
                <img className="rounded-md" src={bottle.img} alt="" />
                <div className="flex gap-4 justify-center items-center">
                    <p className="text-lg text-purple-600">Price: {bottle.price}</p>
                    <p className="text-lg text-sky-600">Stock: {bottle.stock}</p>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <button onClick={() => addToCart(bottle)} className="p-1 border border-cyan-500 text-cyan-600 hover:bg-cyan-600 hover:text-white rounded-lg px-2">Purchase</button>
                    <button onClick={() => removeCard(bottle.id)} className="p-1 border border-cyan-500 text-cyan-600 hover:bg-cyan-600 hover:text-white rounded-lg px-2">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Bottle
