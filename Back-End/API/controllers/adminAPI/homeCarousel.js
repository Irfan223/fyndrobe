const HomeCarousel = require('../../models/homecarousel');
// Get API
module.exports.GetHomeCarousel = function(req, res, next) {
    HomeCarousel.find({}, function(error, data) {
        if (error) {
            res.send(error);
        }
        // console.log(data);
        res.json(data);
    });
  }
// Post API
module.exports.PostHomeCarousel = function(req, res, next) {
  const {title, url, link} = req.body;
  let newHomeCarousel = new HomeCarousel({
      images: {
       title: title,
       url, url,
       link: link
      }
  });
  newHomeCarousel.save((error, data) => {
    if (error) {
        res.json({ 
            code: 400,
            message: error
         });
    } else {
        res.json({
            code: 200,
            message: "carousel is added successfully",
            data: data
        });
    }
});
}