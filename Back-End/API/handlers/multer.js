const multer = require('multer')
const maxSize = 2 * 1024 *1024;
module.exports = upload =  multer({
    storage: multer.diskStorage({}),
    limits: {fileSize: maxSize},
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/jpe|jpeg|png|gif$i/)) {
            cb(new Error('File is not supported'), false)
            return
        }
        cb(null, true)
    }
}).array('images');