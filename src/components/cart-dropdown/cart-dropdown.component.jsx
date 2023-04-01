import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItems } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    };

    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                    ))
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>go to checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown