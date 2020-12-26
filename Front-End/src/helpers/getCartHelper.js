import axios from '../axiosConfig';

const getCart = async function(userId) {
    var cart = [];
    if (userId === undefined) {
        // alert(localStorage.getItem("localcart"));
        if (localStorage.getItem("localcart")) {
              cart = JSON.parse(localStorage.getItem("localcart"));
        }
        return cart;
      } else {
       
         return axios
          .get("cart/" + userId)
          .then((res) => {
            var cartcopy = res.data.products;
            if (localStorage.getItem("localcart")) {
              let localcart = JSON.parse(localStorage.getItem("localcart"));
              cartcopy = cartcopy.concat(localcart);
            }
            cartcopy = cartcopy.filter(
              (v, i, a) =>
                a.findIndex(
                  (t) => t.productId === v.productId && t.size === v.size
                ) === i
            );
                cart = cartcopy;
                localStorage.setItem("localcart", JSON.stringify(cart));
                return cart;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
}
export {getCart};