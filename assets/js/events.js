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
        limit   : 0
    };
    API.getEvents(config).done(function(success){
        events = success.objects;
        html = "";
        events.reverse().forEach(function(event){
            date = new Date(event.local_start);
            html += '<li>\
                        <div class="time">\
                            <span class="day">' + date.getDay() + '</span>\
                            <span class="month">' + Helper.monthName(date.getMonth()).slice(0,3) + '</span>\
                            <span class="year">' + date.getFullYear() + '</span>\
                        </div>\
                        <div class="event-content">\
                            <h3 class="event-title">' + event.name + '</h3>\
                            <p class="event-description">' + event.description + '</p>\
                            <span class="event-location">' + event.city + '</span>\
                            <span class="event-link"><a href=" ' + event.event_url + '">Link</a></span>\
                        </div>\
                        </li>';
        });
        $(".event-list").html(html);
    }).fail(function(error){
        console.log(error);
    });
}