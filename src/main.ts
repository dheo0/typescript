// pure 자바스크립트에서는 실행을 통해서만 결과값, 리턴값을 확인할 수가 있었는데
// 실행하기 전에 이러한 값을을 예측하기 위한 대안은 static type system 을 이욯하는 것이다


// type GreatFunction  = (a: string) => void;
/*
    function greeter(fn : GreatFunction) {
    }
*/


function greeter(fn : (a : string) => void) {
    fn("hello world")
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

type DescribableFunction  = {
    description: string;
    (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + "returned" + fn(6))
}

type SomeConstructor = {
    new (s: string): SomeObjec;
}

function fn(ctor: SomeConstructor) {
    return new ctor("hello")
}

class One {
    static write(){
        console.log("Yes! I did!");
    }
}

class Two {
    tryingMethod(){
        One.write();
    }
}
