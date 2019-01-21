$(document).ready(function() {
  $(".inputnumber").keyup(function() {
    var grandTotal = 0;
    $("input[name='inputnumber[]']").each(function(index) {
      var price = $("input[name='inputnumber[]']").eq(index).val();
      var output = parseInt(price);

      if (!isNaN(output)) {
        $("input[name='output[]']").eq(index).val(output);
        grandTotal = parseInt(grandTotal) + parseInt(output);
        $('#totalquantity').val(grandTotal);
      }
    });
  });
});