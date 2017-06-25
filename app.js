$(".banner").on("click", function (event) {

    if ($(this).find(".text").css("display") === "none") {
        $(this).find(".text").show();
        $(this).find(".text").addClass("animated flipInX");
        $(this).find(".text").removeClass("flipOutX");
        $(this).find(".baner-article").end().css("height", "200px");
    } else {
        $(this).find(".text").removeClass("flipInX");
        $(this).find(".text").addClass("flipOutX");

        let currentElement = $(this);

        setTimeout(function () {
            currentElement.find(".text").hide();
            currentElement.find(".baner-article").end().css("height", "84px");
            console.log("get");
        }, 400);
    }
});