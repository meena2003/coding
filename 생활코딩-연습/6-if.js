/*  조건에 따라서 프로그램을 작동하게 만든다.
    if(...) {     } 에서 ...에는 true / false 둘 중에 하나만 들어간다.
    true일 경우에만 실행이 된다! boolean에 따라서 조건문이 실행되는지 결정된다.     */
    if(true) {
        alert('result : true')
    }
    if(false) {
        alert('result : true')
    }
// if가 true일 때 1,2,3,4,5가 순서대로 팝업된다.
    if(true) {
        alert(1);
        alert(2);
        alert(3);
        alert(4);
    }
    alert(5);

/* 'else'는 "그렇지 않다면" 이란 뜻이다. */
    if(true) {
        alert(1);
    } else {
        alert(2);
    }
/* 'if else'를 사용하면 if문을 더 풍부하게 사용할 수 있다.  */
    if(true) {
        alert(2)
    } else if(true) {
        alert(3)
    } else if(true) {
        alert(4)
    } else {
        alert(5)
    }

/*  if 안쪽에 들어가는 조건문에 비교 연산자를 넣는다.   */
    if(a===1) {
        alert("good");
    } else {
        alert("bad");
    }
//  'prompt'는 prompt창이 뜨면서 값을 직접 넣을 수 있는 명령어가 나온다.
    prompt('당신의 나이는?');
    "18"
//  안쪽부터 명령어가 시작된다.
    alert(prompt("당신의 나이는?"));
    alert(prompt("당신의 나이는")*2);
//  활용 방법은 아이디 확인으로 사용할 수 있다.
    id = prompt("아이디를 입력하세요");
    if(id == "meena2003") {
        alert("아이디가 일치합니다");
    } else {
        alert("아이디가 불일치 합니다");
    }

    id = prompt("아이디를 입력하세요");
    if(id == "meena2003") {
        alert("아이디가 일치합니다");
    } else {
        alert("아이디가 불일치 합니다");
    }
//  if문 안에 또 다른 if문을 넣을 수 있다. 바로 비밀번호 확인하는 것으로 만들 수 있다.
//  아이디가 true일 경우, 비밀번호를 입력하라고 나오게 만든다.
    var id = prompt("아이디를 입력하세요.")
    if(id === "meena2003") {
        var password = prompt("비밀번호를 입력하세요");
        if(password === "082172woo!") {
            alert("로그인 되었습니다. "+id+"님 반갑습니다");
        } else {
            alert ("비밀번호가 틀립니다.");
        }
    } else {
        alert("아이디가 틀립니다.")
    }

/*  '&&'는 '논리 연사자'이다. and와 의미가 같다.
    좌항과 우항 모두가 true여야 한다.
    논리 연사자를 사용하면 코드를 더 단순하게 짤 수 있다. */
    var id = prompt("아이디를 입력하세요.")
    var password = prompt("비밀번호를 입력하세요");
    if(id === "meena2003" && password === "082172woo!") {
        alert("로그인 되었습니다. "+id+"님 반갑습니다");
    } else {
        alert ("아이디 또는 비밀번호가 틀립니다.");
    }

/*  '||'는 or과 의미가 같다.
    좌항과 우항 중 하나만 true면 된다. 둘다 참이어도 된다.
    둘다 false면 안된다.  */
    var id = prompt("아이디를 입력하세요.");
    var password = prompt("비밀번호를 입력하세요");
    if((id==='meena2003' || id==='meena2016' || id==='meena2020') && password==='082172woo!') {
        alert("인증되었습니다.");
    } else {
        alert("인증이 실패했습니다.");
    }

//  '!'를 앞에 붙으면 'not'의 의미를 가진다. 성질이 역전되는 것이다.


/*  자바스크립트에서 if에 0 = false, 1 = true 로 간주한다.  */