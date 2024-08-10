$(function () {

    ///نمایش زیر منو
    $(".showSubMenu").click(function () {
        $(this).nextAll("ul").toggleClass("show");
        $(this).toggleClass('open');
    })
    
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

    ///شمارنده محصول برای اضافه کردن به سبد خرید
    $("input.counter").TouchSpin({
        min: 1,
        max: '1000000000000000',
        buttondown_class: "btn-counter waves-effect waves-light",
        buttonup_class: "btn-counter waves-effect waves-light"
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

    ///نمایش تعداد وقتی روی دکمه افزودن به سبد خرید در صفحه تکی محصول کلیک میشود
    $(".counter_btn").click(function(){
        $(this).addClass("d-none");
        $(".counter_product").show();
    })

    
});
