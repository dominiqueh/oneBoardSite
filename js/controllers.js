(function() {
  angular.module('artControllers',[])
  .controller('artCtrl', artController)

  function artController(){
    var ac = this
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
        title : 'meh',
        image : '../image/blackwhite/_MG_7396.jpg',
        category : 'travel'
      },
      {
        title : 'meh',
        image : '../image/blackwhite/_MG_7396.jpg',
        category : 'travel'
      },
      {
        title : 'meh',
        image : '../image/blackwhite/_MG_7396.jpg',
        category : 'travel'
      },
      {
        title : 'meh',
        image : '../image/blackwhite/_MG_7396.jpg',
        category : 'travel'
      },
      {
        title : 'meh',
        image : '../image/blackwhite/_MG_7396.jpg',
        category : 'travel'
      },
    ]
    // ac.sortArtCollection = sortArtCollection
    // ac.sortArtCollection()
    // function sortArtCollection(){
    // }
    function artWork(title,image,category){
      this.artTitle     = title
      this.artImage     = image
      this.artCategory  = category
    }





  }
}())
