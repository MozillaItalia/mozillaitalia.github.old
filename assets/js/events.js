/**
 * Created by predo1 on 08/11/15.
 */

/*
 * Events Page
 */
window.onload = function(){
    getItalianEvents();
};

function getItalianEvents(){
    config = {
        country : "italy",
        offset  : 0,
        limit   : 10
    };
    API.getEvents(config).done(function(success){
        events = success.objects;
        html = "";
        events.forEach(function(event){
            html += '<li>' + event.description + '</li>';
        });
        $("#events").html(html);
    }).fail(function(error){
        console.log(error);
    });
}