import React, { Component } from "react";
import { render } from "react-dom";

export interface MainMenuProps {
    setContours: (contours:any) => void;
}

export class MainMenu extends React.Component<MainMenuProps,{}> {

    public constructor(props) {
        super(props);
        this.saveClick = this.saveClick.bind(this);
        this.loadClick = this.loadClick.bind(this);
    }

    public saveClick() {
        console.log("save click");
        let requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([
                { title: "TestWebContour1WithVertexes", vertexes: [
                    { x: 10, y: 10 },
                    { x: 20, y: 10 },
                    { x: 10, y: 20 },
                ]},
                { title: "TestWebContour2WithVertexes", vertexes: [
                    { x: 110, y: 110 },
                    { x: 120, y: 110 },
                    { x: 110, y: 220 },
                ]}
            ])
        };
        fetch("/api/contour/list", requestOptions);
    }

    public loadClick() {
        console.log("load click");
        let requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }//,
//             body: JSON.stringify({ title: 'React PUT Request Example' })
        };
        fetch("/api/contour/list", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("Load response received");
                console.log( data );
                this.props.setContours( data );
            }
//             this.setState({ postId: data.id })
            );
    }

    public render() {
        return (
            <div className="menu">
                <ul className="menu__main">
                    <li className="menu__item">
                        <a href="#">File</a>
                        <ul className="menu__submenu">
                            <li className="menu__item"><a href="#" onClick={this.saveClick}>Save</a></li>
                            <li className="menu__item"><a href="#" onClick={this.loadClick}>Reload</a></li>
                        </ul>
                    </li>
                    <li className="menu__item"><a href="/logout">Logout</a></li>
                </ul>
                <div className="clear"/>
            </div>
        );
    }
}