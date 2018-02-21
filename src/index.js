/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var cntLoveTriangles = 0;
  var loverSearch = 3;  

  var firstLover;
  var nextLover;
  
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  
  var i = preferences.length;
  preferences.sort();
  
  while (i--) {
      if (preferences[i] == preferences[i-1]) {
          preferences.splice(i, 1);
      }
  }
  
  preferences.sort(compareNumeric);
  
  preferences.forEach(function(firstLover, i, preferences) {
    nextLover = preferences[i+1]-1;
    //alert(firstLover+'='+nextLover+ " (массив:" + preferences + ")" );
    
    if(firstLover == nextLover) {
      cntLoveTriangles++;
    }
  });
  
  cntLoveTriangles = Math.floor(cntLoveTriangles/loverSearch);
  
  return cntLoveTriangles;
};
 