function like(id, like_status){
    $.get("/product/like/" + id + '?like-status=' + like_status).then(res => {
        if (like_status === 'like'){
            $('#like-status').innerHTML(`<button onClick="like(${ id }, 'dislike')"></button>`);
        }
        if (like_status === 'dislike') {
            $('#like-status').innerHTML(`<button onClick="like(${ id }, 'like')"></button>`);
        }
        console.log(res);
    });
}

function addProduct(id) {
    $.get("/product/add/" + id).then(res =>{
        console.log(res);
    })
}

function deleteProduct(id){
    $.get('/product/delete/' + id).then(res => {
        console.log(res);
    })
    $('#product-bucket').reload();
}

$(function () {
    $("input[name='count']").TouchSpin({
        min: 1,
        max: '1000000000000000',
        buttondown_class: "btn-counter waves-effect waves-light",
        buttonup_class: "btn-counter waves-effect waves-light"
    });
});


function showProduct(id){
    $.get("/product/show/" + id).then(res => {
        $('#show-product').html(res);
        console.log(res);
    });
}


function changeNum(id){
    const num = $('#product-count-' + id.toString()).val();
    $.get('/product/change/' + id + '?num=' + num).then(res =>{
        console.log(res);
    })
}

function changeProductNum(id){
    const num = $('#product-num-' + id.toString()).val();
    $.get('/product/change/' + id + '?num=' + num).then(res =>{
        console.log(res);
    })
}

function productChart(id){
    $.get('/product/chart/' + id).then(res =>{
        console.log(res);
    })
}

function blogComment(id){
    const text = $('#blog-comment-text').val();
    const replay_to = $('#blog-replay-id').val();
    $.post('/blog/comment/' + id, {csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value, text:text, replay_to:replay_to}).then(res =>{
        console.log(res);
        if (res === 'success'){
            $('#comment-status').html(`<h2>....کامنت شما با موفقیت ثبت شد و در حال بررسی</h2>`);
            $('#blog-comment-text').val('');
        }
        if (res === 'failed'){
             $('#comment-status').html(`<h2>مشکلی در ثبت کامنت وجود دارد</h2>`);
        }
    })
}

function replayComment(name, id){
    $('#blog-replay-id').val(id);
    $('#user-replay').html(`<h3>در پاسخ: ${ name } </h3>><button onclick="deleteReplayComment()">حذف</button>`);
}

function deleteReplayComment(){
    $('#blog-replay-id').val('');
    $('#user-replay').html('');
}


// $(window).scroll(function() {
//         const id = $('#blog-id').val();
//         var margin = $(document).height() - $(window).height() - 150;
//         if ($(window).scrollTop() > margin) {
//             $.get('/blog/comment/' + id).then(res => {
//                 $('#comments').html(res);
//             })
//         }
//     });


function addAddressView(){
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
        success: function(data) {
            if (data.status === 'OK'){
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
    $.post('/user/add-address', {csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value, state, city, plaque, address, post_code, position_x, position_y}).then(res =>{
        if (res === 'success'){
            console.log('success');
            $.reload();
        }
        else{
            console.log(res);
        }
    });
}

function printFactor(){
    var prtContent = document.getElementById('factor');
    var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

function convertPdf(id){
    $.get('/panel/factor-pdf/' + id).then(res =>{
       console.log(res);
    });
}

function getCategoryProducts(category_id){
    const type = $('#type-grid').val();
    if (category_id === null){
        $.get('/panel/products-grid-body?category=' + 0 + '&type=' + type).then(res =>{
            $('#category-num').val(0);
            $('#grid-body').html(res);
        });
    }
    else{
        $.get('/panel/products-grid-body?category=' + category_id + '&type=' + type).then(res =>{
            $('#category-num').val(category_id);
            $('#grid-body').html(res);
        });
    }
}

function sortGridProducts(type){
    const category_id = $('#category-num').val();
    $.get('/panel/products-grid-body?category=' + category_id + '&type=' + type).then(res =>{
        $('#type-grid').val(type);
        $('#grid-body').html(res);
    });
}

function gridSearch(){
    const search = $('#grid-search').val();
    $.get('/panel/products-grid-body?search=' + search).then(res =>{
        $('#grid-body').html(res);
    });
}

function deleteProduct(id){
    $.get('/panel/product/delete/' + id).then(res =>{
        console.log(res);
    })
}

function addProductForm(category){
    $.get('/panel/product/add-new?category=' + category).then(res =>{
        $('#product-add-form').html(res);
    })
}

function sendCode(id){
    const phone = $('#phone-field').val();
    const email = $('#email-field').val();
    const fullname = $('#fullname-field').val();
    const password = $('#password-field').val();
    const confirm_password = $('#confirm-password-field').val();
    $.post('/user/register', {csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value, phone, email, fullname, password, confirm_password}).then(res =>{
        console.log(res);
        $('#register-detail').html(res);
    })
}

function register(id){
    const phone = $('#phone-field').val();
    const code = $('#code-field').val();
    const email = $('#email-field').val();
    const fullname = $('#fullname-field').val();
    const password = $('#password-field').val();
    const confirm_password = $('#confirm-password-field').val();
    $.post('/user/register/activate', {csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value, phone, email, fullname, password, confirm_password, code}).then(res =>{
        if (res === 'ok'){
            console.log(res);
        }
    })
}


function selectChat(id){
    $.get('/panel/chat/' + id).then(res =>{
        $('#chat-page').html(res);
    })
}

function showSmallBucket(){
    $.get('/bucket/small-bucket/').then(res => {
        $('#cartCanvas').html(res);
    })
}

function deleteBucketProduct(id){
    $.get('/bucket/small-bucket/delete/' + id).then(res => {
        $.reload();
    })
}

$('input[type="checkbox"]').change(function(){
    this.value = (Number(this.checked));
});

function sendOtp(id){
    const phone = $('#phone-forget').val();
    $.post('/user/register/activate', {csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value, phone, email, fullname, password, confirm_password, code}).then(res =>{
        console.log(res);
    })
}

function sortProducts(sort){
    $.get('/product/', {sort}).then(res =>{
        console.log(res);
    })
}