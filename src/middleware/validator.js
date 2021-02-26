'use strict';

const validator = (req, res, next) => {
    if (req.query.name){
        next();  
    }
    else {
        res.status(500).send("eRRRor");
    } 
}

module.exports = validator;