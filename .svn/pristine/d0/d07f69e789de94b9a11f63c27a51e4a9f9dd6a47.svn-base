'use strict';

describe('Controller: DrugCtrl', function () {

  // load the controller's module
  beforeEach(module('adsGtApp'));

  var drugCtrl,
      scope,
      http,
      modal,
      fdaApi;
  
  var httpBackend, openFdaHandler;

  // Initialize the controller and a mock scope
//  beforeEach(inject(function ($controller, $rootScope) {
//     scope = $rootScope.$new();
//     drugCtrl = $controller('DrugCtrl', {
//      $scope: scope, 
//      $http:  
//      $modal, 
//      FDA_API
//     });
//  }));

  beforeEach(inject(function ($injector) {
     httpBackend = $injector.get('$httpBackend');
     openFdaHandler = httpBackend.when('GET');
    
     scope = $injector.get('$rootScope').$new();
     http = $injector.get('$http');
     modal= $injector.get('$modal');
     fdaApi=$injector.get('FDA_API');
     
     openFdaHandler.respond({results:[{term:"aspirin"},{term:"pepsi"}]});
     httpBackend.expectGET();
     var controller=$injector.get('$controller');
     drugCtrl = controller('DrugCtrl', {
      $scope: scope, 
      $http: http,  
      $modal: modal,
      FDA_API: fdaApi
     });
     httpBackend.flush();
  }));

  it('should hide the chart when first loaded', function () {
    expect(scope.chartConfig.visible).toBe(false);
    console.log("test chartConfig visible to be false");
  });
  
  it('should have DrugList used for autocomplete populated', function() {
      expect(scope.drugList.length).toBe(2);
    console.log("test drugList's length to be 2");
  });
});
