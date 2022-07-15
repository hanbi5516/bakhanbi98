$(document).ready(function(){
    // $('body').addClass('cccc') 제이쿼리가 정상적으로 돌아가는지 확인하기 위해 시험해보기 요소검사로 확인해보면 돼
    // 주기적으로 처리하는 명령을 담아주는 함수 > setInterval()
    // 딱 한번만 하고 안하는 애 setTimeout() > 특정시간이 흐르고 나서 딱 한번만 실행
    // 변수는 항상 괄호가 달림(동사, 매서드) 안달린건 명사
    // setInterval(function(){
    //     $('body').append('<p>뒤로 3초 마다 증가</p>')
    // }, 3000)

    // var count = 0 ;  얘를 function안에 넣으면 1밖에 안나타남
    // setInterval(function(){
    //     count++;  꼭 두개만씀 자리를 띄우면 안됨
    //     count = count % 5; 나머지 구하는 연산자%
    //     $('body').append(count);
    // }, 1000)

    // var count = 0;
    // setInterval(function(){
    //         count++;
    //         count %= 3;
    //     $('.aniSlide').animate({
    //         "marginLeft" : -1200 * count
    //     },400,function(){})
    // }, 3000)
    // animate({스타일변화}, 스피드, function(){애니메이션 끝나고 처리할 일})
    setInterval(function(){   
        $('.aniSlide').animate({
            "marginLeft" : "-=1200"
        },400,function(){
            // $('> div',this).appendTo($(this))
            // $(this).css('margin-left',0)

            // $('.aniSlide > div').eq(0).appendTo($(this))
            // $(this).css('margin-left',0)

            // =1200 > 1200이다 +=1200 > 그 값에 1200을 추가해라

            $('.aniSlide').animate({
                "marginLeft" : "-=1200"
            }, 400, function(){
                $('.aniSlide > div:first-child').appendTo($('.aniSlide')) // 맨뒤로 옮기기 첫째를 막내로
                $('.aniSlide').css('margin-left',0) // 엄마 다시 원상복귀
            })
        })
    }, 3000)
})
