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
        $(".close").on("click",function () {
            $(".popM").css("display", "none");
        })
    });
    // console.log(res.status,res.$("body").text());

});