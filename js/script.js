var dropdownLabels = $( '.dropdown-label' ),
    dropdownLists = $('.dropdown-list'),
    documentHTML = $(''),
    clicked = false;

// documentHTML.click( function () {
//   if ( clicked == false ) {
//     dropdownLists.removeClass( 'active' );
//   } else {
//     clicked = false;
//   }
// });

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

// dropdownLabels.mouseenter( function () {
//   var nextElem = $( this ).next();
//   nextElem.toggleClass( 'active' );
// });
//
// dropdownLabels.mouseleave( function () {
//   var nextElem = $( this ).next();
//   if ( clicked == false ) {
//     nextElem.toggleClass( 'active' );
//   }
// });
