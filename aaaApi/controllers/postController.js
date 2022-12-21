const formidable = require('formidable');
const FSDB = require("file-system-db");
const db = new FSDB("./db.json", false);

var expFn = {};

function sendJson(success, message, data = []) {
    var data = {
        "success": success,
        "message": message,
        "data": data
    }
    return data;
}

expFn.addNewPost = function (req, res, next) {
    const form = formidable({ multiples: true });
    const d = new Date();

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        var postData = {
            "id": d.getTime(),
            "title": fields.title,
            "body": fields.body
        }
        // db.push("post", postData);
        // res.json({ fields, files });

    });



    // var io = req.app.get('socketIo');
    // io.emit('addedPostHome', postData);

    res.json(sendJson(1, "Post added successfully",fields))



}

expFn.getAllPost = function (req, res, next) {
    var post = db.get("post");
    res.json(sendJson(1, "All post are here", post))
}

module.exports = expFn;