var moduleB = ( function (module){
    module.func4 = function() {
        console.log('This is func4 in moduleB from looseAugmentation.js');
    };
    return module;
})(window.moduleB || {});


/*
在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。如果采用augmentation的写法，第一个执行的部分有可能加载一个不存在空对象，这时就要采用"宽放大模式"。*/
