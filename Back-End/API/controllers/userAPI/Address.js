

const Address = require('../../models/address');
// Get Customer Details
module.exports.GetAddress = async function (req, res, next) {
  const userId = req.params.userId;
  try {
    let address = await Address.findOne({ userId });
    return res.status(201).send(address)
  } catch (err) {
    // console.log(err);
    res.status(500).send("Something went wrong");
  }
}
// Add Customer Address
module.exports.AddAddress = async function (req, res, next) {
  console.log(req.body);
  const { userId, addressId, firstName, lastName, mobile, houseAndBuildingName, locality, landmark, pincode, cityOrDistrict, state, country } = req.body;
  try {
    let address = await Address.findOne({ userId });
    if (address) {
      // checking cart exist
      let addressItemIndex = address.addresses.findIndex(p => p._id == addressId);
      if (addressItemIndex > -1) {
        let addressItem = cart.products[addressItemIndex];
        addressItem.firstName = firstName;
        addressItem.lastName = lastName;
        addressItem.mobile = mobile;
        addressItem.houseAndBuildingName = houseAndBuildingName;
        addressItem.locality = locality;
        addressItem.landmark = landmark;
        addressItem.pincode = pincode;
        addressItem.cityOrDistrict = cityOrDistrict;
        addressItem.state = state;
        addressItem.country = country;
        address.addresses[addressItemIndex] = addressItem;
        address = await address.save();
        return res.status(200).send(address);
      } else {
        address.addresses.push({ addressId, firstName, lastName, mobile, houseAndBuildingName, locality, landmark, pincode, cityOrDistrict, state, country });
        address = await address.save();
        return res.status(201).send(address);
      }
    } else {
      //no cart for user, create new cart
      const newAddress = await Address.create({
        userId,
        addresses: [{ firstName, lastName, mobile, houseAndBuildingName, locality, landmark, pincode, cityOrDistrict, state, country }]
      });

      return res.status(201).send(newAddress);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
}
// Delete Customer Address
module.exports.DeleteAddress = async function (req, res, next) {
  const { userId } = req.body;
  try {
    const address = await Address.findOne ({userId})
    if(address){

      let removeIndex = address.findIndex(p =>p.id == addressId)
      console.log(removeIndex)  
    }
  

  } catch (error) {
    console.error(error.message)

  }


}
// Update Customer Details
module.exports.UpdateAddress = function (req, res, next) {

}