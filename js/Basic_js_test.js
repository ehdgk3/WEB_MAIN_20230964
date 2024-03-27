// //변수 선언 3가지 방법. let, const, var
// //스코프 = 식별자의 유효 범위.

// var jb = 'hi';// 변수 선언 후 주석 가능
// var a = 1;
// var b;
// b = 5;      //재할당이지만 권장하지 않음.

// if (true){
//     let c = 'let 접근';
//     var c_1 = 'var 접근';
    
// }
// //console.log(c); //let으로 선언된 변수는 선언된 블록 내에서만 접근 가능하다.
// console.log(c_1);

// let d = 5;
// //let d = '값 재할당'; //재할당할 경우 에러가 난다.
// console.log(c_1);

// const e = '상수 1 접근';
// //e = 5;    //이미 선언된 변수에 새로운 값을 넣으려 한다 - 재할당
// //const e = '뭐시기뭐시기';     //같은 이름의 변수를 재선언하지 못한다. - 재선언
// //let e = '뭐시기뭐시기';       //재선언
// //const f
// console.log(e);  


document.getElementById("search_btn").addEventListener('click', search_message);
function search_message(){
alert("검색을 수행합니다!")
}

