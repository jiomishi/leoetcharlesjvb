angular.module('starter.controllers', [])

/*WebService*/
.controller('AnnoncesCtrl', function($scope, $stateParams, annoncesService) {
	
	annoncesService.getAnnonces().then(function(annonces){
		$scope.annonces = annonces.data;
	});
	
})

.controller('AnnonceCtrl', function($scope, $stateParams, annoncesService) {
	
	annoncesService.getAnnonces().then(function(annonces){
		$scope.annonce = annoncesService.getAnnonce(annonces, 3);
	});
	
})
/*Recherche


.controller('ShareMe', function($scope, $cordovaSocialSharing) {
	 $scope.share ="";

     $cordovaSocialSharing
	    .shareViaSMS(message, number)
	    .then(function(result) {
	    	console.log("Success!");
	    	$scope.share = "Partage successful";
	      // Success!
	    }, function(err) {
	    	console.log("Partage unsuccessful");
	    	$scope.share = "Partage unsuccessful";
	      // An error occurred. Show a message to the user
	    });
})

*/
/*
.controller("MailCtrl", function($scope){
	$scope.sendMail=function(){
		if(window.plugins && window.plugins.emailComposer){
			window.plugins.emailComposer.showEmailComposerWithCallback(function(result){
				console.log("Success");
			},
			"Sujet",
			"",
			["leo.dumortier@hei.fr", "charles.cunin@hei.Fr"],
			null,
			null,
			false,
			null,
			null
			);
		}
	}

})
*/

.controller('MailCtrl', function($scope) {

    $scope.sendMail= function() {
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            }, 
            "Feedback for your App", // Subject
            "Bonjour je suis un test!",   // Body
            ["leo.dumortier@hei.fr"],    // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
        else{console.log("Marche pas");}
    }
    
})

.controller('HomeCtrl', function($scope, $cordovaNetwork) {
  $scope.message = "";
  if($cordovaNetwork.isOnline()){
    $scope.message = "Online";
    console.log($cordovaNetwork.isOnline());
  }
  else{
  	console.log($cordovaNetwork.isOffline());
    $scope.message = "Offline";
  }
})

.controller('shareCtrl',['$scope',function($scope) {
   $scope.whatsappShare=function(){
    window.plugins.socialsharing.shareViaWhatsApp('Digital Signature Maker', null /* img */, "https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker" /* url */, null, function(errormsg){alert("Error: Cannot Share")});
  }
   $scope.twitterShare=function(){
    window.plugins.socialsharing.shareViaTwitter('Digital Signature Maker', null /* img */, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker', null, function(errormsg){alert("Error: Cannot Share")});
  }
   $scope.OtherShare=function(){
     window.plugins.socialsharing.share('Digital Signature Maker', null, null, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker');
  }
 
}])


/*Menu Burger*/
.controller('MyController', function($scope, $ionicModal) {
	
  $ionicModal.fromTemplateUrl('views/menu.html', {
    scope: $scope,
    animation: 'slide-in'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
  
})

/*Autre*/
.controller("changerAccueil",function($scope){
	
	$scope.class = { 
		class1: "BtnViolet", 
		class2: "BtnAcc",
		class3: "BtnAcc"
	}
	
	$scope.changeClass1 = function(){
		$scope.class.class1 = "BtnViolet";
		$scope.class.class2 = "BtnAcc";
		$scope.class.class3 = "BtnAcc";
	}
	
	$scope.changeClass2 = function(){
		$scope.class.class1 = "BtnAcc";
		$scope.class.class2 = "BtnViolet";
		$scope.class.class3 = "BtnAcc";	
	}
	
	$scope.changeClass3 = function(){
		$scope.class.class1 = "BtnAcc";
		$scope.class.class2 = "BtnAcc";
		$scope.class.class3 = "BtnViolet";	
	}
})

.controller("changer",function($scope){
	
	$scope.class = { 
		class1: "BtnViolet", 
		class2: "BtnAcc"
	}
	
	$scope.changeClass = function(){
		
    if ($scope.class.class1 === "BtnAcc"){
		$scope.class.class1 = "BtnViolet";
		$scope.class.class2 = "BtnAcc";
	}
    else{
		$scope.class.class1 = "BtnAcc";
		$scope.class.class2 = "BtnViolet";
	}
  }
})

.controller('Bienvenue', ['$scope', function($scope) { 
  $scope.title = 'Bienvenue'; 
}]);



function masquer_div(id, id2)
{
  if (document.getElementById(id).style.display == 'block') {
       document.getElementById(id).style.display = 'none';
  }
  else {
       document.getElementById(id).style.display = 'block';
  }

  if (document.getElementById(id2).style.display == 'none') {
       document.getElementById(id2).style.display = 'block';
  }
  else {
       document.getElementById(id2).style.display = 'none';
  }
}

function afficherdiv1(id, id2, id3)
{
       	document.getElementById(id).style.display = 'block';
		document.getElementById(id2).style.display = 'none';
		document.getElementById(id3).style.display = 'none';
}

function afficherdiv2(id, id2)
{
       	document.getElementById(id).style.display = 'block';
		document.getElementById(id2).style.display = 'none';

}
