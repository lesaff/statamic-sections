$(document).ready(function() {
    var e = $.Deferred(),
        n = setInterval(function() { 
            $("div.form-group.section-fieldtype").length && (e.resolve(), clearInterval(n)) }, 1e3);
    e.done(function() { 
        $(".publish-fields").length && ($(".form-group.section-fieldtype").addClass("section-header"), 
            $(".section-header").each(function() { 
                $(this).nextUntil(".section-header").wrapAll('<div class="accordion-flex" />') 
            }), 
            $(".accordion-flex").each(function() { 
                $(this).wrap('<div class="accordion-content" />') }), 
                $(".accordion-content").first().addClass("first"), 
                $(".section-header").click(function() { 
                    $(this).next(".accordion-content").slideToggle(300), 
                    $(".accordion-content").not($(this).next()).slideUp(300) 
                })) 
    }) 
});
