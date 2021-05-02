import * as actionTypes from "./shopping-types";

const INTIAL_STATE = {
  products: [
    // {
    //   id: 1,
    //   title: "This is the COOLEST Cube Ever",
    //   description:
    //     "This cube will keep you busy the entire day and it is very fun to play with",
    //   price: 15.0,
    //   image:
    //     "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    //   category: "general",
    // },
    // {
    //   id: 2,
    //   title: "Large Coffee Cup",
    //   description:
    //     "Get a big cup of coffee every morning before the day starts",
    //   price: 20.0,
    //   image:
    //     "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    //   category: "general",
    // },
    // {
    //   id: 3,
    //   title: "Books That CHANGED My Life",
    //   description:
    //     "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
    //   price: 150.0,
    //   image:
    //     "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
    //   category: "general",
    // },
  ], // {id, title, desc, price, img}
  cart: [], //{id, title, desc, price, img, quantity}
  currentItem: null,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        // ...state.products,
      };
    case actionTypes.ADD_TO_CART:
      // get the item data from the products array, find the specific data
      const item = state.products.find((product) => product.id === payload.id);
      // check if the item is in the card already
      const isInCart = state.cart.find((itemCart) => itemCart.id === payload.id)
        ? true
        : false;
      return {
        ...state,
        cart: isInCart
          ? state.cart.map((item) =>
              item.id === payload.id
                ? { ...item, quantity: item.quantity + 1 } // means: kalau sudah ada barang yg di klik maka kuantitas nya ditambah jadi 2, 3, dst
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };

    case actionTypes.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: +payload.quantity }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
