$('#wishlist').submit(function(e){
   
    var formData = $('#wishlist').serialize();
    e.preventDefault();
     $.ajax({
         url: "/users/wishlist",
         type: 'post',
         data : formData,
         success: function(respond){
             alert(respond.text);
             console.log("hi")
         }
     });
     return false;
 }); 