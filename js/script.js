var dropdownContainer = $(".dropdown-container")
    dropdownLabels = $( '.dropdown-label' ),
    dropdownLists = $('.dropdown-list'),
    headerContainer = $('.header__container');

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
  $(this).children('.dropdown-list').addClass('active');
});

dropdownContainer.mouseleave( function () {
  dropdownLists.each( function () {
    if ( $( this ).hasClass( 'clicked' ) ) {
      $( this ).addClass('active');
    }
  });
    if ( $(this).children('.dropdown-list').hasClass( 'clicked' ) == false ) {
      $(this).children('.dropdown-list').removeClass('active');
    }
});

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height > 0) {
        headerContainer.addClass('box-shadow');
    } else if ( height == 0 ) {
      headerContainer.removeClass('box-shadow');
    }
});
