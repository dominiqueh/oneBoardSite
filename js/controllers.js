(function() {
  angular.module('artControllers',[])
  .controller('artCtrl', artController)



  function artController(){
    // this is now ac to follow scope of artController
    var ac = this

    // hard-coded images array
    ac.artCollection = [
      {
        title : 'Stairway to Heaven',
        image : '../image/blackwhite/stairwaytoheaven.jpg',
        category : 'travel',
      },
      // {
      //   title : 'Doorception',
      //   image : '../image/blackwhite/doorway.jpg',
      //   category : 'travel',
      // },
      {
        title : 'Wino',
        image : '../image/blackwhite/wino.jpg',
        category : 'portrait',
      },
      // {
      //   title : 'Lost Boys',
      //   image : '../image/blackwhite/LostBoys.jpg',
      //   category : 'travel',
      // },
      // {
      //   title : 'Help',
      //   image : '../image/blackwhite/help.jpg',
      //   category : 'portrait',
      // },
      // {
      //   title : 'Lisbon Dogs',
      //   image : '../image/blackwhite/LisbonDogs.jpg',
      //   category : 'travel',
      // },
      // {
      //   title : 'Crossed Arms',
      //   image : '../image/blackwhite/CrossedArms.jpg',
      //   category : 'portait',
      // },
      {
        title : 'Confused Party',
        image : '../image/color/confusedparty.jpg',
        category : 'event',
      },
      // {
      //   title : 'Great Laugh',
      //   image : '../image/color/laughter.jpg',
      //   category : 'event',
      // },
    ]


    ac.userPrefs = []

    ac.includePref = function(category){
      console.log($scope.userPrefs)
      var i = $.inArray(category, ac.userPrefs)
      if (i > -1) {
        ac.userPrefs.splice(i,1);
      } else {
        ac.userPrefs.push(category);
      }
    }

    ac.prefFilter = function(artCollection){
      if (ac.userPrefs.length>0){
        if($.inArray(artcollection.category, ac.userPrefs) < 0)
        return;
      }
      return artCollection;
    }

    // //  =+=+=+==+=+=+==+=+=+=    Constructor Function for Photos     =+=+=+==+=+=+==+=+=+=
    // function artWork(title,image,category){
    //   this.artTitle     = title
    //   this.artImage     = image
    //   this.artCategory  = category
    // }

  }
}())
