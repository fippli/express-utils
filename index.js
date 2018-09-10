/*
Express utils
 */

// RESPONSES

const errorResponse = ( message, response ) => {

    return error => {
        console.log( message, error );
        response.status( 500 ).send({message: message});
    };

};

const successResponse = ( message, response, dataFilter = data => data ) => {

    return data => {
        console.log( message, data );
        response.status( 200 ).send({message: message, data: dataFilter(data)});
    }

};

module.exports = {
    errorResponse: errorResponse,
    successResponse: successResponse,
};