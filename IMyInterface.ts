interface IMyInterface {
    id:number;
    name:string;

    method(): void;
    methodWithReturnValue():number;
    sum(nums:number[]):number;

}

let myObj:IMyInterface = {
    id: 2,
    name: 'some name',
    method(){
        console.log('hello world');
    },
    methodWithReturnValue(){
        return 2;
    },
    sum(numbers){
        return numbers.reduce((a, b)=> {
            return a + b;
        });
    }
};

var a = 1;
console.log("testing " + myObj.sum([1,2,3]));

console.log("asdasd");
