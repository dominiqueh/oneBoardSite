(function() {

  angular.module('photo', [])
  .controller ("artCtrl", artCtrl)

  /* ************************************************************************** */
  /* Image Upload Form Control ******************************************************************* */
  /* ************************************************************************** */


  /* ************************************************************************** */
  /* Hard Coded Images ******************************************************************* */
  /* ************************************************************************** */

  function artCtrl ($scope) {
    $scope.tempPhoto = {}

    $scope.photos = [
      {
        title : 'Stairway to Heaven',
        image : '../image/blackwhite/stairwaytoheaven.jpg',
        category : 'travel',
      },
      {
        title : 'Rita',
        image : '../image/color/RitaLumbersexual.jpg',
        category : 'portrait',
      },
      {
        title : 'Doorception',
        image : '../image/blackwhite/doorway.jpg',
        category : 'travel',
      },
      {
        title : 'Help',
        image : '../image/blackwhite/help.jpg',
        category : 'portrait',
      },
      {
        title : 'Wino',
        image : '../image/blackwhite/wino.jpg',
        category : 'portrait',
      },
      {
        title : 'Crossed Arms',
        image : '../image/blackwhite/CrossedArms.jpg',
        category : 'portrait',
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
      {
        title : 'Lost Boys',
        image : '../image/blackwhite/LostBoys.jpg',
        category : 'travel',
      },
      {
        title : 'Walker',
        image : '../image/blackwhite/walkerIMG_4955.jpg',
        category : 'travel',
      },
      {
      title : 'Manny',
      image : '../image/color/Manny.jpg',
      category : 'portrait',
    },
    {
      title : 'Rita Tunnel',
      image : '../image/blackwhite/IMG_3200.jpg',
      category : 'travel',
    }


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

  $scope.addPhoto = function (){
    console.log("addingPhoto", $scope.tempPhoto)
    $scope.photos.push($scope.tempPhoto)
    $scope.tempPhoto = {}
  }

}


}());
