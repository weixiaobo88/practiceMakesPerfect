var moduleB = (function () {
    var _count = 0;
    var func1 = function () {
        console.log('This is func1 in moduleB');
    };
    var func2 = function () {
        console.log('This is func2 in moduleB');
    };
    return {
        func1: func1,
        func2: func2
    };
})();

/*
 moduleB 就是Javascript模块的基本写法。
*/
