import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { increase, decrease, removeFromCart } from "../actions";
import { toast } from 'react-toastify';

const Cart = (props) => {

  const removeFromCartAndNotification = (book) =>{
    props.removeFromCart(book.id);
    toast.error(`${book.name} remove from your card`)
  }

  const totalCartAmount = props.cart.reduce(
    (total, book) => (total = total + book.price * book.count), 0)
  
  return (
    <div>
      <h2>
        <Link to="/">Books List</Link> <span>My Cart ({props.cart.length})</span>
      </h2>

      <h3>Total price: $ {totalCartAmount.toFixed(2)} </h3>

      {props.cart.map((book) => (
        <div className="book" key={book.id}>
          <img
            src={book.image}
            alt={book.name}
          />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: $ {book.price}</p>
            <p>Total: $ {(book.price*book.count).toFixed(2)}</p>
            <p>You have {book.count} of this book in your cart</p>
            <button className="btn btn-outline-success" onClick={()=>props.decrease(book.id)}>-</button>
            <button className="btn btn-danger" onClick={()=>removeFromCartAndNotification(book)}>Remove from the cart</button>
            <button className="btn btn-outline-success" onClick={()=>props.increase(book.id)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateProps, {increase, decrease, removeFromCart})(Cart);
