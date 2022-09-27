///<reference path="3rdparty/react.development.js" />
///<reference path="3rdparty/react-dom.development.js" />
///<reference path="d.ts/react-dom/client.d.ts"/>
///<reference path="App.tsx"/>
///<reference path="model/Node.ts"/>

namespace contoureditor {
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
