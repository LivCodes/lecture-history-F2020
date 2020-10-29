let file = require("./index")

test("I want to test my average function", function(){
    expect( file.average([1, 2, 3]) ).toBe( 2 );
    expect( file.average([1, 1]) ).toBe( 1 );
    expect( file.average([1]) ).not.toBe( 0 );
    expect( file.average([]) ).toBe( 0 );
});