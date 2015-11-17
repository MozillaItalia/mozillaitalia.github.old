/**
 * Created by predo1 on 08/11/15.
 */
var API = (function(){

    var configFactory = {
        limit : 10,
        offset : 0
    };

    var repsEndpoint = "https://reps.mozilla.org/api/v1/event/";

    function encodeData(data){
        return Object.keys(data).map(function(key){
            return [key,data[key]].join("=");
        }).join("&");
    }

    return{
        getEvents : function (configObject) {
            //if the config is not correct
            configObject = Helper.isValid(configObject) && typeof configObject == 'object' ? configObject : configFactory;
            //compose the url
            urlParams = encodeData(configObject);
            url = urlParams != "" ? repsEndpoint + "?" + urlParams : repsEndpoint;
            //build the promise
            return $.ajax({
                url : url,
                dataType : "jsonp"
            });
        },
        italianApps : function(){
            //TODO : get apps JSON
        }
    }
})();