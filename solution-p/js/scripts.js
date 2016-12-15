

// Навигация по слайдам
$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['intro', 'services', 'projects', 'clients', 'partners', 'contacts'],
    });
});

// Открытие попапов
$(function() {
    var btn = $('.popup_open');
    btn.on('click', function() {
        var popup = $('body').find('.popup'),
            popupId,
            btnPopupId = $(this).data('popup-id');
        for (var i = 0; i < popup.length; i++) {
            popupId = $(popup[i]).data('id');
            if($(popup[i]).hasClass('active')){
                $(popup[i]).removeClass('active');
            }
          if (btnPopupId == popupId) {
              $(popup[i]).addClass('active');
            }
        }
    });
    
// Закрытие попапов
    $('body').find('.popup_close').on('click', function() {
        $('body').find('.popup').removeClass('active')
    });
});
