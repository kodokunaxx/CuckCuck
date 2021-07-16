
$(document).ready(function(){
    
    $(".dropdown").click(function(){
        var data_site = $(this).find('.drop-data-site');
        var expanded = data_site.hasClass('checked');
        if(expanded) {
            data_site.css('display', 'none')
            data_site.removeClass('checked')
        } else{
            data_site.css('display', 'block')
            data_site.addClass('checked')
        }
    })


    function isNullOrUndefined(par){
        return (typeof(variable) != "undefined" && variable != null)  ? false : true
    }
})

