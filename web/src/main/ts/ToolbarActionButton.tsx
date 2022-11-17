import React, { Component } from "react";

interface ToolbarActionButtonProps {
    label: string,
    icon: string,
    onClick: () => void;
}

export class ToolbarActionButton extends React.Component<ToolbarActionButtonProps, {}> {

    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <button className={"toolbar-button"}
                onClick={this.props.onClick}
            >
                <i className={"fa-solid " + this.props.icon}></i>
                {this.props.label}
            </button>
        );
    }
}