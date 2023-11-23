use("b2_3pm");
// evaluation operators

// ?$regex
// db.movies.find({name:{$regex:"dome", $options:"i"}})

// db.movies.find({summary:{$regex:"Revenge",$options:"i"}})

// ?$expr

db.sales.find({ $expr: { $gt: ["$budget", 150] } });
