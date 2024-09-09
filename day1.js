//표준함수
// function full(name, year){
//     console.log(name, year);
// }
// 문자열 표시 "",''
//  문자열표시 ``(BackTick)
// function full(name='자바',year=2024){
//     console.log(name=`${name}`, year=`${year} 입니다.`);
// }
// full('자바',2024);

//변수 종류및 스코프
//  var : 함수 스코프 변수
//  let : 블록 스코프 변수
//  const : 상수

// const PI =3.14;
// console.log(PI);
// PI=6666;

console.log('\n\n');
var a=1;
function test(){
    if(true){
        var a=2;
        var b=2;
        let c=3;
    }
    // 함수 안에만 있으면 var는 다 통용됨
    // let 는 블록 스코프여서  {} 넘어가면 오류
    console.log('a=',a);
    console.log('b=',b);
    //에러가 발생함, 영역을 벗어남
    // console.log('c=',c);
}
// test();
// console.log('함수 밖에서 a=',a);
//  ReferenceError: b is not defined
// console.log('함수 밖에서 b=',b);

function test2(){
    //  같은 이름의 변수를 선언은 가능함
    //  마지막에 할당된 값으로 설정
    var name = 'A';
    var name = 'B';
    console.log(name);

    let name1 = 'A';
    // Identifier 'name1' has already been declared let은 중복 설정안됨
    // let name1 = 'B';
    console.log(name1);
}
// test2();

let a1=1, b1=2, c1;
// 1 2 undefined 선언안되면 x
// console.log(a1,b1,c1);

// ES6 에서는 let, const사용을 적극권장
// 실제 구동시 통상 대부분 프레임웤에서는 var로 변환되서 처리
// 미지원 브라우저 대비

// 익명함수(이름 없음)
// 주로 1회성, 특정 변수의 값으로 설정 가능
// 특정함수의 인자값 또는 콜백함수 역할로 주로 사용됨
const noNameFunc=function (name='자바',year=2024){
    console.log(name=`${name}`, year=`${year} 입니다.`);
}
// noNameFunc();

// 특정 함수의 안자값으로 익명함수 사용
function noName(){
    setTimeout(function(){
        console.log('->')
    },1000);
}
// noName();

function noName1(){
    setTimeout(function(){
        console.log('1');
    },2000);
}
// noName1();

// 화살표 함수 
// 표준함수 => 익명함수 변경절차
// 1. function 제거
// 2. 파라미터가 1개이면 () 제거할 수 있다. 반면 없으면 ()사용
// 3. () {} 사이에 => 추가
// 4. {} 는 수행문이 하나인 경우 생략가능
// 5. 수행문이 하나이고, 중괄호가 생략되어 있으면 return 생략

function getInfoArrow(name) {
    console.log(`${name} ...!!!@@@`);
}
// getInfoArrow('sejong1');

//화살표 함수로 변경
const getInfoArrow1=function(name){
    console.log(`${name} ...!!!@@@`)
}
// getInfoArrow1('sejong2');

const getInfoArrow2= name => console.log(`${name} ...!!!@@@`);
// getInfoArrow2('sejong3');

// 파라미터가 2개 이상인 경우의 화살표 함수
function getInfoArrow3(name,age){
    return `${name} ${age} ....!@!@`;
}
console.log(getInfoArrow3('월요일',30));

const getInfoArrow4=function(name,age){
    return `${name} ${age} ....!@!@`;
}
console.log(getInfoArrow4('화요일',40));

const getInfoArrow5=( name,age ) => `${name} ${age} ....!@!@`;
console.log(getInfoArrow5('수요일',50));
