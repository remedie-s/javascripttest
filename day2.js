// <ol> : 순서가있는 리스트(ordered list)
// <ul> : .(점) 찍힘

// const animals = [11, 22, 33, 44];

// for(const key in animals){
//     console.log(key);
// }

// for (const element of animals){
//     console.log(element);
// }

// animals.forEach(function(animal,index,array){
//     console.log(`${animal}||${index}||${array}`);
// });

// animals.forEach((animal,index,array)=>{
//     console.log(`${animal}||${index}||${array}`);
// });

// function printAll(...args){
//     for(let i =0; i<args.length; i++){
//         console.log(args[i]);
//     }
//     for(const arg of args){
//         console.log(arg);
//     }
//     args.forEach((arg)=>console.log(arg));
// }
// printAll("java",'script','html/css');

// function quiz(answer, printYes, printNo){
//     if(answer ==='love you'){
//         printYes();
//     }else{
//         printNo();
//     }
// } //인자로 함수를 받을수있음, 안받아도 실행은됨
// const printYes= function(){
//     console.log('yes!');
// }
// const printNo= function(){
//     console.log('no!');
// }
// quiz('love you', printYes, printNo);

// funcA();
// funcB();

function funcA() {
    console.log('java');
};

const funcB = function () {
    console.log('java');
};
// funcB();// 순수 함수형태가아니라 변수 = 함수 형태면 초기화가 안되기때문에 뒤에서 불러야함

// 자바스크립트로 서버와 통신하기(Ajax)
// 1. 모든 서버는 자바 스크립트의 네트워크 요청을 거부 하도록 설정되어있음
// - 백엔드 개발자가 요청을 허용하도록 수정해줘야 통신가능
// 2. fetch() 함수 사용
// 2-1 fetch() 함수는 await 와 함께 사용
// 2-2 . await 는 async함수 내에서 사용

// get(); // 호이스팅 hoisting

// async function get(){
//     const url = 'http://ggoreb.com/http/html1.jsp';
//     // response result;
//     const res = await fetch(url);
//     const data = await res.text();//res.json();
//     // const data = await res.json();
//     console.log(data);
// }

//Closure
// function sequence(){
//     // 원하지않는 값이 리턴됨(원하는값 seq == 1)
//     // let seq = 0;
//     return function(){
//         //해결책 let 을 이용해서 해결
//         let seq=0;
//         return ++seq;
//     };
// }
// // const seq =function(){
// //     return ++seq;
// // };
// const seq = sequence();
// // console.log(sequence());
// // console.log(sequence()());
// // console.log(sequence()());
// // console.log(sequence()());
// console.log(seq());
// console.log(seq());
// console.log(seq());

// function foo(x) {
//     return function (y) {
//         console.log(`${x} : ${y}`);
//     }
// }
// const bar1 = foo("과목");
// bar1("국어");
// bar1("영어");
// bar1("수학");

// const bar2 = foo("성적");
// bar2(100);
// bar2(90);
// bar2(80);

// (function hello(){
//     console.log('IIFE');
// })();

// (function(){
//     //내부에서 정의된 변수는 외부에서 접근불가
//     var aName = "Kate";
//     console.log(aName);
// })();
// console.log(aName);

const result = (function(){
    let aName ="Kate";
    console.log(aName);
    return aName;
})();
console.log(result);