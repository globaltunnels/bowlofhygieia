'use strict';

/**
 * @ngdoc function
 * @name adsGtApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adsGtApp
 */
angular.module('adsGtApp')
  .controller('DrugCtrl', ['$scope', '$http','$modal','FDA_API', function ($scope, $http, $modal, FDA_API) {
//     console.log(FDA_API.drugEvent);  
     
     function getDrugList() {
        $http.get(FDA_API.drugEvent+"?count=patient.drug.medicinalproduct.exact&limit=1000")
        .success(function(response) {
                var results=response.results;
//               console.log(results);
                $scope.drugList=results.map(function(item){return item.term.toLowerCase();});
            });
     }
     
     getDrugList();
//     $http.get(FDA_API.drugEvent+"?count=patient.drug.medicinalproduct.exact&limit=1000")
//        .success(function(response) {
//            var results=response.results;
//            console.log(results);
//            $scope.drugList=results.map(function(item){return item.term.toLowerCase();});
//            console.log($scope.drugList);
//            });
     $scope.onClick=function() {
         if ($scope.selected)
            $scope.onSelect($scope.selected, $scope.selected, $scope.selected)
     }
    
     $scope.onSelect=function($item, $model, $label) {
//         console.log($item, $model, $label);
         var chartValues1;
         var chartValues2;
         var chartHeight1;
         var chartHeight2;
         var drug=$item.replace(' ', '+');
         var fdaUrl1=FDA_API.drugEvent+'?search=patient.drug.medicinalproduct:"'+drug+'"+AND+serious:1&count=patient.reaction.reactionmeddrapt.exact';
         var fdaUrl2=FDA_API.drugEvent+'?search=patient.drug.medicinalproduct:"'+drug+'"+AND+serious:2&count=patient.reaction.reactionmeddrapt.exact';
//         console.log(fdaUrl1);
         $http.get(fdaUrl1).success(function(response) {
            var results=response.results;
//            console.log(results);
            var resultCount=results.length;
            chartHeight1=resultCount*50;
            chartValues1=results.map(function(item) {return {"label":item.term.toLowerCase(), "value":Math.floor(item.count)};});
            $http.get(fdaUrl2).success(function(response) {
                var results=response.results;
//                console.log(results);
                var resultCount=results.length;
                chartHeight2=resultCount*50;
                chartValues2=results.map(function(item) {return {"label":item.term.toLowerCase(), "value":Math.floor(item.count)};});
                $scope.chartData[0].values=chartValues1;
     //           $scope.chartData[0].key="Side Effect Count1";
                $scope.chartData[1].values=chartValues2;
     //           $scope.chartData[1].key="Side Effect Count2";
                $scope.chartOptions.chart.height=chartHeight1+chartHeight2;
                $scope.chartOptions.title.text="Reported Side Effects Related to "+$item;
                if (!$scope.chartConfig.visible)
                    $scope.chartConfig.visible=true;
                });
         });
  
         $scope.drugLabel=undefined;
         $scope.openFdaLabel=undefined;
         
         var labelUrl=FDA_API.drugLabel+'?search=substance_name:"'+drug+'"';
         $http.get(labelUrl).success(function(response) {
            var results=response.results[0];
            console.log(results);
           
            $scope.openFdaLabel=results.openfda;
            console.log("openfda");
            console.log(results.openfda);
            delete results.openfda;
//            delete results.set_id;
//            delete results.id;
//            delete results.effective_time;
            $scope.drugLabel=results; 
         });
         
     };
     
     $scope.formatLabel=function(val) {
         var result;
         if (typeof val !=="object")
             return val;
         for (var i=0; val.length && i<val.length; i++) {
             result =result?result+", "+val[i]:val[i];
         }
         return result?result:val;
     };
     
     
    $scope.chartOptions = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 450,
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showControls: false,
                showValues: true,
                transitionDuration: 500,
                valueFormat: function (n){return d3.format(',')(n);},
                showYAxis:false,
                tooltipContent: function(key, x, y, e, graph){return '<center><span class="tooltipUpper">'+key+'</span><br>'+x+': '+y+'</center>'},
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Incident Count',
                    tickFormat: function(d){
                        return d3.format(',')(d);
                    },
                    showMaxMin: false
                },
            },
            
         title: {
                    enable: true,
                    text:'',
                    class: 'h3'
                    
                }
    };
    
    $scope.chartConfig={
        visible: false
    }
    $scope.chartData = [
            {
                "key": 'Serious Incidents',
                "color": "#d62728",
                "values": [
                ]
            },
            {
                "key": 'Not Serious Incidents',
                "color": "#1f77b4",
                "values": [
                ]
            }
        ];
        
    $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: false,
      templateUrl: 'aboutModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
//      resolve: {
//        items: function () {
//          return $scope.items;
//        }
//      }

    
    });
    
    modalInstance.result.then(function (returned) {
      console.log("modal returned="+returned);  
      console.info("modal closed");
//      $('.modal').remove();
//    $('body').removeClass('modal-open');
//    $('.modal-backdrop').remove();
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
    
    };

  }]);
  
  angular.module('adsGtApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.close = function () {
    $modalInstance.close("I am closed");
  };

});
