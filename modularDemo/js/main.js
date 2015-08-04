//original.js
func1();
func2();


//object.js
moduleA.func1();
moduleA.func2();

console.log('_count before change:', moduleA._count);

moduleA._count = 10;

console.log('_count after change:', moduleA._count);

//IIFE.js
moduleB.func1();
moduleB.func2();


//augmentation.js
moduleB.func3();


//looseAugmentation.js
moduleB.func4();
