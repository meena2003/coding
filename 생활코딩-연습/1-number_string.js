// 숫자 제곱
Math.pow(3,2);
9

// 반올림
Math.round(10.6);
11

// 가장 가까운 정수로 올림
Math.ceil(8.2);
9

// 가장 가까운 정수로 내림
Math.floor(5.8);
5

// 제곱근
Math.sqrt(9);
3

// 난수
Math.random();
0.2801829430656555

// 랜덤한 숫자 만들기
Math.random() * 1000000
949920.1452727426

// 소수점 없애는 랜덤한 수
Math.round(Math.random() * 1000000);
752730

// '' , ""로 감싸면 문자열로 판단하게 됨
alert('coding everybody');

// \ 바로 뒤에 나오는 문자 '하나'는 그냥 정보로써 해석하기로 함!!
// '\'를 사용하는 것을 "escape"로, 역할로부터 도망치게 만든다는 의미임.
alert('egoing\'s coding everybody');

// 'typeof'은 대상이 어떤 종류인지 나타낸다.
typeof 1
"number"
typeof "1"
"string"

// '\n' 은 줄바꿈을 의미하는 특수 문자이다.
alert("안녕하세요.\n생활코딩의 세계에 오신 것을 환영합니다.");

// 문자를 합치는 방법
"coding" + "everybody"
codingeverybody
"coding" + " " + "everybody"
coding everybody

// 'length'는 문자열의 수를 나타낸다.
"coding everybody".length
16
"kim dong min".length
12

// 'indexOf'는 각 문자가 몇번째 자리에 있는지 나타낸다.
"code".indexOf("e");
3
"code".indexOf("c");
0
"code".indexOf("d");
2

