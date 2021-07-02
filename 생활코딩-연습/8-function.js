/*  함수란 '하나의 로직을 재실행 할 수 있도록 하는 것으로, 코드의 재사용성을 높여준다.
    하나의 코드가 있다면 여러 상황에서 사용할 수 있다.
    함수에서는 '재사용성'이 중요하다.   
    
    함수는 'function'으로 시작한다.

    ------------------------------------------
    function 함수명( [인자...[,인자]] ) {
        코드
        return 반환값
    }
    ------------------------------------------    */
    // 아래는 'numbering'이라는 함수를 정의한 것이다.
    // 이후 numbering 함수를 찾으면 내가 해당한 코딩을 실행한다.
    function numbering() {
        i = 0;
        while(i < 10) {
            console.log(i);
            i++;
        }
    }

/*  함수의 출력은 'return'을 사용한다.
    return이 나오면 그 뒤에는 (1) 이 함수를 종료시킨다. (2) 종료하면서 return값을 출력한다.   */
    function get_member1() {
        return 'egoing';
    }
    function get_member2() {
        return 'k990';
    }
    alert(get_member1());
    alert(get_member2());

/*  함수의 입력은 '인자'를 사용한다.
    인자란, 함수로 유입되는 입력 값을 의미한다.
    인자에 값이 들어가면 그것이 변수가 된다. 그 함수 내에선 입력한 값이 정의된다.  */
    function get_member(arg) {
        return arg*1000;
    }
    alert(get_member(1));
    alert(get_member(2));
//  여기서 'arg'는 매개변수(parameter)이고, 값 자체는 인자(argument)이다.
//  함수 매개변수와 인자는 복수가 가능하다.
    function get_arguments(arg1, arg2) {
        return arg1 + arg2;
    }
    console.log(get_arguments(10, 30))
    console.log(get_arguments(50, 56))
    40
    106

/*  함수를 정의하는 여러가지 방법이 있다.
    (1) var numbering = function () {
            .........
        }
    (2) function numbering () {
            .........
        }
*/
//  일회성인 '익명함수'도 존재한다.