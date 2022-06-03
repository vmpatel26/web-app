var path = require("path")
const fs = require("fs"); // required at the top of your module
var Promise = require('promise');

function initialize() {
  var results = JSON.parse(fs.readFileSync(path.join(__dirname, "/data/posts.json"), 'utf8'));
  var catresults = JSON.parse(fs.readFileSync(path.join(__dirname, "/data/categories.json"), 'utf8'));
  return { results, catresults }
}

var catdata = initialize().catresults
var data = initialize().results


// const getPublishedPosts = () => {  
//   var finalData = []
//   for (let i of data) {
//     if(i.published == true){
//       finalData.push(i)
//     }
//   }  
//   return finalData;
// };

const getPublishedPosts = () => {
  return new Promise(function (resolve, reject) {
    if (data != null) {
      var finalData = []
      for (let i of data) {
        if (i.published == true) {
          finalData.push(i)
        }
      }
      resolve(finalData);
    } else {
      reject("Somthing Went Wrong");
    }
  });
};

const getAllPosts = () => {
  return new Promise(function (resolve, reject) {
    if (data != null) {
      var finalData = data
      resolve(finalData);
    } else {
      reject("Somthing Went Wrong");
    }
  });

};

const getCategories = () => {
  return new Promise(function (resolve, reject) {
    if (catdata != null) {
      var finalData = catdata
      resolve(finalData);
    } else {
      reject("Somthing Went Wrong");
    }
  });
};


exports.getPublishedPosts = getPublishedPosts;
exports.getAllPosts = getAllPosts;
exports.getCategories = getCategories;
