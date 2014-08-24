/**
 * Created by pi on 8/12/14.
 */
var mongoose = require('mongoose')
    , BaseSchema = require('./baseSchema')

var teamBoSchema = new BaseSchema({
    name : {type:String ,required:'{PATH} is required' },
    technology:{type:String, required:'{PATH} is required'},
    company:{type:String, required:'{PATH} is required'},
    tags: [String]
})

var TeamDao = mongoose.model('TeamBo',teamBoSchema);
//module.exports = TeamDao;

function createDefaultTeams(){
    TeamDao.find({}).exec(function(err,collection){
        if(collection.length === 0){
            TeamDao.create({name: "Infra java", technology:"java", company:"Bank Hapoalim", tags: ['Java']});
            TeamDao.create({name: "Infra .Net", technology:".Net", company:"Bank Hapoalim", tags: ['C#']});
            TeamDao.create({name: "Mihshub", technology:"Cobol", company:"Bank Leumi", tags: ['Cobol']});
            TeamDao.create({name: "Coni", technology:"java", company:"Matrix", tags: ['java']});
            TeamDao.create({name: "Jee", technology:"java", company:"Matrix", tags: ['Java']});
            TeamDao.create({name: "Loshadi", technology:".Net", company:"SqLink", tags: ['C#']});
            TeamDao.create({name: "Infra java", technology:"java", company:"Diskont", tags: ['Java']});

        }
    })
}
exports.TeamDao = TeamDao;
exports.createDefaultTeams = createDefaultTeams;
