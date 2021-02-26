'use strict';

const validator = (req, res) => {
    if (req.query.name){
        next();  
    }
    else {
        res.status(500).send("nOt found");
    } 
}

module.exports = validator;