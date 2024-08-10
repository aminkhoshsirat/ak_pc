function getCategory(category){
    if (category === 'main_board'){
        const cpu_id = $('#cpu-id').val();
        $.get('/asemble/category', {'category': category, 'cpu-id': cpu_id}).then(res => {
            $('#category-model').html(res);
        });
    }
    else{
        $.get('/asemble/category', {category}).then(res => {
            $('#category-model').html(res);
        });
    }
}


function showDetails(url){
    $.get('/asemble/product/detail/' + url).then(res => {
        $('#product-detail').html(res);
    });
}

function selectProduct(category, id, title, image, price, url){
    console.log(category);
    if (category === 'cpu'){
        $('#select-cpu').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#cpu-id').val(id);
        $('#main-board-btn').css('display', 'block');
    }
    else if(category === 'main_board'){
        $('#select-main-board').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#main-board-id').val(id);
        $('#ram-btn').css('display', 'block');
        $('#fan-cpu-btn').css('display', 'block');
    }
    else if(category === 'ram'){
        $('#select-ram').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#ram-id').val(id);
    }
    else if(category === 'gpu'){
        $('#select-gpu').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#gpu-id').val(id);
    }
    else if(category === 'hard'){
        $('#select-hard').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#hard-id').val(id);
    }
    else if(category === 'ssd'){
        $('#select-ssd').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#ssd-id').val(id);
    }
    else if(category === 'drive'){
        $('#select-drive').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#drive-id').val(id);
    }
    else if(category === 'fan_cpu'){
        $('#select-fan-cpu').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#fan-cpu-id').val(id);
    }
    else if(category === 'case'){
        $('#select-case').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#main-board-id').val(id);
    }
    else if(category === 'monitor'){
        $('#select-monitor').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#monitor-id').val(id);
    }
    else if(category === 'fan_case'){
        $('#select-fan-case').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#fan-case-id').val(id);
    }
    else if(category === 'power'){
        $('#select-power').html(`<a href="/product/detail/${url}"><img alt="image" src="${ image }" width="80" id="category-thumb-168" class="me-4"><div><h6 class="mb-2">${ title }</h6><h6 class="m-0">${ price }  تومان * 1</h6>
                <input type="hidden" name="category[168][product][1][price]" value="249500000.0000"></a>
                </div>  <i class="icon-font icon-pen text-secondary ms-auto" role="button" onclick="getCategory(168, 0, 14413);"></i>  <i class="icon-font icon-trash text-secondary ms-4"
                role="button" onclick="$('#product-168-14413').remove();updatePrice();check();"></i>`);

        $('#power-id').val(id);
    }
}
