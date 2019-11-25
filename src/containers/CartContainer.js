import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';

class CartContainer extends Component {
    render() {
      var { cart } = this.props;
      return (
        <Cart>
          { this.showCartItem(cart) }
        </Cart>
      )
    }

    showCartItem = (cart) => {
      var result = <tr>
             <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
      if(cart.length > 0) {
        result = cart.map((item, index) => {
          return (
            <CartItem
                key={ index }
                item = {item}
                index = {index}
            />
          )
        })
      }
    return result;
  }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartContainer);
