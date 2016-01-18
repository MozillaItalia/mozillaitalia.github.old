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
            categories = '';
            if(event.categories.length > 0) {
                categories = ' - <span class="event-category">';
                event.categories.forEach(function(category){
                    categories += category.name + ', ';
                });
                categories += '</span>';
            }
            html += '<li>\
                        <div class="time">\
                            <span class="day">' + date.getDate() + '</span>\
                            <span class="month">' + Helper.monthName(date.getMonth()).slice(0,3) + '</span>\
                            <span class="year">' + date.getFullYear() + '</span>\
                        </div>\
                        <div class="event-content">\
                            <h3 class="event-title"><a href=" ' + event.event_url + '">' + event.name + '</a></h3>\
                            <p class="event-description">' + event.description + '</p><br>\
                            <span class="event-location">' + event.city + '</span>\
                            ' + categories + '\
                        </div>\
                        </li>';
        });
        $(".event-list").html(html);
    }).fail(function(error){
        console.log(error);
    });
}