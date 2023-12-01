use("b2_3pm");

// db.friends.updateOne({firstName:"Nikita"},{
//     $set:{
//         scores:[85,95,75]
//     }
// })

// db.friends.updateOne({},{
//     $rename:{
//         firstName:"name"
//     }
// })

// ?$push => appends value to array
// db.friends.updateOne({name:"Nikita"},{
//     $push:{
//         scores:65
//     }
// })

// ? $push with $each to add multiple values to array
// db.friends.updateOne({name:"Nikita"},{
//     $push:{
//         scores:{$each:[45,55,35,25,65,85,95]}
//     }
// })

// ?$pop => removes first(-1) or last item(1) from array
// db.friends.updateOne({name:"Nikita"},{
//     $pop:{
//         scores:1
//     }
// })

// db.friends.updateOne({name:"Nikita"},{
//     $pop:{
//         scores:-1
//     }
// })

// ? $pull => removes item from array based on condition
// ?and also removes specified value

// db.friends.updateOne({name:"Nikita"},{
//     $pull:{
//         scores:{$lt:70}
//     }
// })

// db.friends.updateOne({name:"Nikita"},{
//     $pull:{
//         scores:45
//     }
// })

//? $pullAll => removes multiple values (no condition can be applied)

// db.friends.updateOne({name:"Nikita"},{
//     $pullAll:{
//         scores:[75,25,35]
//     }
// })

// db.friends.updateOne({name:"Nikita"},{
//     $set:{
//         scores:[]
//     }
// })

//? $addToSet => uniqueness of array

// db.friends.updateOne({
//     name:"Nikita"
// },
// {
//     $addToSet:{
//         scores:{$each:[10,20]}
//     }
// })

// ?$
// db.friends.updateOne({name:"Nikita",scores:45},{
//     $set:{
//         "scores.$":46
//     }

// })

// db.friends.updateOne({name:"Nikita",hobbies:"Hiking"},{
// $set:{
//     "hobbies.$":"Trekking"
// }
// })

// db.friends.updateOne({name:"Nikita","sportData.title":"Basketball"},{
//     $set:{
//         "sportData.$.title":"Badminton"
//     }
// })

// db.friends.updateOne({
//     name:"Nikita",
//     "sportData.title":"Football"
// },
// {
//     $inc:{
//         "sportData.$.frequency":5
//     }

// })

// db.friends.updateOne({firstName:"Dipesh","sportData.title":"Tennis"},{
//     $set:{
//         "sportData.$.title":"Long-Tennis",
//         "sportData.$.frequency":5
//     }
// })

// ?$[]=>
// Acts as a placeholder to update all elements in
//  an array for the documents that match the query condition.

// db.friends.updateOne({firstName:"Dipesh"},{
//     $set:{
//         "hobbies.$[]":"Cricket"
//     }
// })

// db.friends.updateOne({
//     firstName:"Dipesh"
// },{

//     $set:{
//        "sportData.$[].frequency":7
//     }
// })

//? $[element]
// db.friends.updateOne({name:"Nikita"},{
//     $set:{
//         "scores.$[element]":100
//     }
// },
// {
//     arrayFilters:[{element:{$lt:50}}]
// })

// db.friends.updateOne({firstName:"Dipesh","sportData.title":"Football"},{
//     $set:{
//         "sportData.$.title":"Cricket",
//         "sportData.$.frequency":10
//     }
// })

// db.friends.updateOne({name:"Nikita",hobbies:"Trekking"},{
//     $set:{
//         "hobbies.$":"Hiking"
//     }
// })

// db.friends.updateOne(
//   { name: "Nikita" },
//   {
//     $inc: {
//       "scores.$[element]": -10,
//     },
//   },
//   {
//     arrayFilters: [{ element: 100 }],
//   }
// );

// db.friends.updateOne({
//     name:"Nikita"
// },{
//     $set:{
//         "scores.$[]":30
//     }
// })

// ? push values to starting of array
// db.friends.updateOne(
//   { name: "Nikita" },
//   {
//     $push: {
//       hobbies: {
//         $each: ["PubG"],
//         $position: 0,
//       },
//     },
//   }
// );

db.friends.find();
