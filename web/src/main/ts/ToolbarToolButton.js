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
var ToolbarToolButton = /** @class */ (function (_super) {
    __extends(ToolbarToolButton, _super);
    function ToolbarToolButton(props) {
        var _this = _super.call(this, props) || this;
        _this.click = _this.click.bind(_this);
        return _this;
    }
    ToolbarToolButton.prototype.click = function (event) {
        this.props.setTool(this.props.name);
    };
    ToolbarToolButton.prototype.render = function () {
        var isActive = this.props.name != "" && this.props.name == this.props.currentTool;
        return (React.createElement("button", { className: "toolbar-button " + (isActive ? "toolbar-button__active" : ""), onClick: this.click },
            React.createElement("i", { className: "fa-solid " + this.props.icon }),
            this.props.label));
    };
    ToolbarToolButton.defaultProps = {
        name: "",
        currentTool: "",
        setTool: function (tool) { }
    };
    return ToolbarToolButton;
}(React.Component));
export { ToolbarToolButton };
