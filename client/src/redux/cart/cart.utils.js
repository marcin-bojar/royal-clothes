export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const mergeTwoCarts = (cart1, cart2) => {
  console.log(cart1, cart2);
  if (cart1.length === 0) return cart2;
  if (cart2.length === 0) return cart1;

  let mergedCart = [];

  cart1.forEach(item1 => {
    const index = cart2.findIndex(item => item1.id === item.id);

    // If same item is added in both carts sum up its quantity values
    if (index !== -1) {
      mergedCart.push({
        ...item1,
        quantity: item1.quantity + cart2[index].quantity,
      });
      // Delete duplicate item from cart2 after adding its quantity
      cart2 = cart2.filter(item => item.id !== item1.id);
    } else {
      mergedCart.push(item1);
    }
  });

  // Add non-duplicate items from cart2
  mergedCart = mergedCart.concat(cart2);

  return mergedCart;
};
