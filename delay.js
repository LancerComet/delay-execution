// Delay execution by LancerComet at 23:59, 2016.02.28.
// # Carry Your World #

var Delay = function () {
    this._delay = {};
    this._delay.funcs = [];
    
    for (var i = 0, length = arguments.length; i < length; i++) {
        if (Object.prototype.toString.call(arguments[i]) !== "[object Function]") throw new Error('Arguments must be "Function".');
        this._delay.funcs.push(arguments[i]);
    }
    
};

Delay.prototype.done = function (callback) {
    this._delay.doneCallback = callback;
    for (var i = 0, length = this._delay.funcs.length; i < length; i++) {
        this._delay.funcs[i]();
    }
};

Delay.prototype.next = function () {
    this._delay.funcs.shift();
    if (this._delay.funcs.length < 1) this._delay.doneCallback();
};