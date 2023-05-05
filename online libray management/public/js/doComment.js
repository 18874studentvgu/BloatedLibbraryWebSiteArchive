var socket = io();

$('#review').submit(function(e){
   
   var formData = $('#review').serialize();
   var userName = document.getElementById('writtenBy.userName').value; 
   var userID = document.getElementById('writtenBy.userID').value; 
   var body = document.getElementById('body').value; 
   e.preventDefault();
    $.ajax({
        url: "/users/review",
        type: 'post',
        data : formData,
        success: function(respond){
            formData._id = respond._id;
            socket.emit("new_comment", formData, userName, body);
            alert(respond.text);
            console.log("hi")
        }
    });
    return false;
}); 

socket.on("new_comment",function(reviews, userName, body){

    const d = new Date();
    let text = d.toDateString();
    var html = '';
    html += '<div class="book-info-a-comment">';
    html += ' <div class="book-info-group13">';
    html += '<img alt="image56170" src="/playground_assets/image56170-e9ep-200h.png" class="book-info-image5"/>';
    html += '  <h3 class="book-info-text070">';
    html += ' <span class="book-info-text071">';
    html +=  userName ;
    html += ' -&nbsp;</span>';
    html += '<span class="book-info-text072">'; 
    html += text ;
    html += '</span>';
    html += ' </h3>';
    html += '</div>';
    html += '<div class="book-info-frame10">';
    html += '<p class="book-info-text073">';
    html += '<span>'; 
    html +=  body;
    html += '</span>';
    html += '</p>';
    html += '</div>';
    html += ' <div class="book-info-container4">';
    html += '<div class="book-info-aditional">';
    html += '<span class="book-info-text075">.detail</span>';
    html += '<span class="book-info-text076">.Reply&nbsp;</span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    $('#no').prepend(html);
})