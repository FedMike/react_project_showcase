function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { regularPrice },
    displayAssets = [],
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img
          src={
            displayAssets[0]?.full_background ??
            "https://place-hold.it/512x512?text=No image"
          }
          alt={displayName}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id: mainId,
              name: displayName,
              price: regularPrice,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {regularPrice} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
