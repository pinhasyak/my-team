/**
 * Created by pi on 8/11/14.
 */
angular.module('teams').factory('showTeamsSvc',function($resource){
    var ShowTeamsResource = $resource('/api/show_teams/:_id',{_id: "@id"}
        ,{update:{method:'PUT',isArray:false}}
    )

    return ShowTeamsResource;
})