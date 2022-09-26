namespace contoureditor {

    interface ToolbarButtonPropsType {
        label: string,
        icon: string
    }

    export class ToolbarButton extends React.Component<ToolbarButtonPropsType, {}> {

        public render() {
            return (
                <button className="toolbar-button">
                    <i className={"fa-solid " + this.props.icon}></i>
                    {this.props.label}
                </button>
            );
        }
    }
}