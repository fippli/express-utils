const expressUtils = require( "./index.js" );

// Development env

process.env.NODE_ENV = "production";
process.env.PORT = 8000;
console.log( process.env );

//
// Test build url
//
if ( process.env.NODE_ENV === "development" ) {
    test( 'Development mode: Build url with endpoint "/".', () => {
        expect( expressUtils.buildUrl( "/" ) ).toBe( "http://localhost:8000/" );
    } );
} else {
    test( 'Production mode: Build url with endpoint "/".', () => {
        expect( expressUtils.buildUrl( "/" ) ).toBe( "/" );
    } );
}




