// /<reference path="3rdparty/react.development.js" />
// /<reference path="3rdparty/react-dom.development.js" />
// /<reference path="d.ts/react-dom/client.d.ts"/>
// /<reference path="App.tsx"/>
// /<reference path="model/Node.ts"/>
import React from "react";
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { App } from "./App";
// alert(2);
var ContourEditor = /** @class */ (function () {
    // namespace contoureditor {
    // export default
    // alert(1);
    //     document.addEventListener('DOMContentLoaded', function(){
    function ContourEditor() {
        document.addEventListener('DOMContentLoaded', function () {
            var wrapper = document.getElementById("contoureditor-wrapper");
            if (wrapper) {
                var root = ReactDOM.createRoot(wrapper);
                root.render(React.createElement(React.StrictMode, null,
                    React.createElement(App, null)));
            }
            ;
        });
    }
    return ContourEditor;
}());
export { ContourEditor };
new ContourEditor();
//     });
// }
