

   
    $('#wishlist0').submit(function(e){
        
        formData= $('#wishlist0').serialize();
        console.log(formData)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("0", formData);
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
        
        formData= $('#wishlist1').serialize();
        console.log(formData)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("1", formData);
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
        
        formData= $('#wishlist2').serialize();
        console.log(formData)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("2", formData);
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
        
        formData= $('#wishlist3').serialize();
        console.log(formData)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("3", formData);
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
        
        formData= $('#wishlist4').serialize();
        console.log(formData)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("4", formData);
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
        
        formData= $('#wishlist5').serialize();
        console.log(formData)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("5", formData);
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
        
        formData= $('#wishlist6').serialize();
        console.log(formData)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("6", formData);
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
        
        formData= $('#wishlist7').serialize();
        console.log(formData)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("7", formData);
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
        
        formData= $('#wishlist8').serialize();
        console.log(formData)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("8", formData);
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
        
        formData= $('#wishlist9').serialize();
        console.log(formData)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("9", formData);
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
        
        formData= $('#wishlistD').serialize();
        console.log(formData)
        e.preventDefault();
         $.ajax({
             url: "/users/wishlist",
             type: 'post',
             data : formData,
             success: function(respond){
                 alert(respond.text);
                 socket.emit("new_button", formData);
                 console.log("hi")
             }
         });
         return false;
     }); 
     socket.on("new_button",function(button){
        var html = '';
        html += '<button type ="button" class="home-button button" id="idkanymore">added</button>'
        $('#wishlistD').replaceWith(html);
    }) 
