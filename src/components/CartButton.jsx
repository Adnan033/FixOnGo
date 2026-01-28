function CartButton({ count, onClick }) {
  return (
    <button className="cart-btn" onClick={onClick}>
      🛒 Cart ({count})
    </button>
  );
}

export default CartButton;
