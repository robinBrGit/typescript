"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour('Paris', 200));
        this._sejours.push(new Sejour('Montreal', 600));
        this._sejours.push(new Sejour('Nantes', 80));
    }
    SejourService.prototype.findSejourByName = function (nom) {
        var unSejour = this._sejours.filter(function (sejour) {
            return sejour.nom === nom;
        });
        if (unSejour.length === 1)
            return unSejour[0];
    };
    return SejourService;
}());
var sejourService = new SejourService();
var unSejour = sejourService.findSejourByName('Paris');
if (unSejour instanceof Sejour) {
    console.log(unSejour);
}
