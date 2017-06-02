/**
 * Created by uu on 2017/2/24.
 */
define(["jquery", "swiper"],
    function ($, Swiper) {

        $(function () {
            var mySwiper1 = new Swiper('#ban', {
                // direction: 'h',
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                autoplay: 3000,

            });
            var mySwiper2 = new Swiper('.area-activity-container', {
                // direction: 'h',
                loop: true,
                slidesPerView: 4,
                centeredSlides: false,
                autoplay: 3000,

            });
            (function () {
                //news 轮播
                var index = 0;
                var $list = $(".newsList");
                var h = $list.children().height();

                function go() {
                    $list.animate({top: -h}, 400, function () {
                        $list.append($list.children().eq(0));
                        $list.css({top: 0});
                    });
                }

                if ($list.children().length > 1) {
                    var t = setInterval(go, 3000);
                }
                // console.log(h);
            })();
            $(".getButton").on("click", function () {
                // $(this).next().css("display","block");
            });
            $(".giftList").on("click", ".item", function () {
                if ($(this).hasClass("get")){return;}
                var d=new Date();
                if(d.getDate()<0){
                    $(".popM3").css("display","block");
                }else {
                    $(".popM1").css("display","block");
                }

            });
            $(".sure").on("click", function () {
                alert(1);
                var name=$("input[name='rewardId']").val();
                $.get("/activity/reddem", { "rewardId": name }, function (response) {
                    $(".popM1").hide();
                    console.log();
                    if (response.status == 0) {
                        $("#popM3").css("display", "block");
                    }
                    if (response.status == 1) {
                        $(".popM2").css("display", "block");
                        $(".item[data-id='" + name + "']").addClass("get").find(".right").html("<p>已经领取</p>");
                    }
                    if (response.status == -1) {
                        $("#popM4").css("display", "block");
                    }
                },"json");
                alert(2);

            });
        });

        return {
            status: "1",
            $: $
        }
    });
