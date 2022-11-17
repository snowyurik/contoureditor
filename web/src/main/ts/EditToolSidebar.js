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
import React from "react";
var EditToolSidebar = /** @class */ (function (_super) {
    __extends(EditToolSidebar, _super);
    function EditToolSidebar(props) {
        return _super.call(this, props) || this;
    }
    EditToolSidebar.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "tool-sidebar tool-sidebar__create " + (this.props.isActive ? 'tool-sidebar__active' : '') },
            React.createElement("h3", null, "Edit Tool"),
            React.createElement("p", null, "Drag and drop contours and vertexes of selected contour"),
            React.createElement("div", null,
                React.createElement("h4", null, "With selected contour:"),
                React.createElement("label", null, "Change title"),
                React.createElement("input", { type: "text", value: this.props.activeContourTitle, onChange: function (e) { return _this.props.setActiveContourTitle(e.target.value); } }),
                React.createElement("button", { onClick: this.props.removeSelectedContour }, "Remove Selected Contour"))));
    };
    EditToolSidebar.defaultProps = {
        isActive: false
    };
    return EditToolSidebar;
}(React.Component));
export { EditToolSidebar };
