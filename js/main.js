/* ************************************************************************** */
/* UI Routing ******************************************************************* */
/* ************************************************************************** */

angular.module('appRoutes', ['ui.router'])
.config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url:"/",
    templateUrl:"./partials/home.html",
  })
  .state('portfolio', {
    url:"/portfolio",
    templateUrl: "partials/portfolio.html",
  })
  .state('blog', {
    url:"/blog",
    templateUrl: "partials/blog.html",
  })
  .state('contact', {
    url:"/contact",
    templateUrl: "partials/contact.html",
  })
  $urlRouterProvider.otherwise('/')
}
