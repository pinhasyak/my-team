/**
 * Created by Pinhas on 7/21/2014.
 */
angular.module('common')
    .value('Toaster',toastr)
    .factory('notifierService',function(Toaster){
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