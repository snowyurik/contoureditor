import React, { Component } from "react";

interface ContourListProps {
    contours: any,
    selectContour: (index:number) => void,
    selectedContour: number,
}

export class ContourList extends React.Component<ContourListProps,{}>{

    public constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    public click(index:number) {
        this.props.selectContour(index);
    }

    public render() {
        return (
            <div className="contour-list__wrapper">
                <ul className="contour-list">
                    {
                    this.props.contours.map( (contour, index) => (
                        <li key={index}
                            className={"contour-list__item" + ( index == this.props.selectedContour ? " contour-list__item__active" : "" )}
                            >
                            <span onClick={ ()=>{ this.click(index); }} className="contour-list__item-title">{contour.title}</span>
                            <ul className="vertex-list">
                            { contour.vertexes.map( (vertex, vertexIndex)=>(
                                <li key={vertexIndex} className="vertex-list__item">
                                x: {vertex.x}, y: {vertex.y}
                                </li>
                            ) )}
                            </ul>
                        </li>
                    ))
                    }
                </ul>
            </div>
        );
    }
}