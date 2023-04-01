import { useContext } from 'react';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { CartContext } from '../../context/cart.context';

import { CartIconContainer, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount as="span">{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon