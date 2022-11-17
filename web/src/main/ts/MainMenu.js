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
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.saveClick = _this.saveClick.bind(_this);
        _this.loadClick = _this.loadClick.bind(_this);
        return _this;
    }
    MainMenu.prototype.saveClick = function () {
        console.log("save click");
        var requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.props.contours)
        };
        fetch("/api/contour/list", requestOptions);
    };
    MainMenu.prototype.loadClick = function () {
        var _this = this;
        console.log("load click");
        var requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch("/api/contour/list", requestOptions)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            console.log("Load response received");
            console.log(data);
            _this.props.setContours(data);
        });
    };
    MainMenu.prototype.render = function () {
        return (React.createElement("div", { className: "menu" },
            React.createElement("ul", { className: "menu__main" },
                React.createElement("li", { className: "menu__item" },
                    React.createElement("a", { href: "#" }, "File"),
                    React.createElement("ul", { className: "menu__submenu" },
                        React.createElement("li", { className: "menu__item" },
                            React.createElement("a", { href: "#", onClick: this.saveClick }, "Save")),
                        React.createElement("li", { className: "menu__item" },
                            React.createElement("a", { href: "#", onClick: this.loadClick }, "Reload")))),
                React.createElement("li", { className: "menu__item" },
                    React.createElement("a", { href: "/logout" }, "Logout"))),
            React.createElement("div", { className: "clear" })));
    };
    return MainMenu;
}(React.Component));
export { MainMenu };
