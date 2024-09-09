//표준함수
// function full(name, year){
//     console.log(name, year);
// }
// 문자열 표시 "",''
//  문자열표시 ``(BackTick)
function full(name='자바',year=2024){
    console.log(name=`${name}`, year=`${year} 입니다.`);
}
full('자바',2024);

//변수 종류및 스코프
//  var : 함수 스코프 변수
//  let : 블록 스코프 변수
//  const : 상수

const PI =3.14;
console.log(PI);
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
test();
console.log('함수 밖에서 a=',a);
//  ReferenceError: b is not defined
// console.log('함수 밖에서 b=',b);

function test2(){
    
}