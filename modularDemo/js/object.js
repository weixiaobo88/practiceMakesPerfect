var moduleA = new Object({
    _count: 0,
    func1: function () {
        console.log('This is func1 in moduleA');
    },
    func2: function () {
        console.log('This is func1 in moduleA');
    }
});

/*
上面的函数func1()和funcB(），都封装在moduleA对象里。使用的时候，就是调用这个对象的属性。

　　moduleA.func1();

但是，这样的写法会暴露所有模块成员，内部状态可以被外部改写。比如，外部代码可以直接改变内部计数器的值。

　　moduleA._count = 5;

*/
