var dropdownLabels = $( '.dropdown-label' ),
    dropdownLists = $('.dropdown-list')
    documentHTML = $('');

// documentHTML.click( function () {
//   if ( dropdownLabels.hasClass( 'active' ) == true ) {
//     dropdownLists.removeClass( 'active' );
//   }
// });

dropdownLabels.click( function () {
  var nextElem = $( this ).next();
  nextElem.toggleClass( 'active' );
});
