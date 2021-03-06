function func1() {
    console.log('This is func1.');
}

function func2() {
    console.log('This is func2.');
}



/*
* 原始写法
* 模块就是实现特定功能的一组方法。
* 只要把不同的函数（以及记录状态的变量）简单地放在一起，就算是一个模块。
* */

/*

上面的函数 func1() 和 func2()，组成一个模块。使用的时候，直接调用就行了。
这种做法的缺点很明显："污染"了全局变量，无法保证不与其他模块发生变量名冲突，而且模块成员之间看不出直接关系。

*/
