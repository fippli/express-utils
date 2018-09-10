/*
Express utils
 */

// RESPONSES

const errorResponse = ( message, error, response ) => {

    return () => {
        console.log( message, error );
        response.status( 500 ).send({message: message});
    };

};

const successResponse = ( message, data, response ) => {

    return () => {
        console.log( message, data );
        response.status( 200 ).send({message: message, data: data});
    }

};

module.exports = {
    errorResponse: errorResponse,
    successResponse: successResponse,
};