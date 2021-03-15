var dropdownLabel = $('.dropdown-label');

dropdownLabel.click( function () {
  $(this).next().toggle('slow');
});
