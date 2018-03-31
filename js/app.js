var myApp = angular.module('app', ['ui.router']);

myApp.config(function ($stateProvider) {
  $stateProvider
    .state(
      {
        name: 'home',
        url: '/home',
        templateUrl: 'views/about.html'
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
        template: 'views/blog.html'
      }
    )
    .state(
      {
        name: 'contact',
        url: '/contact',
        template: 'views/contact.html'
      }
    );
});