var moduleB = (function (module){
    module.func3 = function () {
        console.log('This is func3 in moduleB from augmentation.js');
    };
    return module;
})(moduleB);


/*
如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用"放大模式"（augmentation）。*/
