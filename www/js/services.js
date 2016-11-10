angular.module('starter.services', [])
.service('httpService', function($http) {
	 
	function getpatients() {
	//	 console.log("Getting Patients ");	
		 var cps = {};
		 
		 var url = 'http://patientservice.cloudapp.net:9876/api/patient';
		pts = $http({
			  method: 'GET',
			  url: url,		
			}).then(function successCallback(response) {
				 //console.log('Get pts', response.data);
				 return response.data;		
			  }, function errorCallback(response) {
			//	console.log('Error Getting pts...' + response.data);
				alert('Error Getting pts' + response.data);
				return {};
			  });
			  
		return pts;   
	};
	
	 
    
    function getpatientdetails(patientid){       
        var uri = 'http://patientservice.cloudapp.net:9876/api/patient?Id='+ patientid;    
        var targeturl = uri;      
         return $http({
						method: 'GET',
						url:  uri					
            }).then(function successCallback(response) {
                var item = response.data;
                        /*
							if(item===null){
							    $ionicPopup.alert({
										title: 'No item found with barcode: ' + barcode
								});
							} else {
                        		item["ItemBarCode"] = barcode;
							}
                        */
                            return item;
						},
							function errorCallback(response) {                                
                             /*
	                            $ionicPopup.alert({
	     							title: 'Error getting Item details by barcode.'
	   							});
                              */
						});
    }
	
	return {
           getHospitals: function (data, success, error) {
               return gethospitals();
			},
			getPatients: function (data, success, error) {
               return getpatients();
			},
			updateQty: function (item) {
               return updateQty(item);
			},
      getPatientDetails: function (id) {
               return getpatientdetails(id);
			},	
	}
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
