$(function() {
    $('#click').click(function() {
        $(this).text("クリックされました");
    });
});

// $(function() {
//     $("p").click(function() {
//         $(this).text("クリックされました");
//     });
// });

$(function() {
    $("#mouseover").mouseover(function() {
        $(this).text("マウスオーバーされました");
    });
});

$(function() {
    $("#mouseout").mouseout(function() {
        $(this).text("マウスアウトされました");
    });
});

$(function() {
    $("button").click(function() {
        $("#disappear").fadeOut('slow');
    });
});

$(function() {
    $('#addclass').click(function() {
        if($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(this).text("ここをクリックすると「on」というclassがつきます")
        }
        else {
            $(this).addClass("on");
            $(this).text("「on」というclassがつきました。もう一度クリックすると元に戻ります")
        }
    });
});

$(function() {
    let flg = true;
    $(".click").click(function() {
        if(flg) {
            flg = false;
            $(".shikaku").slideUp();
        }
        else {
            flg = true;
            $(".shikaku").slideDown();
        };
    });
});

$(function () {
    $(window).on('scroll', function() {
        scrolled = $(window).scrollTop();
        weight1 = 0.5;
        weight2 = 0.12;
        $('.parallax1').css('top', 300 - scrolled * weight1 + 'px');
        $('.parallax2').css('top', 100 - scrolled * weight2 + 'px');
    });
});