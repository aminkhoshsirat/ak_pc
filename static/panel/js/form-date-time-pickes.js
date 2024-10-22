$(function() {
    "use strict";

    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: true
    }),
        $('.timepicker').pickatime()



    $('#date-time').bootstrapMaterialDatePicker({
        format: 'YYYY-MM-DD HH:mm',
    });
    $('#date').bootstrapMaterialDatePicker({
        time: false,
    });
    $('#time').bootstrapMaterialDatePicker({
        date: false,
        format: 'HH:mm',

    });
    // $("#mydate").persianDatepicker({
    //     altField: '#mydate',
    //     altFormat: "YYYY/MM/DD",
    //     observer: true,
    //     format: 'YYYY/MM/DD',
    //     initialValue: false,
    //     initialValueType: 'persian',
    //     autoClose: true,
    //     maxDate: 'today',
    // });



});