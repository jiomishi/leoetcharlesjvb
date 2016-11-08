angular.module('starter.services', [])

.factory('annoncesService', function($http) {
	var annonces = [];
	var city;

	return {
		
		getAnnonces: function(){
			return $http.get("http://lesovalies-projetovalies.rhcloud.com/service/association").then(function(response){
				annonces = response;
				return annonces;
				
			});
		},
		
		getAnnonce: function(annonces, id){
			for(i=0;i<annonces.data.length;i++){
				if(annonces.data[i].id == id){
					console.log(annonces.data[i]);
					return annonces.data[i];
				}
			}
			return null;
		}
	}
});