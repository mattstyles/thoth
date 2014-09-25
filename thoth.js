/**
 * Thoth v0.0.1
 * Super simple console sugar for the browser
 *
 * © Matt Styles 2014 @veryfizzyjelly
 * Available under MIT
 */

(function( root, fn ) {

    if ( !root.Thoth ) {
        root.Thoth = fn( root );
    }

})( this, function( root ) {

    // Constructor
    function Thoth( opts ) {

        create.call( this );

    }

    // Properties on the constructor function
    Thoth.VERSION = '0.0.1';

    Object.defineProperty( Thoth, 'defaultLevel', {
        value: 1,
        writable: false
    });


    // Shortcuts
    var proto = Thoth.prototype;


    // Create function
    var create = function() {

        var private = 1;

        Object.defineProperty( this, 'testProp', {
            get: function() {
                return this.private;
            },
            set: function() {
                console.log( 'setting' );
            }
        });
    };

    // Log function
    proto.log = function( level, log ) {

        if ( root.console ) {
            console.log( log );
        }
    };




    // Return the constructor
    return Thoth;

});
