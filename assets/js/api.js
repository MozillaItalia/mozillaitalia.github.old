/**
 * Created by predo1 on 08/11/15.
 */
var API = (function(){

    var repsEndpoint = "https://reps.mozilla.org/api/v1/event/";

    return{
        getEvents : function (configObject) {
            //base url
            var url = new URL(repsEndpoint);
            //if the config is not correct
            if (configObject != null && configObject != undefined && typeof configObject != 'object') return;
            //compose the url
            Object.keys(configObject).forEach(function(key){
                url.searchParams.append(key,configObject[key])
            });
            //build the promise
            return $.ajax({
                url : url,
                dataType : "jsonp"
            });
        },
        italianApps : function(){
            //TODO : get the
        }
    }
})();