$("#login").click(function(){
    var user=$("#user").val();
    var pass=$("#pass").val();
    alert(user);
    alert(pass);
    $.post("/login",{user:user,pass:pass},function(data){

    })
})

$("#signup").click(function(){
    alert("signup");
})

$("#search_b").click(function(){
    var search_i=$("#search_i").val();
    alert(search_i);
})

$("#footer_button").click(function(){
    var firstname=$("#firstname").val();
    var lastname=$("#lastname").val();
    alert(firstname);
    alert(lastname);
})
$("#Menu_starter").click(function(){
    alert("setting menu...|for the first time it takes several minutes...")
    
})