// /<reference path="Toolbar.tsx"/>
// /<reference path="Sidebar.tsx"/>
// /<reference path="CanvasWrapper.tsx"/>
import React, { Component } from "react";
import { render } from "react-dom";
import { Toolbar } from "./Toolbar";
import { Sidebar } from "./Sidebar";
import CanvasWrapper from "./CanvasWrapper";

// namespace contoureditor {

    interface AppState {
        tool: string
    }

    export class App extends React.Component<{},AppState> {


//         public static defaultState = {
//             tool: "create"
//         }

        public constructor(props) {
            super(props);
            this.state = {
                tool: "create"
            };
            this.setTool = this.setTool.bind(this);
        }


        public setTool(tool:string) {
            this.setState( prevState => {
                return { tool: tool };
            });
        }


        
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
        
        public render() {
            return (
                <div id="main-wrapper">
                    <Toolbar tool={this.state.tool} setTool={this.setTool} />
                    <Sidebar tool={this.state.tool} />
                    <CanvasWrapper/>
                </div>
            );
        }
    } 
    
// }

