function cpuBrandFunction() {
    document.getElementById("cpu-brands").classList.toggle("show");
}

function cpuSocketFunction() {
    document.getElementById("cpu-sockets").classList.toggle("show");
}

function cpuModelFunction() {
    document.getElementById("cpu-list").classList.toggle("show");
}

function mainBoardFunction(){
    document.getElementById("main-board-list").classList.toggle("show");
}


function gpuSeriesFunction(){
    document.getElementById("gpu-series-list").classList.toggle("show");
}

function gpuBrandFunction(){
    document.getElementById("gpu-brand-list").classList.toggle("show");
}

function gpuModelFunction(){
    document.getElementById("gpu-model-list").classList.toggle("show");
}

function moduleRamFunction(){
    document.getElementById("module-ram-list").classList.toggle("show");
}

function ramNumberFunction(){
    document.getElementById("ram-number-list").classList.toggle("show");
}

function ssdTypeFunction(){
    document.getElementById("ssd-type-list").classList.toggle("show");
}

function ssdNumberFunction(){
    document.getElementById("ssd-number-list").classList.toggle("show");
}

function hddTypeFunction(){
    document.getElementById("hdd-type-list").classList.toggle("show");
}

function hddNumberFunction(){
    document.getElementById("hdd-number-list").classList.toggle("show");
}

function opticalDriveFunction(){
    document.getElementById("optical-drive-list").classList.toggle("show");
}

function liquidFanFunction(){
    document.getElementById("liquid-fan-list").classList.toggle("show");
}

function fanFunction(){
    document.getElementById("fan-list").classList.toggle("show");
}

function fanNumberFunction(){
    document.getElementById("fan-number-list").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.checked__item')) {
        var myDropdown = document.getElementById("cpu-brands");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }


        var myDropdown2 = document.getElementById("cpu-sockets");
        if (myDropdown2.classList.contains('show')) {
            myDropdown2.classList.remove('show');
        }

        var myDropdown3 = document.getElementById("cpu-list");
        if (myDropdown3.classList.contains('show')) {
            myDropdown3.classList.remove('show');
        }

        var myDropdown4 = document.getElementById("main-board-list");
        if (myDropdown4.classList.contains('show')) {
            myDropdown4.classList.remove('show');
        }

        var myDropdown5 = document.getElementById("gpu-brand-list");
        if (myDropdown5.classList.contains('show')) {
            myDropdown5.classList.remove('show');
        }

        var myDropdown6 = document.getElementById("gpu-series-list");
        if (myDropdown6.classList.contains('show')) {
            myDropdown6.classList.remove('show');
        }

        var myDropdown7 = document.getElementById("gpu-model-list");
        if (myDropdown7.classList.contains('show')) {
            myDropdown7.classList.remove('show');
        }

        var myDropdown8 = document.getElementById("module-ram-list");
        if (myDropdown8.classList.contains('show')) {
            myDropdown8.classList.remove('show');
        }

        var myDropdown9 = document.getElementById("ram-number-list");
        if (myDropdown9.classList.contains('show')) {
            myDropdown9.classList.remove('show');
        }

        var myDropdown10 = document.getElementById("ssd-type-list");
        if (myDropdown10.classList.contains('show')) {
            myDropdown10.classList.remove('show');
        }

        var myDropdown11 = document.getElementById("ssd-number-list");
        if (myDropdown11.classList.contains('show')) {
            myDropdown11.classList.remove('show');
        }

        var myDropdown12 = document.getElementById("hdd-type-list");
        if (myDropdown12.classList.contains('show')) {
            myDropdown12.classList.remove('show');
        }

        var myDropdown13 = document.getElementById("hdd-number-list");
        if (myDropdown13.classList.contains('show')) {
            myDropdown13.classList.remove('show');
        }

        var myDropdown14 = document.getElementById("optical-drive-list");
        if (myDropdown14.classList.contains('show')) {
            myDropdown14.classList.remove('show');
        }

        var myDropdown15 = document.getElementById("liquid-fan-list");
        if (myDropdown15.classList.contains('show')) {
            myDropdown15.classList.remove('show');
        }

        var myDropdown16 = document.getElementById("fan-list");
        if (myDropdown16.classList.contains('show')) {
            myDropdown16.classList.remove('show');
        }

        var myDropdown17 = document.getElementById("fan-number-list");
        if (myDropdown17.classList.contains('show')) {
            myDropdown17.classList.remove('show');
        }

    }
}

function getSockets(title) {
    $.get('/power/socket/' + title).then(dj_res => {
        $('#cpu-brand-text').text(title);
        var res = JSON.parse(dj_res);
        var text = "";
        for (let i = 0; i < res.length; i++) {
            text += `<li onclick="getCpus('${res[i]}')" class="dropdown__options__cell"><input class="checkbox" type="radio"
                                                                                           id="" value="${res[i]}"
                                                                                           name=""><label
                                                        class="checked__option" for="cpu-Intel"><p>${res[i]}</p></label>
                                                    </li>`;
        }
        $('#cpu-sockets').html(text);
    })
}

function getCpus(socket) {
    $.get('/power/cpus/' + socket).then(dj_res => {
        $('#cpu-socket-text').text(socket);
        var res = JSON.parse(dj_res);
        var text = "";
        for (let i = 0; i < res.length; i++) {
            text += `<li onclick="selectCpu('${ res[i].title }', '${ res[i].power }')" class="dropdown__options__cell"><input class="checkbox" type="radio"
                                                                                        id="" value="${res[i].title}"
                                                                                           name=""><label
                                                        class="checked__option" for="cpu-Intel"><p>${res[i].title}</p></label>
                                                    </li>`;
        }
        $('#cpu-list').html(text);
    })
}

function selectCpu(title, power){
    $('#cpu-btn-text').text(title);
}

function selectMainBoard(title, power){
    $('#main-board-btn-text').text(title);
}

function getGpuSeries(title, id){
    $('#gpu-brand-btn-text').text(title);
    $.get('/power/gpu-series/' + id).then(dj_res =>{
        var text = "";
        var res = dj_res.objects;
        for (let i = 0; i < res.length; i++) {
            text += `<li onclick="getGpus('${res[i].title}', ${res[i].id})" class="dropdown__options__cell"><input class="checkbox" type="radio"
                                                                     id="" value="${res[i].title}"
                                                                     name=""><label
                                                                     class="checked__option"
                                                                     for="cpu-Intel"><p>${res[i].title}</p></label>
                                                                      </li>`;
        }
        $('#gpu-series-list').html(text);
    })
}


function getGpus(title, id){
    $('#gpu-series-btn-text').text(title);
    $.get('/power/gpus/' + id).then(dj_res =>{
        var text = "";
        var res = dj_res.objects;
        for (let i = 0; i < res.length; i++) {
            text += `<li onclick="selectGpu('${res[i].title}', ${res[i].power})" class="dropdown__options__cell"><input class="checkbox" type="radio"
                                                                     id="" value="${res[i].title}"
                                                                     name=""><label
                                                                     class="checked__option"
                                                                     for="cpu-Intel"><p>${res[i].title}</p></label>
                                                                      </li>`;
        }
        $('#gpu-model-list').html(text);
    })
}

function selectGpu(title, power){
    $('#gpu-model-btn-text').text(title);
}

function selectRam(title, power){
    $('#ram-btn-text').text(title);
}

function selectSSD(title, power){
    $('#ssd-btn-text').text(title);
}

function selectHDD(title, power){
    $('#hdd-btn-text').text(title);
}

function selectOpticalDrive(title, power){
    $('#optical-drive-btn-text').text(title);
}

function selectLiquidFan(title, power){
    $('#liquid-fan-btn-text').text(title);
}

function selectFan(title, power){
    $('#fan-btn-text').text(title);
}