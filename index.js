/*
Express utils
 */

// RESPONSES

const errorResponse = ( message, response ) => {

    return error => {
        console.log( message, error );
        response.status( 500 ).send( { message: message } );
    };

};

const successResponse = ( message, response, dataFilter = data => data ) => {

    return data => {
        console.log( message, data );
        response.status( 200 ).send( { message: message, data: dataFilter( data ) } );
    }

};

//
// General responses
//

// Success
const getSuccess = ( response, dataName, dataFilter ) => {
    return successResponse( `Got ${dataName}.`, response, dataFilter );
};

const putSuccess = ( response, dataName, dataFilter ) => {
    return successResponse( `${dataName} was successfully updated.`, response, dataFilter );
};

const postSuccess = ( response, dataName, dataFilter ) => {
    return successResponse( `${dataName} was successfully added.`, response, dataFilter );
};

const deleteSuccess = ( response, dataName, dataFilter ) => {
    return successResponse( `${dataName} was successfully deleted.`, response, dataFilter );
};

// Error
const getError = ( response, dataName ) => {
    return errorResponse( `Could not get ${dataName}.`, response );
};

const putError = ( response, dataName ) => {
    return errorResponse( `Could not update ${dataName}.`, response );
};

const postError = ( response, dataName ) => {
    return errorResponse( `Could not add ${dataName}.`, response );
};

const deleteError = ( response, dataName ) => {
    return errorResponse( `Could not delete ${dataName}.`, response );
};

module.exports = {
    errorResponse: errorResponse,
    successResponse: successResponse,
    getSuccess: getSuccess,
    putSuccess: putSuccess,
    postSuccess: postSuccess,
    deleteSuccess: deleteSuccess,
    getError: getError,
    putError: putError,
    postError: postError,
    deleteError: deleteError,
};