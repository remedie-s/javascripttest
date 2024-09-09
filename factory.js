/**
 * 일반적으로 영어를 사용하여 문자와 숫자를 모두 사용 할 수있다.
 * 특수기호는 언더스코어와 덜러를 사용할 수 있다.
 * 숫자로 이름을 시작할수 없다. 1name
 * 키워드는 변수명으로 사용할수 없다. car const
 * 
 * 1) camelCase  대부분
 * 2) sknake_case 파이선
 * 3) PascalCase C#
 */

/**
 * 1) Number
 * 2) String 
 * 3) Boolean
 * 4) undefinded
 * 5) null
 * 6) Symbol 
 * 
 * 7) Object
 *  - Function
 *  - Array
 *  - Object
 */
const age =32;
const tempature = -10;

console.log(typeof age);
console.log(typeof tempature);

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);

/** 
 * Template Literal
 * 1) newline = \n
 * 2) tab = \t
 * 3) 백슬레시를 스트링으로 표현하고 싶으면 두번 입력하면 된다.
 */
const iveYuJin='아이브안유진'
console.log(iveYuJin);
const iveWonYoung= '아이브\t장원영'
console.log(iveWonYoung);
const backSlash= '아이브\\코드팩토리'
console.log(backSlash);
const smallQutoation = "'아이브 \' 코드팩토리"
console.log(smallQutoation);

const iveWonYoung2 = `아이브 
장원영`;
console.log(iveWonYoung2);

// undefined 사용자가 값을 직접 초기화 안했을때 나옴
// null 개발자가 명시적으로 없는 값으로 초기화될때 사용된다

// Symbol 유일무이한 값을생성, Symbol 함수를 호출해서 사용
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1==symbol2);
console.log(symbol1===symbol2);

/**
 * Object 타입
 * Map 
 * 키:밸류 쌍으로 이루어져있다
 * key:value
 */

const dictionary={
    red : '빨간색', blue : '파란색', green : '초록색'
}
console.log(dictionary);
console.log(dictionary['red']);
console.log(typeof dictionary);

/**
 * Array 타입
 * 
 * 값을 리스트로 나열가능
 */

const iveMembersArray=[
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];
console.log(iveMembersArray);

/**
 * index 0부터 시작 1씩 올라감
 */
console.log(iveMembersArray[0]);
iveMembersArray[0] = 'sa';
console.log(iveMembersArray);

console.log('Hello');
console.log('World');

// hoisting  변수선언이 맨위로 올려지는것처럼 보이는 현상
var name1;
console.log(name1);
var name1 = 'code';
console.log(name1);

/**
 * 증가 감소
 */

let member=1;
member ++;
console.log(member);