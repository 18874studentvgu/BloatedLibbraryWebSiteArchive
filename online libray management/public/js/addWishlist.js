$('#wishlist').submit(function(e){
    //document.querySelector('#wishListButton').value = 'added';
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

 $('#wishlist2').submit(function(e){
    //document.querySelector('#wishListButton').value = 'added';
    var formData = $('#wishlist2').serialize();
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