namespace contoureditor {

    export class SelectToolSidebar extends BaseToolSidebar{
        public render() {
            return (
                <div className={"tool-sidebar tool-sidebar__create " + ( this.props.isActive ? 'tool-sidebar__active' : '')}>
                    <h3>Select Tool</h3>
                    <p>
                    Click on contour to select and edit vertexes position
                    </p>
                </div>
            );
        }
    }
}