/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var cntLoveTriangles = 0;
      
  var firstLover;
  var nextLover;
  
  for (var i=0; i<preferences.length; i++) {
    firstLover = preferences[i-1];
    nextLover = firstLover-1;
    
    //alert(firstLover+'-'+nextLover+ " (массив:" + preferences + ")" );
    
    if (firstLover != preferences[nextLover]) {
      if (i == (preferences[preferences[nextLover]-1])) {
        //alert('+');
        cntLoveTriangles++;
        preferences[i-1] = '';
      }
    }
  }
  return cntLoveTriangles;
};
 