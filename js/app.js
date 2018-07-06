var myApp = angular.module('app', ['ui.router']);

myApp.config(function ($stateProvider,  $locationProvider) {
  $stateProvider
    .state(
      {
        name: 'home',
        url: '/',
        templateUrl: 'views/home.html'
      }
    )
    .state(
      {
        name: 'about',
        url: '/about',
        templateUrl: 'views/about.html'
      }
    )
    .state(
      {
        name: 'blog',
        url: '/blog',
        templateUrl: 'views/blog.html'
      }
    )
    .state(
      {
        name: 'contact',
        url: '/contact',
        templateUrl: 'views/contact.html'
      }
    );

    $locationProvider.html5Mode(true);
});

// Widget directives
myApp.directive('latestPosts', function(){
  return {
    restrict: 'E',
    scope: false,
    templateUrl: 'partials/latest.html',
    replace: true
  }
});

myApp.directive('socialLinks', function(){
  return {
    restrict: 'E',
    scope: false,
    templateUrl: 'partials/social.html',
    replace: true
  }
});

myApp.directive('aboutMe', function(){
  return {
    restrict: 'E',
    scope: false,
    templateUrl: 'partials/about.html',
    replace: true
  }
});