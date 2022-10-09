// /<reference path="3rdparty/react.development.js" />
// /<reference path="3rdparty/react-dom.development.js" />
// /<reference path="d.ts/react-dom/client.d.ts"/>
// /<reference path="App.tsx"/>
// /<reference path="model/Node.ts"/>
import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { App } from "./App";

// alert(2);
export class ContourEditor {
// namespace contoureditor {
// export default
// alert(1);
//     document.addEventListener('DOMContentLoaded', function(){
    public constructor() {
        document.addEventListener('DOMContentLoaded', function(){
            var wrapper = document.getElementById("contoureditor-wrapper");
            if( wrapper ) {

                const root = ReactDOM.createRoot( wrapper! );
                root.render(
                    <React.StrictMode>
                        <App/>
                    </React.StrictMode>
                );
            };
        });
    }
}
new ContourEditor();
//     });
// }

