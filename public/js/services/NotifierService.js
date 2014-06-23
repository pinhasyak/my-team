/**
 * Created by pi on 6/20/14.
*/
angular.module('NotifierService',[])
    .value('Toaster',toastr)
    .factory('Notifier',function(Toaster){
        return{
            notify:function(msg){
                Toaster.success(msg);
                console.log(msg);
            },
            notifyError:function(msg){
                Toaster.error(msg);
                console.log(msg);
            }
        }
})
