/*  연관된 데이터를 모아서 통으로 관리하기 위해 사용하는 데이터 타입, 즉 데이터(element)를 담는 그릇이다. 
    배열은 비슷한 데이터들을 통으로 넣는다. 하나의 변수에 여러 데이터를 넣을 수 있다.
    배열은 다시 변수에 담아야 한다. */
    var member = ['철수', '영희', '훈이'];
    member
    ["철수", "영희", "훈이"]
//  배열에 담긴 각각의 데이터를 '원소(element)'라고 한다.
//  각각의 원소는 고유의 값을 가지게 되는데, 처음부터 0부터 1, 2, 3... 값을 가진다.
//  이러한 형태의 값을 '색인(index)'라고 한다.
//  내가 가져오고 싶은 데이터가 있다면 지정된 인덱스 번호를 적으면 된다.
    member[2]
    "훈이"
    member[0]
    "철수"

// 함수는 다양한 값이 들어갈 수 있지만, 결국 return이라는 하나의 값만 나오게 된다.
// 이러한 한계를 극복하고자 함수의 return값에 '배열'이 들어간다. 배열에는 다양한 원소들이 들어갈 수 있기 때문이다.
    function get_members() {
        return ['철수', '영희', '훈이'];
    }
    var members = get_members();

    members
    ["철수", "영희", "훈이"]
    members[0]
    "철수"

/*  인덱스 값을 기억하는 건 힘들다. 결국 배열에 담겨 있는 값을 하나하나 꺼내서 가공하는 것이 배열의 핵심 요소이다.
    배열은 반복문과 연결 되었을 때 효율이 극대화된다.   */
// 만약에 내가 가진 값들을 '대문자'로 가공하고 싶을 경우는 다음과 같다. '.toUpperCase()' 내장 함수를 사용한다.
    function get_members() {
        return ['egoing','k8805', 'sorialgi'];
    }
    var members = get_members();
    undefined
    console.log(members[0].toUpperCase());
    console.log(members[1].toUpperCase());
    console.log(members[2].toUpperCase());
    VM2159:1 EGOING
    VM2159:2 K8805
    VM2159:3 SORIALGI

//  배열의 원소 수를 알고 싶으면 '.length'를 사용하면 된다.
    var a = ['egoing', 'k8805', 'sorialgi'];
    a.length
    3

/*  반복문과 배열을 함께 쓰는 방법은 다음과 같다.
    먼저 function 함수에 배열값을 지정하고, 그 함수를 원하는 조건만큼 반복문에 넣으면
    내가 원하는 만큼의 값을 직접 작성하지 않아도 값이 나오게 된다.  */
    function get_members() {
        return ['egoing', 'k8805', 'sorialgi', 'leezche'];
    }
    var members = get_members();
    for(i = 0; i < 3; i++) {
        console.log(members[i]);
    }
    VM2563:7 egoing
    VM2563:7 k8805
    VM2563:7 sorialgi
//  대문자로 바꾸고 싶으면 위와 같다.
    function get_members() {
        return ['egoing', 'k8805', 'sorialgi', 'leezche'];
    }
    var members = get_members();

    for(i = 0; i < 3; i++) {     // i < 3 반복조건 때문에 원소가 4개여도 3개 값만 나온다
        console.log(members[i].toUpperCase());
    }
    VM2618:7 EGOING
    VM2618:7 K8805
    VM2618:7 SORIALGI

/*  '.length'을 이용하면 원소의 개수에 따라서 반복문의 반복 조건이 바뀌게 된다. */
    function get_members() {
        return ['egoing', 'k8805', 'sorialgi', 'leezche', 'kdm'];
    }
    var members = get_members();

    for(i = 0; i < members.length; i++) {    // member.length로 바뀜
        console.log(members[i].toUpperCase());
    }
    VM2648:7 EGOING
    VM2648:7 K8805
    VM2648:7 SORIALGI
    VM2648:7 LEEZCHE
    VM2648:7 KDM

//  배열의 크기를 알아내는 방법은 '배열.length'를 이용하면 된다.
//  배열의 끝에 하나의 원소를 추가하는 방법은 '배열.push(...) 함수'이다. push는 인자로 전달된 값을 배열에 추가하는 명령어이다.
    var i = ['a', 'b', 'c', 'd', 'c'];
    i
    VM2914:1 (5) ["a", "b", "c", "d", "c"]

    i.push ('i');
    6
    console.log(i)
    VM2914:1 (6) ["a", "b", "c", "d", "c", "i"]

//  하나의 원소가 아니라 복수의 원소를 배열에 추가하는 방법은 '배열.concat([... , ...]) 함수'이다.
//  concat의 인자는 '배열'이다. 원래 존재하는 배열에 새로운 배열을 연결하는 것이다.
    var i = ['a', 'b', 'c', 'd', 'e'];
    console.log(i);
    VM3172:2 (5) ["a", "b", "c", "d", "e"]

    i = i.concat (['f', 'g']);
    console.log(i);
    VM3188:2 (7) ["a", "b", "c", "d", "e", "f", "g"]

//  만약 원소를 뒤쪽이 아니라 앞에 넣고 싶으면 '배열.unshift('...')'을 사용하면 된다.
    var i = ['a', 'b', 'c', 'd', 'e'];
    console.log(i);
    VM3215:2 (5) ["a", "b", "c", "d", "e"]

    i.unshift ('z');
    console.log(i);
    VM3313:2 (6) ["z", "a", "b", "c", "d", "e"]

// 만약 원소를 중간에 넣고 싶으면, '배열.splice(index, howmany, '...')
// index는 내가 넣고 싶은 위치, howmany는 제거하고 싶은 원소의 갯수, 마지막은 내가 넣고 싶은 원소값이다.
    a = ['a', 'b', 'c'];
    (3) ["a", "b", "c"]
    a
    (3) ["a", "b", "c"]

    a.splice(1, 0, 'd');
    a
    (4) ["a", "d", "b", "c"]    // 'd'가 추가됐다.

// 첫번째 원소값를 제거하기 위해선 '배열.shift()'을 사용하면 된다.
    a = ['a', 'b', 'c', 'd'];

    a.shift();
    "a"
    a
    (3) ["b", "c", "d"]

// 마지막 원소값을 제거하기 위해선 '배열.pop()'을 사용하면 된다.
    a = ['a', 'b', 'c', 'd'];

    a.pop();
    "d"
    a
    (3) ["a", "b", "c"]

/*  배열을 사용하는 중요한 이유는 '정렬'에 있다. 정렬은 프로그래밍에서 중요하다.
    정렬을 효율적으로 하는 것이 알고리즘이다. */
//  알파벳 순으로 정렬하고 싶으면 '배열.sort()'을 사용하면 된다.
    var a = ['c', 'a', 'b', 'd', 'f', 'e'];

    a.sort();
    (6) ["a", "b", "c", "d", "e", "f"]    // 알파벳 순으로 정렬이 됐다.

//  만약에 역순으로 정렬하고 싶으면 '배열.reverse()'를 이용하면 된다.
    a.reverse();
    (6) ["f", "e", "d", "c", "b", "a"]

//  제가 정한 기준에 의해 정렬하고 싶으면 'sort(function)'을 이용하면 된다.