let number = 5;
let str = '문자열도 입력 가능.'; 
let str2 = "쌍따옴표도 가능.";
let prime = 1.5123;
let is_ok = true;
let is_not = false;
let undefi; //변수 이름만 정해줄 수도 있다.
let empty = null;

console.log(undefi, empty, str);




const sym1 = Symbol('test');
let symbolVar1 = sym1;

const airline = ["비행기", 320, "airbus", ["V1", true]];

const obj1 = {};

const obj2 = {
    name: "DongHa",
    age: 22,
    isMale: true
};

console.log(symbolVar1.toString());
console.log(airline, obj1, obj2);




const users = new Map(); // 사용자 정보 Map 객체 생성
users.set("user1", { // 사용자 정보 추가
id: 1, password: "password123",
});
users.set("user2", {
id: 2, password: "password456",
});
// Map 객체의 모든 사용자 정보 반복 출력
for (const [username, user] of users) {
console.log(`사용자 이름: ${username}`, `ID: ${user.id}`);
console.log(`비밀번호: ${user.password}`);
}
// Set 객체 활용 (예), 이름만 저장할 Set 객체 생성
const usernames = new Set();
usernames.add("user1"); // 사용자 이름 추가
usernames.add("user2");
// Set 객체의 모든 사용자 이름 반복 출력
for (const username of usernames) {
console.log(`사용자 이름: ${username}`);
}