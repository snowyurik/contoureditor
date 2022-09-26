///<reference path="ToolbarButton.tsx"/>

namespace contoureditor {

    export class Toolbar extends React.Component {

        public render() {
            return (
                <div id="toolbar">
                    <ToolbarButton label="Undo" icon="fa-rotate-left" />
                    <ToolbarButton label="Redo" icon="fa-rotate-right" />
                    <ToolbarButton label="Select" icon="fa-arrow-pointer" />
                    <ToolbarButton label="Move" icon="fa-up-down-left-right" />
                    <ToolbarButton label="New Contour" icon="fa-plus" />
                    <ToolbarButton label="Show Labels" icon="fa-eye" />

                </div>
            );
        }
    }
}