//// [tests/cases/compiler/systemDefaultImportCallable.ts] ////

//// [core-js.d.ts]
declare module core {
    var String: {
        repeat(text: string, count: number): string;
    };
}
declare module "core-js/fn/string/repeat" {
    var repeat: typeof core.String.repeat;
    export default repeat;
}
//// [greeter.ts]
import repeat from "core-js/fn/string/repeat";

const _: string = repeat(new Date().toUTCString() + " ", 2);

//// [greeter.js]
System.register(["core-js/fn/string/repeat"], function (exports_1, context_1) {
    "use strict";
    var repeat, _;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (repeat_1_1) {
                repeat = repeat_1_1.default;
            }
        ],
        execute: function () {
            _ = repeat(new Date().toUTCString() + " ", 2);
        }
    };
});
