
$(document).ready(function () {

    // close data-site when click select control
    $(".dropdown").click(function () {
        $(this).find(".drop-data-site").slideToggle(300);

        var dropDown = $(this);
        $(document).click(function (e) {
            if (!dropDown.is(e.target) && dropDown.has(e.target).length === 0) {
                var isOpened = dropDown.find('.drop-data-site').css('display');
                if (isOpened == 'block') {
                    dropDown.find(".drop-data-site").slideUp(300);
                }
            }
        });
        // change text when select option combo box
        $(".drop-item").click(function () {
            var textSiteDropdown = $(this).parent().parent().find(".drop-text")
            var selectedOptionDropdown = $(this).find(".item-text").text()
            textSiteDropdown.text(selectedOptionDropdown)

            var dataSiteDropdown = $(this).parent().find(".drop-item")
            dataSiteDropdown.removeClass("selected")
            dataSiteDropdown.find(".checked-icon").html("")

            $(this).addClass("selected");
            $(this).find(".checked-icon").html(`<i class="fa fa-check"></i>`)
        })
        // end event
    })
    // end event


    // close modal
    $(".close, .cancle").click(function () {
        $(".modal").css("display", "none")
    })
    // end event



})

