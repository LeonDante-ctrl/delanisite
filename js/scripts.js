$(function () {
    let first = $('#first');
    let secondPopup = $('#secondPopup');
    let prop = $('#prop');
    let pile = $('#pile');
    let popup = $('#popup');
    let protext = $('#protext');

    $(first).hide();
    $(secondPopup).hide();
    $(prop).hide();

    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $(first).show(500);
        $(pile).animate({fontWeight:'bolder',fontSize:'30px'})

    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(secondPopup).show(500);
        $(popup).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(prop).show(500);
        $(pro).animate({fontWeight:'bolder',fontSize:'30px'})
    });


    $(first, pile).on('click', function () {
        $(desp).hide(500);
        $(pile).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(secondPopup, popup).on('click', function () {
        $(secondPopup).hide(500);
        $(devtext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(prop, protext).on('click', function () {
        $(prop).hide(500);
        $(pro).animate({fontWeight:'normal',fontSize:'16px'})
    })


    $('.dep').hover(function(){
        $('.deptex',this).slideToggle('slow');
     }, function(){
        $('.deptex',this).slideToggle('slow');
     });

        $("form#form").on('submit',function(event){
            event.preventDefault();
            let name = $("input#name").val();
            let email = $("input#email").val();
            let message = $("textarea#message").val();

            if ($("input#name").val() && $("input#email").val()){
                alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly...cheers");
            }
            else {
                alert("Please provide your correct name and email!");
            }

        });



});
