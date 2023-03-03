function view_self_introduction(){
    $.ajax({
        url: "self-introduction.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}