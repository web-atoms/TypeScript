//// [systemModule9.ts]
import * as ns from 'file1';
import {a, b as c} from 'file2';
import d from 'file3'
import 'file4'
import e, * as ns2 from 'file5';
import ns3 = require('file6');

ns.f();
a();
c();
d();
e();
ns2.f();
ns3.f();

export * from 'file7';

var x, y = true;
export {x};
export {y as z};

//// [systemModule9.js]
System.register(["file1", "file2", "file3", "file4", "file5", "file6", "file7"], function (exports_1, context_1) {
    "use strict";
    var ns, a, c, d, e, ns2, ns3, x, y;
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "x": true,
        "z": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (ns_1) {
                ns = ns_1.ns;
            },
            function (file2_1_1) {
                a = file2_1_1.a;
                c = file2_1_1.b;
            },
            function (file3_1_1) {
                d = file3_1_1.d;
            },
            function (_1) {
            },
            function (file5_1_1) {
                e = file5_1_1.e;
                ns2 = file5_1_1.ns2;
            },
            function (ns3_1) {
                ns3 = ns3_1;
            },
            function (file7_1_1) {
                exportStar_1(file7_1_1);
            }
        ],
        execute: function () {
            ns.f();
            a();
            c();
            d();
            e();
            ns2.f();
            ns3.f();
            y = true;
            exports_1("z", y);
        }
    };
});
