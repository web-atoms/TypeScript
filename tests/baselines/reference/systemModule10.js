//// [systemModule10.ts]
import n, {x} from 'file1'
import n2 = require('file2');
export {x}
export {x as y}
export {n}
export {n as n1}
export {n2}
export {n2 as n3}

//// [systemModule10.js]
System.register(["file1", "file2"], function (exports_1, context_1) {
    "use strict";
    var n, x, n2;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (file1_1_1) {
                n = file1_1_1.default;
                x = file1_1_1.x;
            },
            function (n2_1) {
                n2 = n2_1;
            }
        ],
        execute: function () {
            exports_1("n", n);
            exports_1("n1", n);
            exports_1("x", x);
            exports_1("y", x);
            exports_1("n2", n2);
            exports_1("n3", n2);
        }
    };
});
