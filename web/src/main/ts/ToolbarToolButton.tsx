import React, { Component } from "react";

interface ToolbarButtonProps {
    label: string,
    icon: string,
    name: string,
    currentTool: string,
    setTool: ( tool:string ) => void;
}

export class ToolbarToolButton extends React.Component<ToolbarButtonProps, {}> {

    public constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    public static defaultProps = {
        name: "",
        currentTool: "",
        setTool: (tool:string) => {}
    }

    public click(event:any) {
        this.props.setTool( this.props.name );
    }

    public render() {
        let isActive = this.props.name != "" && this.props.name == this.props.currentTool
        return (
            <button className={"toolbar-button " + ( isActive ? "toolbar-button__active" : "" )}
                onClick={this.click}
            >
                <i className={"fa-solid " + this.props.icon}></i>
                {this.props.label}
            </button>
        );
    }
}
