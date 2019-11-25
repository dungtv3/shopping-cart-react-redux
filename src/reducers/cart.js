import * as Types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState,action)  => {
    switch (action.type) {
      default:
        return [...state];
    }
}

export default cart;
