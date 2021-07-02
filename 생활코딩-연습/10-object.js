/*  객체(object)도 배열(array)와 마찬가지로 연관되어 있는 데이터를 담아내는 그릇이다.
    하지만 배열의 인덱스가 0, 1, 2... 숫자로 지정되지만, 객체는 문자 등 내가 임의로 인덱스를 지정할 수 있다. */
//  객체를 만드는 방법은, 'var 변수 = {key : key 값, key : key 값, key : key 값 ...}; 이다.
//  객체를 만들면 하나의 변수에 넣어서 언제든지 객체를 제어할 수 있도록 한다.
    var grades = {egoing : 10, k8805 : 6, sorialgi : 50};

    grades
    {egoing: 10, k8805: 6, sorialgi: 50}
//  각각의 키 값을 가져오는 방법은 다음과 같다.
    grades['egoing']
    10
    grades['k8805']
    6
    grades.egoing
    10
    grades.sorialgi
    50

//  배열에는 순서가 중요하다. 객체는 순서가 필요하지 않다. 객체에는 key와 value만 존재한다.
//  객체에는 순서에 따라서 값이 나오지 않는다는 것을 기억해야 한다.

/*  객체에서 데이터를 가지고 오려면 'for(key in 객체)'문을 사용한다.  */
    var grades = {'egoing' : 10, 'k8805' : 6, 'sorialgi' : 80};

    for(key in grades) {
        console.log(key);
    }
    VM378:2 egoing
    VM378:2 k8805
    VM378:2 sorialgi
//  key의 value값들을 알기 위해선 다음과 같이 하면 된다.
    for(key in grades) {
        console.log(grades[key]);
    }
    VM426:2 10
    VM426:2 6
    VM426:2 80
//  이것을 응용하면 다음과 같다.
    for(key in grades) {
        console.log("key : "+key+" value : "+grades[key])
    }
    VM576:2 key : egoing value : 10
    VM576:2 key : k8805 value : 6
    VM576:2 key : sorialgi value : 80

//  객체에는 객체를 담을수도 있고, 함수를 담을 수도 있다.
    var grades = {
        'list' : {'egoing' : 10, 'k8805' : 8, 'sorialgi' : 80},
        'show' : function() {
        alert('Hello world');
        }
    }
//  'this'라는 것은 약속된 변수이다. 이 변수는 상위 객체를 가르키는 변수이다.
    var grades = {
        'list' : {'egoing' : 10, 'k8805' : 8, 'sorialgi' : 80},
        'show' : function() {
        console.log(this.list);
        }
    }

    grades['show']();
    VM6272:4 {egoing: 10, k8805: 8, sorialgi: 80}

//  연관되어 있는 데이터와 연관되어 있는 처리를 하나의 그릇(객체)에 넣는 스타일이 '객체지향 프로그램'이라고 한다. 즉, 객체와 함수가 하나의 객체에 넣는 스타일이다.


