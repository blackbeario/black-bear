"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BbIntro = (function () {
    function BbIntro() {
        this.name = "jfraz";
        this.color = "black";
    }
    BbIntro = __decorate([
        core_1.Component({
            moduleId: __moduleName,
            selector: 'bb-intro',
            templateUrl: 'template.html',
        }), 
        __metadata('design:paramtypes', [])
    ], BbIntro);
    return BbIntro;
}());
exports.BbIntro = BbIntro;
//# sourceMappingURL=component.js.map