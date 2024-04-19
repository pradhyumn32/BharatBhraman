const path = require('path');
const ejs = require('ejs');

exports.homeSSR = async (req, res) => {
    try {
        ejs.renderFile(path.resolve(__dirname, '../views/index.ejs'), function(err, str){  // This product from index.ejs
            res.send(str);
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
