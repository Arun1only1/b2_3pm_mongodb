use("b2_3pm");

// ?to measure number of documents
// db.movies.find().count()

// ?operators => special symbol
// ?comparison operator

// ?$eq => name==="Bitten"

// db.movies.findOne({name:{$eq:"Bitten"}})

// db.movies.findOne({name:{$eq:"Arrow"}})

// equivalent
// db.movies.findOne({name:"The 100"})

// db.movies.find({weight:100})

// db.movies.find({status:"Ended"})

// db.movies.find({"rating.average":6.5})

//? $lt
// db.movies.find({weight:{$lt:80}})

//? $lte
// db.movies.find({weight:{$lte:50}})

// ?$gt
// db.movies.find({"rating.average":{$gt:8}})

//? $gte
// db.movies.find({id:{$gte:20}})

//? $ne

// db.movies.find({id:{$ne:1}})

// ?logical operators
//? $or, $and, $not,$nor

// ?$or
// db.movies.find({$or:[{genres:"Crime"},{runtime:30}]})

// db.movies.find({$or:[{genres:"Horror"},{genres:"Romance"}]})

// db.movies.find({genres:{$in:["Horror","Romance"]}})

// ? $in
// db.movies.find({ "rating.average": { $in: [7, 8] } });

// $nin
// db.movies.find({ "rating.average": { $nin: [7, 8] } });

// ?$and
// db.movies.find({$and:[{genres:'Crime'},{runtime:30}]})
// equivalent
// db.movies.find({genres:"Crime",runtime:30})

// db.movies.find({genres:"Action","rating.average":{$lte:7}})

// ?$not
// db.movies.find({"rating.average":{$not:{$eq:9}}})
// equivalent
// db.movies.find({"rating.average":{$ne:9}})

// ?$nor

// db.movies.find({$nor:[{runtime:30},{"rating.average":9}]})
