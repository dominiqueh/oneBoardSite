(function() {
  angular.module('artControllers',[])
  .controller('artCtrl', artController)

  function artController(){
      var ac = this

  // <!--  =+=+=+==+=+=+==+=+=+=    Hard Coded Images in List      =+=+=+==+=+=+==+=+=+= -->
    ac.artCollection = [
      {
        title : 'Stairway to Heaven',
        image : '../image/blackwhite/stairwaytoheaven.jpg',
        category : 'travel'
      },
      {
        title : 'Doorception',
        image : '../image/blackwhite/doorway.jpg',
        category : 'travel'
      },
      {
        title : 'Wino',
        image : '../image/blackwhite/wino.jpg',
        category : 'portrait'
      },
      {
        title : 'Lost Boys',
        image : '../image/blackwhite/LostBoys.jpg',
        category : 'travel'
      },
      {
        title : 'Help',
        image : 'image/blackwhite/help.jpg',
        category : 'portrait'
      },
      {
        title : 'Lisbon Dogs',
        image : '../image/blackwhite/LisbonDogs.jpg',
        category : 'travel'
      },
      {
        title : 'Crossed Arms',
        image : '../image/blackwhite/CrossedArms.jpg',
        category : 'Portait'
      },
      {
        title : 'Confused Party',
        image : '../image/color/confusedparty.jpg',
        category : 'Event'
      },
      {
        title : 'Great Laugh',
        image : '../image/color/laughter.jpg',
        category : 'Event'
      },
    ]

  //  =+=+=+==+=+=+==+=+=+=    Constructor Function for Photos     =+=+=+==+=+=+==+=+=+=
    function artWork(title,image,category){
      this.artTitle     = title
      this.artImage     = image
      this.artCategory  = category
    }

  }
}())
