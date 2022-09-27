///<reference path="BaseToolSidebar.tsx"/>
///<reference path="CreateToolSidebar.tsx"/>
///<reference path="SelectToolSidebar.tsx"/>
///<reference path="MoveToolSidebar.tsx"/>

namespace contoureditor {

    interface SidebarProps {
        tool: string
    }

    export class Sidebar extends React.Component<SidebarProps,{}> {

        public render() {
            return (
                <div id="sidebar">
                    <CreateToolSidebar isActive={this.props.tool == "create"}/>
                    <SelectToolSidebar isActive={this.props.tool == "select"}/>
                    <MoveToolSidebar isActive={this.props.tool == "move"}/>
                </div>
            );
        }
    }
}