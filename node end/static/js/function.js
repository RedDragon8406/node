$("#login").click(function(){
    var user=$("#user").val();
    var pass=$("#pass").val();
    $.post("/login_b",{user:user,pass:pass},function(data){
        alert(data);
    });
})

$("#signup_b").click(function(res){
    var user=$("#username").val();
    var pass=$("#password").val();
    var cpass=$("#c_password").val();
    $.post("/signup_b",{username:user,password:pass,c_password:cpass},function(data){
        alert(data);
    });
})

$("#search_b").click(function(){
    var search_i=$("#search_i").val();
    alert(search_i);
})

$("#footer_button").click(function(){
    var firstname=$("#firstname").val();
    var lastname=$("#lastname").val();
    var number=$("#number").val();
    })