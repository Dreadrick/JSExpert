// task(1)

(function (win) {
    var params = {states: {url: "/", template: "temlate.js"}
};
function setStates(params) {
    if (win && !win.params) {
        win.params = params;
    }
}
setStates();
console.log(params.states.template);
})(window);


// task(2)

var a = 1,
    b = 1,
    c = 1;

console.log(a);
console.log(b);
console.log(c);

var d = 15,
    e = 25,
    l = 35;

console.log(d);
console.log(e);
console.log(l);


//task(3)

var z;
console.log(z);

z = "z";
console.log(z);

z = true;
console.log(z);

z = 10;
console.log(z);

z =  null;
console.log(z);
console.log(typeof z);

//task(4)

let language = "JavaScript";
var nameOfEvent = "courses";

var result = language + " " + nameOfEvent;
console.log(result);

//task(5)

var num, x, z;

++num;
++num;
++num;

z = x = num;

//task(6)

var n = 10;
String(n);
Boolean(n);
Number(n);