
$('#review').submit(function(e){
   
    e.preventDefault();
    $.ajax({
        url: "/users/review",
        type: 'post',
        data : $('#review').serialize(),
        success: function(respond){
            alert(respond);
            console.log("hi")
        }
    });
    return false;
}); 