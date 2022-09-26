///<reference path="3rdparty/react.development.js" />
///<reference path="3rdparty/react-dom.development.js" />
// /<reference path="3rdparty/react.d.ts" />
///<reference path="App.tsx"/>


namespace contoureditor {
    document.addEventListener('DOMContentLoaded', function(){
        var wrapper = document.getElementById("contoureditor-wrapper");
        if( wrapper ) {
            ReactDOM.render(
                <div>
                    <App/>
                </div>
                ,
                wrapper
            );
        };
    });
}
