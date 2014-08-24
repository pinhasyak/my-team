/**
 * Created by pi on 8/21/14.
 */

angular.module('teams').factory('cashedShowTeamsSvc',function(showTeamsSvc){

    var teamList;

    return{
        query:function(){
            if(!teamList){
                teamList = showTeamsSvc.query();

            }
            return teamList;
        }
    }
});