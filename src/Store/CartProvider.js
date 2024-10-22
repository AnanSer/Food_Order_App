import CartContext from "./Cart-context";

const CartProvider=(props)=>{

    

    const CartContex = {
        item:[],
        total:0,
        addItem: ,
        removeItem:
    };


    <CartContext.Provider>

{props.children}

    </CartContext.Provider>
    

}

export default CartProvider;