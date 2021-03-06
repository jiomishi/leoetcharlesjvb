// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var CMNEApp = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

CMNEApp.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(5);

  // note that you can also chain configs
  $ionicConfigProvider.backButton.text(false);
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    

    if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
            }
  });
})

.controller("MailgunController", function($scope, $http) {
 
    var mailgunUrl = "sandboxdbeb402b833c42619487fbce8e2a8850.mailgun.org";
    var mailgunApiKey = window.btoa("api:key-0c233689883f37926dbc2f8e118393d0")
 
    $scope.send = function(recipient, subject, message) {
        $http(
            {
                "method": "POST",
                "url": "https://api.mailgun.net/v3/" + mailgunUrl + "/messages",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + mailgunApiKey
                },
                data: "from=" + "c.m.candidat.mobile@gmail.com" + "&to=" + "c.m.recrute.mobile@gmail.com" + "&subject=" + "test" + "&text=" + "test"
            }
        ).then(function(success) {
            console.log("SUCCESS " + JSON.stringify(success));
        }, function(error) {
            console.log("ERROR " + JSON.stringify(error));
        });
    }
 
})

/*

    .run(function($ionicPlatform, $ionicPopup) {
        $ionicPlatform.ready(function() {
            if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
            }
        });
    })

*/
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
   
 

 $stateProvider

  // Each tab has its own nav history stack:

   $stateProvider.state('postuler', {
    url: '/postuler',
		templateUrl: 'views/postuler.html',
	
  })
  
.state('annonce', {
      url: '/annonce/:IdAnnonce',
      templateUrl: 'views/annonce.html'
    })
	
	.state('testWS', {
      url: '/testWS',
      templateUrl: 'views/testWS.html'
    })

  .state('toutesLesAnnonces', {
      url: '/toutesLesAnnonces/:recherche',
      templateUrl: 'views/toutesLesAnnonces.html'
    })

  .state('recherche', {
      url: '/recherche',
      templateUrl: 'views/recherche.html'
    })
	
  .state('accueil', {
    url: '/accueil',
    templateUrl: 'views/accueil.html'
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/accueil');
	
});



