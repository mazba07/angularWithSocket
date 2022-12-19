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
    const d = new Date();
    var postData = {
        "id": d.getTime(),
        "title": "top 1 place",
        "body": ""
    }
    db.push("post", postData);

    res.app.set("gHead",d.getTime());


    res.json(sendJson(1, "Post added successfully"))
}

expFn.getAllPost = function (req, res, next) {
    var post = db.get("post");
    res.json(sendJson(1, "All post are here", post))
}

module.exports = expFn;