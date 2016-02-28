# delay-execution
A simple defer-like tools.

### Usage:
```
var newTask = new Delay(
    function () { setTimeout(function () { console.log("Task1: 300ms."); newTask.next(); }, 300)},
    function () { setTimeout(function () { console.log("Task2: 10ms."); newTask.next(); }, 10)},
    function () { setTimeout(function () { console.log("Task3: 720ms."); newTask.next(); }, 720)},
    function () { setTimeout(function () { console.log("Task4: 40ms."); newTask.next(); }, 40)}        
);

newTask.done(function () {
    console.log("newTasks done!");
});
```