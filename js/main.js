angular
  .module('artApp',['ui.router']);
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('portfolio', {
        url:"/portfolio.html",
        templateUrl: "portfolio.html",
      });
  }
