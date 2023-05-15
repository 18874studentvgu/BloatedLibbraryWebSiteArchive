

   
    $('#wishlist0').submit(function(e){
        
        var formData1= $('#wishlist0').serialize();
        console.log(formData1)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData1,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("0", formData1);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("0",function(button){
        var html = '';
        html += '<button type ="button" class="home-button button" id="idkanymore">added</button>'
        $('#wishlist0').replaceWith(html);
    }) 



    $('#wishlist1').submit(function(e){
        
        var formData2= $('#wishlist1').serialize();
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData2,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("1", formData2);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("1",function(button){
        var html = '';
        html += '<button type ="button" class="home-button button" id="idkanymore">added</button>'
        $('#wishlist1').replaceWith(html);
    }) 

    $('#wishlist2').submit(function(e){
        
        var formData3= $('#wishlist2').serialize();

        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData3,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("2", formData3);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("2",function(button){
        var html = '';
        html += '<button type ="button" class="home-button button" id="idkanymore">added</button>'
        $('#wishlist2').replaceWith(html);
    }) 

    $('#wishlist3').submit(function(e){
        
        var formData4= $('#wishlist3').serialize();

        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData4,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("3", formData4);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("3",function(button){
        var html = '';
        html += '<button type ="button" class="home-button button" id="idkanymore">added</button>'
        $('#wishlist3').replaceWith(html);
    }) 

    $('#wishlist4').submit(function(e){
        
        formData5= $('#wishlist4').serialize();
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData5,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("4", formData5);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("4",function(button){
        var html = '';
        html += '<button type ="button" class="home-button button" id="idkanymore">added</button>'
        $('#wishlist4').replaceWith(html);
    }) 

    $('#wishlist5').submit(function(e){
        
        formData6= $('#wishlist5').serialize();
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData6,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("5", formData6);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("5",function(button){
        var html = '';
        html += '<button type ="button" class="home-button button" id="idkanymore">added</button>'
        $('#wishlist5').replaceWith(html);
    }) 

    $('#wishlist6').submit(function(e){
        
        formData7= $('#wishlist6').serialize();
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData7,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("6", formData7);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("6",function(button){
        var html = '';
        html += '<button type ="button" class="home-button button" id="idkanymore">added</button>'
        $('wishlist6').replaceWith(html);
    }) 

    $('#wishlist7').submit(function(e){
        
        formData8= $('#wishlist7').serialize();
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData8,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("7", formData8);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("7",function(button){
        var html = '';
        html += '<button type ="button" class="home-button button" id="idkanymore">added</button>'
        $('#wishlist7').replaceWith(html);
    }) 

    $('#wishlist8').submit(function(e){
        
        formData9= $('#wishlist8').serialize();
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData9,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("8", formData9);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("8",function(button){
        var html = '';
        html += '<button type ="button" class="home-button button" id="idkanymore">added</button>'
        $('#wishlist8').replaceWith(html);
    }) 

    $('#wishlist9').submit(function(e){
        
        formData10= $('#wishlist9').serialize();
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData10,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("9", formData10);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("9",function(button){
        var html = '';
        html += '<button type ="button" class="home-button button" id="idkanymore">added</button>'
        $('#wishlist9').replaceWith(html);
    }) 

    $('#wishlistD').submit(function(e){
        
        formDatad= $('#wishlistD').serialize();
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formDatad,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("new_button", formDatad);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("new_button",function(button){
        var html = '';
        html += ' <button id="add to cart" type="submit" class="home-add-to-cart-button1 button"> ADDED </button>'
        $('#wishlistD').replaceWith(html);
    }) 
