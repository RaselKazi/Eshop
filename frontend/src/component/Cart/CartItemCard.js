import React from "react";
import "./CartItemCard.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
      </div>
      <Button
        onClick={() => deleteCartItems(item.product)}
        variant="outlined"
        color="secondary"
      >
        Remove
      </Button>
    </div>
  );
};

export default CartItemCard;
