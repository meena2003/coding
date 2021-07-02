var introduction = {
    name : '김동민',
    gender : 'male',
    age : '32',
    sayHello: function() {
    console.log("안녕하세요! 저의 이름은 " + introduction.name + "이며, 나이는 " + introduction.age + "입니다."); }
};
undefined
introduction.sayHello();
VM2328:6 안녕하세요! 저의 이름은 김동민이며, 나이는 32입니다.

// 객체에서 this는 그 객체의 변수를 의미하는구나!
// 객체는 변수들을 할당할 수 있고, 함수도 넣을 수 있다.