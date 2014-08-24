/**
 * Created by pi on 7/1/14.
 */
describe('LoggedUser',function(){
//    beforeEach(module('access'));
    describe('isAdmin',function(){
        it('should return false if the roles array does not have eny team_leader entry', inject(function(loggedUserSvc){
            var user = new loggedUserSvc();
            user.roles = ['not team_leader'];
            expect(user.isAdmin()).to.be.falsey;
        }) )
        it('should return true if the roles have team_leader entry',inject(function(loggedUserSvc){
            var user = new loggedUserSvc();
            user.roles = ['team_leader'];
            expect(user.isAdmin()).to.be.true;
        }))
    })
})