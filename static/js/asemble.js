function getCategory(category){
    $('#as-category-title').val(category);
    if (category === 'main_board'){
        const cpu_id = $('#cpu-id').val();
        $.get('/asemble/category', {'category': category, 'cpu-id': cpu_id}).then(res => {
            $('#product-assemble-list').html(res);
        })
    }
    else{
        $.get('/asemble/category/?category=' + category).then(res => {
            $('#product-assemble-list').html(res);
        })
    }
}

function searchAsembleProduct(){
    const category = $('#as-category-title').val();
    const search = $('#as-search-text').val();
    if (category === 'main_board'){
        const cpu_id = $('#cpu-id').val();
        $.get('/asemble/category', {'category': category, 'cpu-id': cpu_id, 'search': search}).then(res => {
            $('#product-assemble-list').html(res);
        })
    }
    else{
        $.get('/asemble/category/?category=' + category + '&search=' + search).then(res => {
            $('#product-assemble-list').html(res);
        })
    }
}


function showDetails(id){
    $.get('/asemble/product/detail/' + id).then(res => {
        $('#show-product-asemble').html(res);
    });
}

function selectProductAsemble(category, id, title, image, price, price_after_off, url){
    const new_price = parseInt($('#as-total-price').text()) + price;
    const new_price_after_off = parseInt($('#as-total-price-off').text()) + price_after_off;
    const new_off = new_price - new_price_after_off + parseInt($('#as-total-off').text());
    $('#as-total-price').text(new_price);
    $('#as-total-price-off').text(new_price_after_off);
    $('#as-total-off').text(new_off);

    if (category === 'cpu'){
        $('#select-cpu').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#cpu-id').val(id);
        $('#main-board-btn').css('display', 'block');
        $('#as-cpu-btn').css('display', 'none');
    }
    else if(category === 'main_board'){
        $('#select-main-board').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#main-board-id').val(id);
        $('#ram-btn').css('display', 'block');
        $('#fan-cpu-btn').css('display', 'block');
        $('#as-mainboard-btn').css('display', 'none');
    }
    else if(category === 'ram'){
        $('#select-ram').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#ram-id').val(id);
        $('#as-ram-btn').css('display', 'none');
    }
    else if(category === 'gpu'){
        $('#gpu-id').val(id);
        const num = $('#gpu-num');
        num.val(parseInt(num.val()) + 1);
        const new_num = parseInt(num.val());
        if(new_num === 1){
            $('#select-gpu').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان </h6>
                <input type="hidden" name="category[168][product][1][price]" value=""></a><a style="color: red"><i class="bi bi-trash"></i></a>
                </div>`);
        }
        else{
            $('#select-gpu2').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان </h6>
                <input type="hidden" name="category[168][product][1][price]" value=""></a>
                </div>`);
        }
        if (new_num > 1){
            $('#as-gpu-btn').css('display', 'none');
        }
    }
    else if(category === 'hard'){
        $('#select-hard').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#hard-id').val(id);
        $('#as-hard-btn').css('display', 'none');
    }
    else if(category === 'ssd'){
        $('#select-ssd').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#ssd-id').val(id);
        $('#as-ssd-btn').css('display', 'none');
    }
    else if(category === 'drive'){
        $('#select-drive').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#drive-id').val(id);
        $('#as-drive-btn').css('display', 'none');
    }
    else if(category === 'fan_cpu'){
        $('#select-fan-cpu').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#fan-cpu-id').val(id);
        $('#as-fan-cpu-btn').css('display', 'none');
    }
    else if(category === 'case'){
        $('#select-case').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#main-board-id').val(id);
        $('#as-case-btn').css('display', 'none');
    }
    else if(category === 'monitor'){
        $('#select-monitor').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#monitor-id').val(id);
        $('#as-monitor-btn').css('display', 'none');
    }
    else if(category === 'fan_case'){
        $('#select-fan-case').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#fan-case-id').val(id);
        $('#as-fan-case-btn').css('display', 'none');
    }
    else if(category === 'power'){
        $('#select-power').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price_after_off }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#power-id').val(id);
        $('#as-power-btn').css('display', 'none');
    }
    $('#btn-compare-close-product').click();
}
