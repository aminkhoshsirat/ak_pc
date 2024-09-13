/*

 Version: 1.0.0
  Author: Amir Rezaie
 Website:
    Repo: https://amir-rezaie.ir
 */

(function ($) {
    "use strict";
    $.fn.Collapzion = function (options) {
        // Private Functions
        function debug(e) {
            console.log(e);
        }
        // Global Private Variables
        var _base = this;
        var _settings = $.extend({
            _pos: {
                'position': 'fixed',
                'left': '36px',
                'bottom': '45px',
                'text-align': 'center',
                'padding': '0px 8px',
                'margin-bottom': '34px',
                'display': 'flex',
                'justify-content': 'flex-end',
                'z-index': '801',
            },
            _child_attribute: [{
                'label': 'Post',
                'url': '/',
                'icon': '&#xE150;'
            }],
            _main_btn_color: '#0b8502;',
            _child_btn_color: '#0761f6;'
        }, options);

        _base.init = function () {
            _base.css(_settings._pos);
            _base.append('<a style="background-color:' + _settings._main_btn_color + '" href="javascript:void(0)" class="_col_shadow _collapz_parant _close contactFire"></a>');

            $('#' + this.attr('id') + ' a._collapz_parant').on('click', function () {
                var ths = $(this);
                _base.collapz_btn(ths, _settings._child_attribute);
            });
        };
        // toggle button
        _base.collapz_btn = function (_element, child_attribute) {
            if (_element.hasClass('_close')) {

                _element.removeClass('_close');
                _element.addClass('_open');


            } else {
                $("._child_collapzion").css({
                    'transform': 'translate3d(0, 0%, 0)'
                });
                $(this).parent().find('ul._child_collapzion').remove();
                _element.removeClass('_open');
                _element.addClass('_close');
            }
        }
        _base.clicker = function (e) {
            debug(e);
        };
        _base.init();
    }

}(jQuery));


//// end config floating contact
