import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
  const { id, name, price, quantity } = props;

  const { removeFromBasket, incItemQuantity, decItemQuantity } =
    useContext(ShopContext);

  return (
    <li className="collection-item">
      {name}
      <button
        className="btn-small waves-effect waves-light basket-quantity"
        onClick={() => decItemQuantity(id)}
      >
        -
      </button>
      &nbsp;
      {quantity}
      &nbsp;
      <button
        className="btn-small waves-effect waves-light basket-quantity"
        onClick={() => incItemQuantity(id)}
      >
        +
      </button>{" "}
      = {price * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
