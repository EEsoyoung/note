//forEach
let pokemon = ['이상해씨','파이리','꼬부기','피카츄','야도란'];

pokemon.forEach(function(item,index){
  console.log(`${index+1} : ${item}`)
})
//화살표함수로 해보기
pokemon.forEach((item,index)=>{console.log(item,index)});

console.log('---- push,pop,shift,unshift ----')
//* push - 배열의 마지막요소에 요소를 추가.
pokemon.push('주니어네키');
console.log(pokemon);
//* pop - 배열 마지막 요소를 제거.
pokemon.pop(); //위에서 추가하였던 요소를 제거했다.
console.log(pokemon);
//* shift - 배열의 첫번째 요소를 제거.
pokemon.shift(); //첫번째요소 '이상해씨'가 제거되었다.
console.log(pokemon);
//* unshift - 배열의 첫번째 요소를 추가.
pokemon.unshift('루시드');
console.log(pokemon);

console.log('----- indexof lastindexof -----');
//* indexof - 요소가 첫번째로 나타나는 위치를 찾아 index를 반환해줌
let find = pokemon.indexOf('꼬부기');
let find2 = pokemon.indexOf('꼬부기',3); // index3번부터 검색시작 
console.log(`꼬부기는 ${find}번째 index에있음`); // 2
console.log(find2);// 값을 못찾아서 -1 

//* lastIndexOf - 요소가 마지막으로 나타나는 위치를 찾아 index를 반환해줌
const number = [1,2,3,1,4,4,5,10,8,5];

let lastfind = number.lastIndexOf(1);
console.log(lastfind);
let lastfind2 = number.lastIndexOf(1,2);//찾을 값, index2 번에서 검색을 끝냄
console.log(lastfind2);

console.log(' ----- spilce & slice ----- ')
//* splice - 배열의 원하는 index에 요소를 추가하거나 제거 하여 배열의 내용을 변경
//* 요소를 제거하였다면 삭제된 요소들을 배열로 반환해준다. 삭제하지 않았다면 빈 배열을 반환해준다.
const foods = ['김치','라면','삼겹살','우동','미역국'];
let a = foods.splice(3,0,'등갈비찜');// index3에 삭제하지않고 :0 요소를 추가해줌
console.log(foods);
console.log(a);// 삭제하지 않았으니 빈배열이 반환되었다.
let v = foods.splice(3,2); //3번째 index에서 2개 요소 제거 추가할요소를 적지않아서 제거만된다.
console.log(foods);
console.log(v);// ['등갈비찜','우동'] 삭제된것 반환
//* slice - 배열의 원하는 index의 요소를 복사하여 복사된 요소를 반환해준다.
//* 배열원본은 변경되지않음.
//* slice(start,end) 
const foods2 = ['토스트','라면','삼겹살','제육볶음','삼계탕','김치찜'];
let copy = foods2.slice(2,4); //시작 :2 끝 :4 (4번은 포함x)
console.log(foods2);
console.log(copy);
let copy2 = foods2.slice(2);// end 생략 하여 배열끝까지 
console.log(copy2);
console.log(' ---- at -----');

//* at -배열의 위치에 있는 요소를 반환해준다. 
let aa = foods2.at(2);
console.log(aa);

console.log(' ---- concat -----');
//* 매개변수로 들어온 배열 이나 값을 기존배열에 합쳐주고 합쳐진 새로운배열을 반환해준다.
let puls = pokemon.concat(foods,'HaHa');
console.log(puls);








