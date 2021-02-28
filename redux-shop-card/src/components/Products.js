import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../actions";
import { connect } from "react-redux";
import { toast } from 'react-toastify';


const Products = (props) => {

  const addToCartAndNotification = (book) =>{
    props.addToCart(book);
    toast.success(`${book.name} added to your card`)
  }

  
  return (
    <div>
      <h2>
        <span>Books List</span>
        <Link to="/cart">My Cart({props.cart.length})</Link>
      </h2>
      {props.booklist.map(book => 
        <div className="book" key={book.id}>
        <img
          src={book.image}
          alt={book.name}
        />
        <div>
          <h4>{book.name}</h4>
          <p>Author: {book.author}</p>
          <p>Price: $ {book.price}</p>
          <button className="btn btn-primary" onClick={()=>addToCartAndNotification(book)}>Add to Cart</button>
        </div>
      </div>
      )}
      
    </div>
  );
};

const mapStateProps = state => {
  return {
    booklist: state.booklist,
    cart: state.cart
  }
}

export default connect(mapStateProps, {addToCart})(Products);
