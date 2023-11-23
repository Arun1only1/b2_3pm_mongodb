use("b2_3pm");

// ?array operators
// ?$all
// ?$elemMatch
// ?$size

// ?$all => equivalent to using $and
// db.friends.find({$and:[{hobbies:"Hiking"},{hobbies:"Books"}]})

// db.friends.find({hobbies:{$all:["Hiking","Books"]}})

// ?$elemMatch
//? kind of and...
// ? all conditions should satisfy at least one element in array

// db.scores.find()
// 81,82,83,84
// db.scores.find({$and:[{results:{$gt:80}},{results:{$lt:85}}]})

// db.scores.find({results:{$elemMatch:{$gt:80,$lt:85}}})

// db.friends.find({
//     "sportData.title":"Football",
//     "sportData.frequency":{$gt:5}

// })

// db.friends.find({
//     sportData:{$elemMatch:{title:"Football",frequency:{$gte:5}}}
// })

// ?$size
// db.friends.find({hobbies:{$size:2}})
