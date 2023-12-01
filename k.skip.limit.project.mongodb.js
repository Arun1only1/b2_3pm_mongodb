use("b2_3pm");

// let page = 2;
// let limit = 4;
// let skip = (page - 1) * limit;

// db.persons.aggregate([
//   {
//     $match: {
//       gender: { $ne: "male" },
//     },
//   },
//   {
//     $skip: skip,
//   },
//   {
//     $limit: limit,
//   },
//   {
//     $project: {
//       fullName: { $concat: ["$name.first", " ", "$name.last"] },
//       userGender: "$gender",
//       username: "$login.username",
//       currentAge: "$dob.age",
//       registrationDate: "$registered.date",
//     },
//   },
// ]);

// cursor
