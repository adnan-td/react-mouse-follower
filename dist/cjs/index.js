"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function App({ bgColor }) {
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            width: '100px',
            height: '100px',
            borderRadius: '1000px',
            backgroundColor: bgColor ? bgColor : 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }, children: (0, jsx_runtime_1.jsx)("p", { style: {
                color: 'white',
            }, children: "Hello" }) }));
}
exports.default = App;
