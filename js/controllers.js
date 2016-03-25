(function() {

  angular.module('photo', [])
  .controller ("artCtrl", artCtrl)

  /* ************************************************************************** */
  /* Hard Coded Images ******************************************************************* */
  /* ************************************************************************** */

  function artCtrl ($scope) {
    console.log("test");
    $scope.photos = [
      {
        title : 'Stairway to Heaven',
        image : '../image/blackwhite/stairwaytoheaven.jpg',
        category : 'travel',
      },
      {
        title : 'Doorception',
        image : '../image/blackwhite/doorway.jpg',
        category : 'travel',
      },
      {
        title : 'Wino',
        image : '../image/blackwhite/wino.jpg',
        category : 'portrait',
      },
      {
        title : 'Lost Boys',
        image : '../image/blackwhite/LostBoys.jpg',
        category : 'travel',
      },
      {
        title : 'Help',
        image : '../image/blackwhite/help.jpg',
        category : 'portrait',
      },
      {
        title : 'Lisbon Dogs',
        image : '../image/blackwhite/LisbonDogs.jpg',
        category : 'travel',
      },
      {
        title : 'Crossed Arms',
        image : '../image/blackwhite/CrossedArms.jpg',
        category : 'portait',
      },
      {
        title : 'Confused Party',
        image : '../image/color/confusedparty.jpg',
        category : 'event',
      },
      {
        title : 'Great Laugh',
        image : '../image/color/laughter.jpg',
        category : 'event',
      },
    ]

    /* ************************************************************************** */
    /* Tricksty Stuff to Get Filter To Work ******************************************************************* */
    /* ************************************************************************** */

  $scope.photoIncludes = ['travel','event','portrait']

  $scope.includeArt = function(photo) {
    var i = $.inArray(photo, $scope.photoIncludes);
    if (i > -1) {
      $scope.photoIncludes.splice(i, 1);
    } else {
      $scope.photoIncludes.push(photo);
    }
  }

  /* ************************************************************************** */
  /* Portfolio Filter ******************************************************************* */
  /* ************************************************************************** */

  $scope.photoFilter = function (photo) {
    if ($scope.photoIncludes.length > 0) {
      if ($.inArray(photo.category, $scope.photoIncludes) < 0){
      return;
    }
    return photo;
  }
}
}


}());
