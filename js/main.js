angular
  .module('artApp', ['ui.router']);
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url:"/",
        templateUrl:"home.html",
      });
      .state('portfolio', {
        url:"/portfolio",
        templateUrl: "portfolio.html",
      });
      .state('blog', {
        url:"/blog",
        templateUrl: "blog.html",
      });
      .state('contact',{
        url:"/contact",
        templateUrl: "contact.html",
      });
      $urlRouterProvider.otherwise('/home')
  }
