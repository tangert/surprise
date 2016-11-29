 $(function () {
     $('#first-btn').hide();
     $('#play-btn').hide();
     $('#confetti-btn').hide();
     
     $('#second-part').hide();
     $('#third-part').hide();
 });

$(function(){
    $("#typed").typed({
        stringsElement: $('#first-part'),
        
        callback: function() {
            $('#first-btn').fadeIn();
        },
    });
    
    $('#first-btn').click(function() {
        
        $('#first-btn').hide();
        
        $("#typed").typed({
        stringsElement: $('#second-part'),
            callback: function() {
            $('#play-btn').fadeIn();
            },
        });
        
    });
    
    var song = "tom-sawyer.mp3";
    $('#play-btn').click(function() { 
        new Audio(song).play();
        
        $('#play-btn').hide();
        
        $("#typed").typed({
        stringsElement: $('#third-part'),
            callback: function() {
                confetti();
            },
        });
    });

});