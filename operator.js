//*문자열연결 
console.log('안녕'+'하세요');// 안녕하세요 
console.log('123'+1); //문자열+ 숫자열  ==> 1231
console.log(`3+1은 ${3+1} 입니다 `); //``백틱을 사용하여 문자열과 문자열사이에 + 를 사용하지않고 변수값을 문자열로 넣어준다.
//*산술연산자 수학적으로 계산을 해줌 산술연산이불가능한경우 NaN을 반환한다.
console.log(1+3);//4
console.log(5-2);//3
console.log(5*2);//10
console.log(6/2);//3
console.log(5%2);//1

console.log('--------------------');
//*증감, 감소 
let a = 2;
a++;
console.log(a); //a = a + 1 
a--;
console.log(a); // a = a - 1 

console.log('--------------------');
//*할당연산자
let x = 2;
let y = 3;
x += y; //x = x + y;
x -= y; //x = x - y;
x *= y; //x = x * y;
x /= y; //x = x / y;


console.log('--------------------');
//*비교연산자
//=== 일치하면 '참'
console.log(5===5); //true
console.log(5==='5'); //false 타임이 달라서 false
//`!==`일치하지 않으면 '참' .부정
console.log(2 !== 8); //true
console.log(4 !== 4 ); //false

// >,< 큰지 작은지 비교
5 > 1; //true
5 < 5; //false
// >= : 크거나 같으면 '참' , <= : 작거나 같으면 '참'
5 >= 5; //true
5 <= 5; //true
6 >= 10; //false
//* 논리연산자 ||논리합(or) , &&논리곱(and) , !부정(not)

//*삼항조건연산자 
//조건식 ? 조건식이 true 일때 반환할값 : 조건식이 false 일때 반환할값 ;
const myName = '아구몬';
console.log(myName === '아구몬' ? '안녕' : '누구세요');
// if 
if(myName === '아구몬'){
  console.log('안녕')
} else if (myName === '파닥몬'){
  console.log('안녕하세요');
} else {
  console.log('누구세요')
}

