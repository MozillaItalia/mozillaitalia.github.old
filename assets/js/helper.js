/**
 * Created by predo1 on 17/11/15.
 */
var Helper = (function(){

    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return{
        isValid : function(el){
            return el != null && el != undefined;
        },
        monthName : function(index){
            return months[index];
        }
    }
})();