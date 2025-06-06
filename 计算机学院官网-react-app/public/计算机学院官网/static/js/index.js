
let $btli = $(".btli");
let $droplist = $(".droplist");

let $campus_scenery_center_img = $(".campus-scenery-center img");
let $campus_scenery_center = $(".campus-scenery-center");

let $college_news_content_photo_img = $(".college-news-content-photo img");
let $college_news_content_photo = $(".college-news-content-photo");
let $college_news_content_photo_focus_bg = $(".college-news-content-photo-focus-bg a")
$college_news_content_photo_focus_bg = $(Array.from($college_news_content_photo_focus_bg).reverse());
let $college_news_content_photo_introduction_a = $(".college-news-content-photo-introduction a")
$college_news_content_photo_introduction_a = $(Array.from($college_news_content_photo_introduction_a).reverse());

let $slide_left = $(".slide_left");
let $slide_right = $(".slide_right");
let $scroll_img = $(".scroll-img");
// let $college_container3 = $(".college-container3");

// 以对象作为参数进行传递，可以将函数中对数值的修改带出来
let campus_scenery = {
    curent_img_cnt: 3,
    img_cnts: 4
};

let college_news = {
    curent_img_cnt: 4,
    img_cnts: 5
};

function main() {

    // $btli.each(function (index) {
    //     $(this).on("mouseenter", function (event) {
    //         $(this).children(".droplist").stop(true, false).slideDown(500);
    //     });

    //     $(this).on("mouseleave", function (event) {
    //         $(this).children(".droplist").stop(true, false).slideUp(500);
    //     });
    // });

    // for (let i = 0; i < $btli.length; i++) {
    //     $btli.eq(i).on("mouseenter", function (event) {
    //         $droplist.eq(i).stop(true, false).slideDown(500);
    //     });

    //     $btli.eq(i).on("mouseleave", function (event) {
    //         $droplist.eq(i).stop(true, false).slideUp(500);
    //     });
    // }

    // for (let i = 0; i < $btli.length; i++) {
    //     $($btli[i]).on("mouseenter", function (event) {
    //         $($droplist[i]).stop(true, false).slideDown(500);
    //     });

    //     $($btli[i]).on("mouseleave", function (event) {
    //         $($droplist[i]).stop(true, false).slideUp(500);
    //     });
    // }


    // 下拉菜单动画效果
    for (let i = 0; i < $btli.length; i++) {
        $($btli.get(i)).on("mouseenter", function (event) {
            $($droplist.get(i)).stop(true, false).slideDown(300);
        });

        $($btli.get(i)).on("mouseleave", function (event) {
            $($droplist.get(i)).stop(true, false).slideUp(50);
        });

        $($droplist.get(i)).on("mouseenter", function (event) {
            $($droplist.get(i)).stop(true, false).slideDown(300);
        });

        $($droplist.get(i)).on("mouseleave", function (event) {
            $($droplist.get(i)).stop(true, false).slideUp(50);
        });
    }


    // 下拉菜单宽度设定
    for (let i = 0; i < $droplist.length; i++) {
        let $droplist_a = $droplist.eq(i).find("a");
        let max = 0;
        for (let j = 0; j < $droplist_a.length; j++) {
            let len = $droplist_a.eq(j).text().trim().length;
            // console.log($droplist_a.eq(j).text().trim());
            max = Math.max(len, max);
        }
        $droplist_a.css("width", max * 25 + "px");
    }



    // let $campus_img = $(`<img src="../static/images/campus_img.jpg" alt="">`);


    // 自动轮播step函数
    let step = ($img_set, a_object) => {
        if ($img_set === $college_news_content_photo_img) {
            $college_news_content_photo_focus_bg.eq(college_news.curent_img_cnt).css("background-color", "white");
            $college_news_content_photo_introduction_a.eq(college_news.curent_img_cnt).css("display", "none");
        }
        // console.log(curent_img_cnt);
        $img_set.eq(a_object.curent_img_cnt % a_object.img_cnts).fadeOut(1000);
        $img_set.eq((a_object.curent_img_cnt + a_object.img_cnts - 1) % a_object.img_cnts).fadeIn(1000);
        a_object.curent_img_cnt = (a_object.curent_img_cnt + a_object.img_cnts - 1) % a_object.img_cnts;

        if ($img_set === $college_news_content_photo_img) {
            $college_news_content_photo_focus_bg.eq(college_news.curent_img_cnt).css("background-color", "#105FA5");
            $college_news_content_photo_introduction_a.eq(college_news.curent_img_cnt).css("display", "block");
        }
    };


    // 改变轮播图；上一张left_step函数；下一张right_step函数
    let right_step = ($img_set, a_object) => {
        step($img_set, a_object);
    };

    let left_step = ($img_set, a_object) => {
        if ($img_set === $college_news_content_photo_img) {
            $college_news_content_photo_focus_bg.eq(college_news.curent_img_cnt).css("background-color", "white");
            $college_news_content_photo_introduction_a.eq(college_news.curent_img_cnt).css("display", "none");
        }
        $img_set.eq(a_object.curent_img_cnt % a_object.img_cnts).fadeOut(1000);
        $img_set.eq((a_object.curent_img_cnt + 1) % a_object.img_cnts).fadeIn(1000);
        a_object.curent_img_cnt = (a_object.curent_img_cnt + 1) % a_object.img_cnts;
        if ($img_set === $college_news_content_photo_img) {
            $college_news_content_photo_focus_bg.eq(college_news.curent_img_cnt).css("background-color", "#105FA5");
            $college_news_content_photo_introduction_a.eq(college_news.curent_img_cnt).css("display", "block");
        }
    }


    // 校园风景轮播
    let campus_scenery_timer = setInterval(() => step($campus_scenery_center_img, campus_scenery), 5000);

    $campus_scenery_center.on("mouseenter", (event) => {
        clearInterval(campus_scenery_timer);
    });

    $campus_scenery_center.on("mouseleave", (event) => {
        campus_scenery_timer = setInterval(() => step($campus_scenery_center_img, campus_scenery), 5000);
    });


    // 校园要闻轮播图
    let college_news_timer = setInterval(() => step($college_news_content_photo_img, college_news), 5000);

    $college_news_content_photo.on("mouseenter", (event) => {
        clearInterval(college_news_timer);
    });

    $college_news_content_photo.on("mouseleave", (event) => {
        college_news_timer = setInterval(() => step($college_news_content_photo_img, college_news), 5000);
    });

    $college_news_content_photo_focus_bg.eq(college_news.curent_img_cnt).css("background-color", "#105FA5");
    $college_news_content_photo_introduction_a.eq(college_news.curent_img_cnt).css("display", "block");

    for (let i = 0; i < $college_news_content_photo_focus_bg.length; i++) {
        $college_news_content_photo_focus_bg.eq(i).on("click", (event) => {
            $college_news_content_photo_focus_bg.eq(college_news.curent_img_cnt).css("background-color", "white");
            $college_news_content_photo_introduction_a.eq(college_news.curent_img_cnt).css("display", "none");
            $college_news_content_photo_img.eq(college_news.curent_img_cnt).fadeOut(1000);
            $college_news_content_photo_img.eq(i).fadeIn(1000);
            college_news.curent_img_cnt = i;
            $college_news_content_photo_focus_bg.eq(college_news.curent_img_cnt).css("background-color", "#105FA5");
            $college_news_content_photo_introduction_a.eq(college_news.curent_img_cnt).css("display", "block");
        });
    }


    // 为校园风景轮播图的左右键绑定事件
    $slide_left.eq(0).on("click", () => left_step($campus_scenery_center_img, campus_scenery));
    $slide_right.eq(0).on("click", () => right_step($campus_scenery_center_img, campus_scenery));
    // 为校园要闻轮播图的左右键绑定事件
    $slide_left.eq(1).on("click", () => left_step($college_news_content_photo_img, college_news));
    $slide_right.eq(1).on("click", () => right_step($college_news_content_photo_img, college_news));



    // 师生风采滚动图
    let $scroll_img_html = $scroll_img.html();
    // console.log($scroll_img_html);
    $scroll_img.html($scroll_img_html + $scroll_img_html + $scroll_img_html);

    // let $scroll_img = $(".scroll-img");

    // 滚动时的偏移宽度；控制滚动速度
    let span = -0.5;
    let left = parseFloat($scroll_img.css("left"));
    let $scroll_img_width = parseFloat($scroll_img.css("width"));

    let move = () => {
        // console.log(left);
        if (left <= -$scroll_img_width / 2)
            left = 0;

        $scroll_img.css("left", left + "px");
        left += span;
        move_timer = requestAnimationFrame(move);
    }

    let move_timer = requestAnimationFrame(move);

    $scroll_img.on("mouseenter", (event) => {
        cancelAnimationFrame(move_timer);
    });

    $scroll_img.on("mouseleave", (event) => {
        move_timer = requestAnimationFrame(move);
    });

}

export {
    main
}