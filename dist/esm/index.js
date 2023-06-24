import { jsx as _jsx } from "react/jsx-runtime";
function App({ bgColor }) {
    return (_jsx("div", { style: {
            width: '100px',
            height: '100px',
            borderRadius: '1000px',
            backgroundColor: bgColor ? bgColor : 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }, children: _jsx("p", { style: {
                color: 'white',
            }, children: "Hello" }) }));
}
export default App;
