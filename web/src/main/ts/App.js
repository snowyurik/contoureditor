var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// /<reference path="Toolbar.tsx"/>
// /<reference path="Sidebar.tsx"/>
// /<reference path="CanvasWrapper.tsx"/>
import React from "react";
import { Toolbar } from "./Toolbar";
import { Sidebar } from "./Sidebar";
import CanvasWrapper from "./CanvasWrapper";
import { MainMenu } from "./MainMenu";
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    //         public static defaultState = {
    //             tool: "create"
    //         }
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            tool: "create"
        };
        _this.setTool = _this.setTool.bind(_this);
        return _this;
    }
    App.prototype.setTool = function (tool) {
        this.setState(function (prevState) {
            return { tool: tool };
        });
    };
    //         public constructor(props) {
    //             super(props);
    //             this.state = { items: [] };
    //             this.add = this.add.bind(this);
    //             this.update = this.update.bind(this);
    //             this.remove = this.remove.bind(this);
    //             this.loadList();
    //         }
    //
    //         public loadList() {
    //             this.sendData("/list", {}, ( responce )=>{
    //                 console.log( "Responce is:", responce );
    //                 let data = JSON.parse( responce );
    //                 console.log( "Data is:", data );
    //                 this.setState( prevState => ({
    //                         items: [ ...prevState.items, ...data.items ]
    //                     })
    //                 );
    //             });
    //         }
    //
    //         public sendData( url, data:any, callback:any = (responce)=>{ console.log( responce); } ) {
    //             let token = document.querySelector('meta[name="token"]').getAttribute("content");
    //             let issueId = document.querySelector('meta[name="issueId"]').getAttribute("content");
    //             data.issueId = issueId;
    //             fetch( url, {
    //                 method: "POST",
    //                 headers: {
    //                     'Content-Type': 'application/json;charset=utf-8',
    //                     "Authorization": "JWT " + token
    //                 },
    //                 body: JSON.stringify( data )
    //             }).then(responce => responce.text()).then( callback )
    //             .catch((error)=>{
    //                 console.error('Error:', error);
    //             });
    //         }
    //
    //         public add( newItem ) {
    // //             this.setState(prevState => ({
    // //                 items: [...prevState.items, newItem]
    // //             }));
    //             this.sendData("/addnewitem", newItem, ( responce ) => {
    //                 let data = JSON.parse( responce );
    //                 newItem.id = data.id;
    //                 this.setState(prevState => ({
    //                     items: [...prevState.items, newItem]
    //                 }));
    //             } );
    //             console.log( this.state.items );
    //         }
    //
    //         public update( index, item) {
    //             this.setState( prevState => {
    //                 prevState.items[index] = { ...prevState.items[index], ...item };
    //                 return prevState;
    //             });
    //             let updateItem = { ...item, index: index };
    //             this.sendData("/updateitem", updateItem );
    //             console.log( this.state.items );
    //         }
    //
    //         public remove( index ) {
    //             let id = this.state.items[ index ].id;
    //             this.setState( prevState => {
    //                 prevState.items.splice( index, 1 );
    //                 return prevState;
    //             });
    //             this.sendData( "/removeitem", { id: id });
    //             console.log( this.state.items );
    //         }
    App.prototype.render = function () {
        return (React.createElement("div", { id: "main-wrapper" },
            React.createElement(MainMenu, null),
            React.createElement(Toolbar, { tool: this.state.tool, setTool: this.setTool }),
            React.createElement(Sidebar, { tool: this.state.tool }),
            React.createElement(CanvasWrapper, null)));
    };
    return App;
}(React.Component));
export { App };
// }
