const url = "http://localhost:8080";
const Image = require("../database/imageUrl");
const imageController = async (req, res) => {
    const url = req.url;

    const image = new Image({
        imgUrl: url,
    })

    try {
        await image.save();
        res.status(200).json({ url: req.url })
    } catch (e) {
        res.status(501).json({ msg: "Internal server error !" })
    }



}

module.exports = imageController;