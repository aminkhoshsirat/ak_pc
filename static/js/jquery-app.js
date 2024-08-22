$(document).ready(function () {
	
	//////نمایش سبد خرید به صورت ساید بار
    $("#cartBtn").click(function () {
        ///show
        $(".cart-slide-overlay").addClass("show");
        $(".cart-slide").css("left", '0');
        ///hide
        $("#cartSlideColse").click(function () {
            $(".cart-slide-overlay").removeClass("show");
            $(".cart-slide").css("left", '-100%');
        })
        ///hide with overlay
        $(".cart-slide-overlay").click(function () {
            $(this).removeClass("show");
            $(".cart-slide").css("left", '-100%');
        })
    })
	
	//////نمایش سبد خرید به صورت ساید بار end

    /// نمایش منو رسپانسیو ////////////
    $(".showSubMenu").click(function () {
        $(this).nextAll("ul").toggleClass("show");
        $(this).toggleClass('open');
    })

    ///show
    $("#showResponsiveMenu").click(function () {
        ///show
        $(".rm-items").addClass("open");
        $(".rm-overlay").addClass("open");

        ///hide
        $(".rm-overlay").click(function () {
            $(this).removeClass('open');
            $(".rm-items").removeClass('open');
        })
        $(".rm-item-close").click(function () {
            $(".rm-overlay").removeClass('open');
            $(".rm-items").removeClass('open');
        })
    })
	
	/// نمایش منو رسپانسیو end////////////

    ////back to top
    var $button = $.backToTop({
        effect: 'zoom',
        icon: 'bi bi-chevron-up',
        height: 50,
        width: 50,
        theme: 'fawesome',
    });

    ///انتخاب گر رنگ
    $(".color-box-item").click(function () {
        $(".color-box-item").removeClass("active");
        $(this).addClass('active');
    })

    ///نمایش فرم کد تخفیف در صفحه صورت حساب
    $("#discountForm").slideUp();
    $("#showFormDiscount").click(function () {
        $("#discountForm").slideToggle();
    });

    ///شمارنده محصول برای اضافه کردن به سبد خرید
    $("input.counter").TouchSpin({
        min: 1,
        max: '1000000000000000',
        buttondown_class: "btn-counter waves-effect waves-light",
        buttonup_class: "btn-counter waves-effect waves-light"
    });

});

///نمایش مگامنو آپدیدت جدید
$(".main-menu-head").hover(function(){
    $(this).children().find(".main-menu-sub").first().addClass('main-menu-sub-active');
    $(this).children().addClass('active');
})
$(".main-menu-head").mouseleave(function(){
    $(this).children().find(".main-menu-sub").first().removeClass('main-menu-sub-active');
    $(this).children().removeClass('active');
})
$(".main-menu li").mouseover(function () {
    
    $(".main-menu li").removeClass("main-menu-sub-active-li");
    $(this).addClass("main-menu-sub-active-li");
    $(".main-menu-sub").removeClass('main-menu-sub-active');
    $(this).children('ul').removeClass('main-menu-sub-active');
    $(this).children('ul').addClass('main-menu-sub-active');
});
$(".main-menu-sub-active").mouseleave(function(){
    $(".main-menu-sub-active").removeClass("main-menu-sub-active");
})
