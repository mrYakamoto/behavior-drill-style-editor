// Shorthand for document ready



$( "#style_editor" ).submit(function(event){
  event.preventDefault()
  var $selector = $( "#selector" ).val();
  var $property = $( "#property" ).val();
  var $value = $( "#value" ).val();

  $( $selector ).css( $property, $value);
});


