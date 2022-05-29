const bcryptjs = require('bcryptjs');
const customerService = require("../services/customer.services");


exports.getOrdersCustomer = (req, res, next) => {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    customerService.getOrdersCustomer({ req, token }, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).json({
            Status: "Success",
            data: {
                message: result
            },
        });
    })


};

exports.newsletter = (req, res, next) => {

    customerService.newsletter({ req }, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            Status: "Success",
            data: {
                message: result
            },
        });
    });

};

exports.getOrder_ItemsCustomer = (req, res, next) => {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];


    customerService.getOrder_ItemsCustomer({req, token}, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).json({
            Status: "Success",
            data: {
                message: result
            },
        });
    })


};

exports.CustomerContact = (req, res, next) => {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];


    customerService.CustomerContact({req, token}, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            Status: "Success",
            data: {
                message: result
            },
        });
    });
};

exports.getBooks = (req, res, next) => {

    customerService.getBooks({  }, (error, result) => {

        if (error) {
            return next(error);
        }
        return res.status(200).json({
            Status: "Success",
            data: {
                result
            },
        });
    })
};

exports.getOneBook = (req, res, next) => {
    customerService.getOneBook({ req }, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).json({
            Status: "Success",
            data: {
                result
            },
        });
    })
};

exports.getReviews = (req, res, next) => {
    customerService.getReviews({ req }, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            Status: "Success",
            data: {
                message: result
            },
        });
    });
}; // add to unless

exports.giveReview = (req, res, next) => {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    customerService.giveReview({ req, token }, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            Status: "Success",
            data: {
                message: result
            },
        });
    });
};

exports.updateReview = (req, res, next) => {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    customerService.updateReview({ req, token }, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            Status: "Success",
            data: {
                message: result
            },
        });
    });
};

exports.deleteReview = (req, res, next) => {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    customerService.deleteReview({ req, token }, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            Status: "Success",
            data: {
                message: result
            },
        });
    });
};

exports.getBookCategoryWise = (req, res, next) => {
    customerService.getBookCategoryWise({ req }, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).json({
            Status: "Success",
            data: {
                result
            },
        });
    })
};

exports.order = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    customerService.order({ req, token }, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            Status: "Success",
            data: {
                message: result
            },
        });
    });
};// user.order not written probably change it

exports.getEvents = (req, res, next) => {

  //  const authHeader = req.headers["authorization"];
  //  const token = authHeader && authHeader.split(' ')[1];

    customerService.getEvents({ req }, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).json({
            Status: "Success",
            data: {
                message: result
            },
        });
    })


};