$(document).ready(function() {

    var e = $.Deferred(),
        n = setInterval(function() {
            $("div.form-group.section-fieldtype").length && (e.resolve(), clearInterval(n))
        }, 1e3);

    e.done(function() {

        console.log(SectionsUI);

        switch(SectionsUI) {
            case 'accordion':
                if ($(".publish-fields").length) {
                    $(".form-group.section-fieldtype").addClass("section-header");

                    $(".section-header").each(function() {
                        $(this).nextUntil(".section-header").wrapAll('<div class="accordion-flex" />')
                    });

                    $(".accordion-flex").each(function() {
                        $(this).wrap('<div class="accordion-content" />')
                    });

                    $(".accordion-content").first().addClass("first");

                    $(".section-header").click(function() {
                        $(this).next(".accordion-content").slideToggle(300),
                        $(".accordion-content").not($(this).next()).slideUp(300)
                    });
                }

                break;

            case 'tabs':

                if ($(".publish-fields").length) {
                    
                    // Label section header
                    $(".form-group.section-fieldtype").addClass("section-header");

                    $(".section-header").each(function() {
                        $(this).nextUntil(".section-header").wrapAll('<div class="tab-pane fade" />')
                    });

                    $(".tab-pane").each(function() {
                        $(this).find('.form-group').wrapAll('<div class="tab-flex" />')
                    });

                    // Wrap it with ul tag to form tabs nav
                    $(".section-header").wrapAll('<ul id="section-tabs" class="nav nav-tabs" role="tablist" />')

                    // Replace div with li
                    $(".section-header").each(function() {
                        $(this).replaceWith($('<li role="presentation">' + this.innerHTML + '</li>'));
                    });

                    // Replace labels with href
                    $(".nav-tabs li > div").each(function(index, element) {
                        $(this).replaceWith($('<a href="#panel' + index + '" role="tab" data-toggle="tab">' + this.innerHTML + '</a>'));
                    });

                    // Open first tab on load
                    $(".nav-tabs li").first().addClass("first active");

                    // Add attributes
                    $(".tab-pane").each(function(index, element){
                        $(this).attr({
                            'id': 'panel' + index,
                            'role': 'tabpanel',
                        });
                    });

                    var tabContainer = $('<div>', {'class': 'tab-content'});
                    var panes = $(".tab-pane");

                    panes.sort(function(a,b){
                        var an = a.getAttribute('id'),
                            bn = b.getAttribute('id');

                        if(an > bn) {
                            return 1;
                        }

                        if(an < bn) {
                            return -1;
                        }

                        return 0;

                    });

                    // Resort tab panes
                    $(".publish-fields").append(tabContainer);
                    panes.detach().appendTo(tabContainer);

                    // Open first tab on load
                    $(".tab-content .tab-pane").first().addClass("first active").removeClass('fade');

                    // Add attributes
                    $(".nav-tabs li a").each(function(index, element){
                        $(this).find('small').detach().prependTo('#panel' + index);
                    });

                }

                break;

        }
        
        $('#section-tabs').tab();       
    })
});
