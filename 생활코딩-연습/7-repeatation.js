/* 반복문(loop iterate)은 조건문과 함께 양대산맥이다.
    반복문은 'while'과 'for' 문법이 있다.  */

    /* while(조건) {
        반복해서 실행할 코드
    }
    조건은 boolean 값이 true에서 false로 바뀔때까지 반복이 지속된다.
    무한 반복되면 안되기 때문에 적당한 시점에 멈추는 방법은 다음과 같다.  */
    var i = 0;
    while(i <= 10) {
        console.log("coding everybody")
        i = i+1;
    }

/*  while 보다 더 많이 사용하는 것이 for이다.
    반복하기 위해선 '초기화', '반복 조건(true || false)', '반복 실행 조건'이 필요하다.
    while은 이 3가지 조건들이 따로따로 떨어져 있다. 반면에 for은 한번에 묶어져 있다.
    'for(초기화; 반복 조건; 반복 실행 조건)'의 문법을 가진다.   */
    for(var i = 0; i < 10; i = i + 1) {
        console.log("coding everybody")
    }
    // "i = i + 1"와 "i++"는 동일하다.

//  'break'는 반복문을 강제로 종료시키고 싶을때 사용한다.
    for(var i = 0; i < 10; i = i + 1) {
        if(i === 5) {
            break;
        }
        console.log("coding everybody")
    }
// 'continue'는 해당 조건에서 그 순간에만 종료하고, 반복문은 유지한다.
    for(var i = 0; i < 10; i = i + 1) {
        if(i === 5) {
            continue;
        }
        console.log("coding everybody")

/*  반복문은 중첩 기능을 사용할 수 있다.
    i가 1번 실행되고, j가 10번 실행된다. 그리고 다시 i가 1번 실행되고 또 j가 10번 다시 실행된다.  */
    for(var i = 0; i < 10; i++) {
        for(var j = 0; j < 10; j++) {
            console.log("coding everybody "+i+j)
        }
    }