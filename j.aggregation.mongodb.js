use("b2_3pm");

// TODO: co-ordinate data, index
// db.movies.find();

// aggregation => powerful query tool

// pipeline stage
//? $match, $sort, $skip, $limit
// ? $project, $unwind, $lookup, $group

// $match => filters data based on provided condition
// $project: selects data, 1 is to select and 0 is to unselect
db.movies.aggregate([
  {
    $match: {
      status: "Ended",
    },
  },
  {
    $project: {
      name: 1,
      status: 1,
      genres: 1,
      imdbRating: "$rating.average",
    },
  },
  {
    $sort: {
      name: -1,
    },
  },
]);
