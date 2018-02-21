/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var cntLoveTriangles = 0;
      
  var firstLover;
  var secondLover;  
  
  var loverSearch = 3;
  
  for (var i = 0; i < preferences.length; i++) {
    firstLover = preferences[i];
    secondLover = preferences[firstLover-1];
    
    //console.log('i='+i+',firstLover='+firstLover+',secondLover='+secondLover);

    if (preferences[secondLover-1] == i+1) {
      cntLoveTriangles++;
    }
  }
  
  cntLoveTriangles = Math.floor(cntLoveTriangles/loverSearch);

  return cntLoveTriangles;
};

let count = getLoveTrianglesCount([2, 3, 1]);
  console.log(count); // 1
 