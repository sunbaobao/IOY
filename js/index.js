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
                slidesPerView: 5,
                centeredSlides: false,
                autoplay: 3000,

            });
            (function () {
                //news 轮播
                var index = 0;
                var $list = $(".newsList");
                var h = $list.children().height();

                function go() {
                    $list.animate({top: -h}, 400,function () {
                        $list.append($list.children().eq(0));
                        $list.css({top:0});
                    });
                }
                if($list.children().length>1){
                    var t=setInterval(go,3000);
                }
                // console.log(h);
            })()
        });

        return {
            status: "1",
            $: $
        }
    });
