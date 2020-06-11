const iState = {
  BagTotal: 0,
  BagDiscount: 0,
  couponDiscount: 0,
  orderTotal: 0,
  deliveryCharge: 0,
  currentComponent:'irfan'
};

const cartReducer = (state = iState, action) => {
  switch(action.type) {
    case "UPDATE_TOTAL": {
      return {
        ...state,
        BagTotal: action.payload.BagTotal,
        BagDiscount: action.payload.BagDiscount,
        couponDiscount: action.payload.couponDiscount,
        orderTotal: action.payload.orderTotal,
        deliveryCharge: action.payload.deliveryCharge,
        currentComponent:action.payload.currentComponent
      }
    }
    case "UPDATE_COMPONENT": {
      return {
        ...state,
        currentComponent: action.payload.currentComponent
      }

    }
    default: 
    return state;
  }
  // if (action.type === "UPDATE_TOTAL") {
  //   return {
  //     BagTotal: action.payload.BagTotal,
  //     BagDiscount: action.payload.BagDiscount,
  //     couponDiscount: action.payload.couponDiscount,
  //     orderTotal: action.payload.orderTotal,
  //     deliveryCharge: action.payload.deliveryCharge,
  //     currentComponent:action.payload.currentComponent
  //   };
  // }
};

export default cartReducer;
