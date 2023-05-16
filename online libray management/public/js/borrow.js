$('#borrow').submit(function(e){
    var formData = $('#borrow').serialize();
    e.preventDefault();
     $.ajax({
         url: "/users/borrow",
         type: 'post',
         data : formData,
         success: function(respond){
             alert(respond.text);
             console.log("hi")
         }
     });
     return false;
 }); 