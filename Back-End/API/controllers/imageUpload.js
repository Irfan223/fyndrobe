const cloudinary = require('cloudinary')
require('../handlers/cloudinary');
const upload = require('../handlers/multer');
module.exports.ImageUpload = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            res.json({
                 error: err,
                 code: 405,
                 message: 'something error'
                });
        } else {
            if (req.files == undefined) {
                res.json({ 
                    message: "No file selected",
                    code: 500
                });
            } else {
                const uploader = async (path) => await cloudinary.uploader.upload(path, "Images");
                const urls = [];
                const files = req.files;
                for (const file of files) {
                    const { path } = file;
                    const newPath = await uploader(path);
                    urls.push(newPath);
                }
                res.json({
                    code: 200,
                    urls: urls
                });
            }
        }
    });
}