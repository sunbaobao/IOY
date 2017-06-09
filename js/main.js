/**
 * Created by uu on 2017/2/24.
 */
require.config({
    "baseUrl": "js",
    "paths": {
        "flexible": "flexible",
        "jquery": 'jquery',
        "swiper": "swiper.jquery.min",
        "tween": ["http://unpkg.com/tween"]
    },
    shim: {
        "swiper": {
            deps: ["jquery"]
        },
        // velocity.ui 依赖 velocity
        "swiper.animate1": {
            deps: ["swiper"]
        }
    }
});
require(["flexible", "index"], function (flex, res) {
    var $ = res.$;
    $(function () {
        $(".c-tab-nav").on("click", ".item", function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(".c-tab-content .content").eq($(this).index()).fadeIn().siblings().fadeOut();
        });
        $("#box-rule-text").on("click", function () {
            $(".popM").css("display", "block");
            console.log(1);
        });
        $(".close").on("click", function () {
            $(".popM").css("display", "none");
        });
        if ($("#audio1").length != 0) {
            $("#audio1")[0].play();
            $("#audio1")[0].volume = 0.4;
            $("#audio").on("click", function () {
                console.log($("#audio1")[0].paused);
                if ($("#audio1")[0].paused) {
                    $("#audio1")[0].play();
                    $("#audio").removeClass("paused");
                } else {
                    $("#audio1")[0].pause();
                    $("#audio").addClass("paused");
                }
            })
        }
        var v = $("#videoW video")[0];
        $("#videoW").on("click", function () {
            if ($(this).hasClass("paused")) {
                v.pause();
                $(this).removeClass("paused");
            }else {
                v.play();
                $(this).addClass("paused");
            }
        });

    });
    // console.log(res.status,res.$("body").text());

});