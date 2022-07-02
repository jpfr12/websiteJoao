function clickIn(){
    var element = document.getElementById("hide");
    console.log("first: " + element.style.display + "\n");
    if(element.style.display === "none" || element.style.display === ""){
        element.style.display = "inline";
    }
    else{
        element.style.display = "none";
    }
    console.log("after: " + element.style.display + "\n");
}

function update(new_active){
    $('li').removeClass('active');
    $('.active').fadeOut();
    $('.active').removeClass('active');
    $('#' + new_active).addClass('active');
    $('.'+ new_active).addClass('active');
    $('.' + new_active).fadeIn();
}