function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incItemQuantity = Function.prototype,
    decItemQuantity = Function.prototype,
  } = props;

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
