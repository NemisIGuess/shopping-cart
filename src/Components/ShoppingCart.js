import '../Style/ShoppingCart.css';
import { useContext, useState } from 'react';
import { CartContext } from './Database';
import _ from 'lodash';

function ShoppingCart() {
  const context = useContext(CartContext);
  // const cartItems = context._cart;

  const [cartItems, setCartItems] = useState(context._cart);

  return (
    <div className="shoppingCart">
      {cartItems.map((game) => {
        return (
          <div className="cartItem" key={_.uniqueId()}>
            <img className="cartImg" src={game.images[0]} alt={game.game} />
            <div className="catalogueExtras">
              <p className="cataloguePrice">{game.price}</p>
              <button
                onClick={(e) => {
                  context.addItemToCart(e.target.value);
                }}
                value={game.game}
                className="catalogueBtn"
              >
                Add one more
              </button>
              <button
                onClick={(e) => {
                  context.removeItemFromCart(e.target.value);
                }}
                value={game.game}
                className="catalogueBtn"
              >
                Remove from cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingCart;
