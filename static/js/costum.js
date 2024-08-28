function like(id, like_status) {
    $.get("/product/like/" + id + '?like-status=' + like_status).then(res => {
        if (like_status === 'like') {
            $('#like-status').html(`<i onClick="like(${id}, 'dislike')" class="bi-heart-fill"></i>`);
        }
        if (like_status === 'dislike') {
            $('#like-status').html(`<i onclick="like(${id}, 'like')" class="bi-heart"></i>`);
        }
        console.log(res);
    });
}

function addProduct(id) {
    $.get("/product/add/" + id).then(res => {
        $('#product-bucket').html(`<div class="d-flex align-items-center counter_product">
                                        <div>
                                            <input onchange="changeNum(${id})" name="count"
                                                   id="product-count-${id}" type="text"
                                                   value="1">
                                        </div>
                                        <div class="ms-3">
                                            <h4 class="font-14 fw-normal">در سبد شما</h4>

                                            <h5 class="font-12 fw-normal mt-2"><a href="/bucket/cart">مشاهده
                                                <span
                                                        class="main-color-one-color">سبد خرید</span></a>
                                                <a onclick="deleteProductUser(${id})"><i
                                                        class="bi bi-trash ms-3 font-16 hint--left"
                                                        data-hint="حذف از سبد خرید"></i></a>
                                            </h5>
                                        </div>
                                    </div>`);
        $("input[name='count']").TouchSpin({
        min: 1,
        max: '1000000000000000',
        buttondown_class: "btn-counter waves-effect waves-light",
        buttonup_class: "btn-counter waves-effect waves-light"
    });
    })
}

// <div>
//     <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span
//         className="input-group-btn input-group-prepend"><button
//         className="btn-counter waves-effect waves-light bootstrap-touchspin-down" type="button">-</button></span><input
//         onChange="changeNum(2)" name="count" id="product-count-2" type="text" value="1" className="form-counter"/><span
//         className="input-group-btn input-group-append"><button
//         className="btn-counter waves-effect waves-light bootstrap-touchspin-up" type="button">+</button></span></div>
// </div>

function deleteProductUser(id) {
    $.get('/product/delete/' + id).then(res => {
        $('#product-bucket').html(`<button onclick="addProduct(${id})"
                                            class="btn counter_btn w-100 d-block border-0 main-color-two-bg rounded-3 py-3 font-16 waves-effect waves-light">
                                        <i class="bi bi-cart-plus"></i>افزودن به سبد خرید
                                    </button>`);
    })
}

$(function () {
    $("input[name='count']").TouchSpin({
        min: 1,
        max: '1000000000000000',
        buttondown_class: "btn-counter waves-effect waves-light",
        buttonup_class: "btn-counter waves-effect waves-light"
    });
});

function showProduct(id) {
    $.get("/product/show/" + id).then(res => {
        $('#show-product').html(res);
        console.log(res);
    });
}


function changeNum(id) {
    const num = $('#product-count-' + id.toString()).val();
    $.get('/product/change/' + id + '?num=' + num).then(res => {
    })
}

function changeNumBucket(id) {
    const num = $('#product-count-' + id.toString()).val();
    const total_price = parseInt($('#bucket_total_price').text());
    $.get('/product/change/' + id + '?num=' + num).then(res => {
    })
}

function changeProductNum(id) {
    const num = $('#product-num-' + id.toString()).val();
    $.get('/product/change/' + id + '?num=' + num).then(res => {
        console.log(res);
    })
}

function productChart(id) {
    $.get('/product/chart/' + id).then(res => {
        console.log(res);
    })
}

function blogComment(id) {
    const text = $('#blog-comment-text').val();
    const replay_to = $('#blog-replay-id').val();
    if (text === "") {
        $('#comment-status').html(`<h2>لطفا نظر خود را بنویسید</h2>`);
    } else {
        $.post('/blog/comment/' + id, {
            csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
            text: text,
            replay_to: replay_to
        }).then(res => {
            console.log(res);
            if (res === 'success') {
                $('#comment-status').html(`<h2> نظر شما با موفقیت ثبت شد و در حال بررسی ...</h2>`);
                $('#blog-comment-text').val('');
            }
            if (res === 'failed') {
                $('#comment-status').html(`<h2>مشکلی در ثبت نظر وجود دارد</h2>`);
            }
        })
    }

}

function replayComment(name, id) {
    $('#blog-replay-id').val(id);
    $('#user-replay').html(`<h4 style="display: inline-block;">در پاسخ: ${name} </h4><button style="display: inline-block;color: red;background-color: white;border: none" onclick="deleteReplayComment()">لغو</button>`);
}

function deleteReplayComment() {
    $('#blog-replay-id').val('');
    $('#user-replay').html('');
}


function addAddressView() {
    $.get('/user/add-address').then(res => {
        $('#neshan').html(res);
    });
}

function showAddress() {
    const x = $('#lng').val();
    const y = $('#lat').val();
    $.ajax({
        url: 'https://api.neshan.org/v5/reverse?lat=' + y + '&lng=' + x,
        headers: {'Api-Key': 'service.a77ead3f22874b168c2b86ed615fd771'},
        success: function (data) {
            if (data.status === 'OK') {
                $('#state').val(data.state);
                $('#city').val(data.city);
                $('#address').val(data.formatted_address);
                console.log(data);
            }
        }
    });
}

function addAddress() {
    const state = $('#state').val();
    const city = $('#city').val();
    const address = $('#address').val();
    const plaque = $('#plaque').val();
    const post_code = $('#post_code').val();
    const position_x = $('#lng').val();
    const position_y = $('#lat').val();
    $.post('/user/add-address', {
        csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
        state,
        city,
        plaque,
        address,
        post_code,
        position_x,
        position_y
    }).then(res => {
        if (res === 'success') {
            console.log('success');
            $.reload();
        } else {
            console.log(res);
        }
    });
}

function printFactor() {
    var prtContent = document.getElementById('factor');
    var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

function convertPdf(id) {
    $.get('/panel/factor-pdf/' + id).then(res => {
        console.log(res);
    });
}

function getCategoryProducts(category_id) {
    const type = $('#type-grid').val();
    if (category_id === null) {
        $.get('/panel/products-grid-body?category=' + 0 + '&type=' + type).then(res => {
            $('#category-num').val(0);
            $('#grid-body').html(res);
        });
    } else {
        $.get('/panel/products-grid-body?category=' + category_id + '&type=' + type).then(res => {
            $('#category-num').val(category_id);
            $('#grid-body').html(res);
        });
    }
}

function sortGridProducts(type) {
    const category_id = $('#category-num').val();
    $.get('/panel/products-grid-body?category=' + category_id + '&type=' + type).then(res => {
        $('#type-grid').val(type);
        $('#grid-body').html(res);
    });
}

function gridSearch() {
    const search = $('#grid-search').val();
    $.get('/panel/products-grid-body?search=' + search).then(res => {
        $('#grid-body').html(res);
    });
}

// function blogSearch(){
//     const search = $('#blog-search').val();
//     $.get('/panel/blog?search=' + search).then(res =>{
//         $('#blog-grid-body').html(res);
//     });
// }

function getCategoryBlogs(category_id) {
    const type = $('#blog-type-category').val();
    if (category_id === null) {
        $.get('/panel/blog-body?category=' + 0 + '&type=' + type).then(res => {
            $('#blog-category-num').val(0);
            $('#blog-grid-body').html(res);
        });
    } else {
        $.get('/panel/blog-body?category=' + category_id + '&type=' + type).then(res => {
            $('#blog-category-num').val(category_id);
            $('#blog-grid-body').html(res);
        });
    }
}

function sortGridBlogs(type) {
    const category_id = $('#blog-category-num').val();
    $.get('/panel/blog-body?category=' + category_id + '&type=' + type).then(res => {
        $('#blog-type-grid').val(type);
        $('#blog-grid-body').html(res);
    });
}

function deleteProduct(id) {
    $.get('/panel/product/delete/' + id).then(res => {
        console.log(res);
    })
}

function addProductForm(category) {
    $.get('/panel/product/add-new?category=' + category).then(res => {
        $('#product-add-form').html(res);
    })
}

function sendCode(id) {
    const phone = $('#phone-field').val();
    const email = $('#email-field').val();
    const fullname = $('#fullname-field').val();
    const password = $('#password-field').val();
    const confirm_password = $('#confirm-password-field').val();
    $.post('/user/register', {
        csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
        phone,
        email,
        fullname,
        password,
        confirm_password
    }).then(res => {
        console.log(res);
        $('#register-detail').html(res);
    })
}

function register(id) {
    const phone = $('#phone-field').val();
    const code = $('#code-field').val();
    const email = $('#email-field').val();
    const fullname = $('#fullname-field').val();
    const password = $('#password-field').val();
    const confirm_password = $('#confirm-password-field').val();
    $.post('/user/register/activate', {
        csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
        phone,
        email,
        fullname,
        password,
        confirm_password,
        code
    }).then(res => {
        if (res === 'ok') {
            console.log(res);
        }
    })
}


function selectChat(id) {
    $.get('/panel/chat/' + id).then(res => {
        $('#chat-page').html(res);
    })
}

function showSmallBucket() {
    $.get('/bucket/small-bucket/').then(res => {
        $('#cartCanvas').html(res);
    })
}

function deleteBucketProduct(id) {
    $.get('/bucket/small-bucket/delete/' + id).then(res => {
        $.reload();
    })
}

$('input[type="checkbox"]').change(function () {
    this.value = (Number(this.checked));
});

function sendOtp(id) {
    const phone = $('#phone-forget').val();
    $.post('/user/register/activate', {
        csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
        phone,
        email,
        fullname,
        password,
        confirm_password,
        code
    }).then(res => {
        console.log(res);
    })
}
