modules.define('$NAME', ['i-bem__dom', 'jquery'],
    function(provide, BEMDOM, $) {
        'use strict';
        
        /**
         * @class $CLASS_NAME
         */
        provide(BEMDOM.decl({block: this.name}, /** @lends ${CLASS_NAME}.prototype */ {
            onSetMod: {
                js: {
                    inited: function() {
                        
                    }
                }
            }
        }, /** @lends $CLASS_NAME */ {}));
    });
