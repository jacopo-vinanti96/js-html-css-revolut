var dropdownContainer = $(".dropdown-container")
    dropdownLabels = $( '.dropdown-label' ),
    dropdownLists = $('.dropdown-list'),
    headerContainer = $('.header__container'),
    clicked = false;

dropdownLabels.click( function () {
  var nextElem = $( this ).next();
  nextElem.addClass( 'active' );
  dropdownLists.each( function () {
    if ( $( this ).hasClass( 'clicked' ) ) {
      $( this ).removeClass('active');
      $( this ).removeClass('clicked');
    } else {
      $( this ).removeClass( 'clicked' );
    }
  });
  if ( nextElem.hasClass('active') ) {
    nextElem.toggleClass( 'clicked' );
  }
});

dropdownContainer.mouseenter( function () {
  dropdownLists.each( function () {
    if ( $( this ).hasClass( 'clicked' ) ) {
      $( this ).removeClass('active');
    }
  });
});

dropdownContainer.mouseleave( function () {
  dropdownLists.each( function () {
    if ( $( this ).hasClass( 'clicked' ) ) {
      $( this ).addClass('active');
    }
  });
});

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height > 0) {
        headerContainer.addClass('box-shadow');
    } else if ( height == 0 ) {
      headerContainer.removeClass('box-shadow');
    }
});
