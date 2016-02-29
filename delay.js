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

Delay.prototype.next = function (funcName) {
    if (funcName && this._delay.funcs.indexOf(funcName) > -1) {
        this._delay.funcs.splice(this._delay.funcs.indexOf(funcName), 1);
    } else {
        this._delay.funcs.shift();
    }
    this._delay.funcs.length < 1 && this._delay.doneCallback();

};


/*
    var newTask = new Delay(
        function func1 () { setTimeout(function () { console.log("Task1: 300ms."); newTask.next(func1); }, 300)},
        function func2 () { setTimeout(function () { console.log("Task2: 10ms."); newTask.next(func2); }, 10)},
        function () { setTimeout(function () { console.log("Task3: 720ms."); newTask.next(); }, 720)},
        function () { setTimeout(function () { console.log("Task4: 40ms."); newTask.next(); }, 40)}        
    );

    newTask.done(function () {
        console.log("newTasks done!");
    });
 */