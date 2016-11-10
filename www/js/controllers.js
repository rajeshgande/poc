angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('PatientsCtrl', function($scope, $state, httpService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

httpService.getPatients().then(function(data) {
		  $scope.patients=data;
		});

  //$scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };

   $scope.goPatientDetails = function(patientId) {  
        //console.log('go to cycle count screen');
        window.localStorage['patientId'] = patientId;     
		$state.go('menu.cyclecount');
	};
})

.controller('PatientDetailCtrl', function($scope, $stateParams, httpService) {
  //$scope.chat = Chats.get($stateParams.chatId);
  //$scope.patient = httpService
  httpService.getPatientDetails($stateParams.patientId).then(function(data) {
		  $scope.patient = data;
		});
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
