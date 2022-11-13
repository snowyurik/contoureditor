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
    function MainMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainMenu.prototype.saveClick = function () {
        console.log("save click");
        var requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([
                { title: "TestWebContour1" }
            ])
        };
        fetch("/api/contour/list", requestOptions);
    };
    MainMenu.prototype.loadClick = function () {
        console.log("load click");
        var requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' } //,
            //             body: JSON.stringify({ title: 'React PUT Request Example' })
        };
        fetch("/api/contour/list", requestOptions)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            console.log("Load response received");
            console.log(data);
        }
        //             this.setState({ postId: data.id })
        );
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
