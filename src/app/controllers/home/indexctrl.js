app.controller("HomeIndexCtrl", ["$scope", "$rootScope", "$window", "$timeout", function($scope, $rootScope, $window, $timeout){
    $scope.dictionary = ["thureal", "menol", "cotizeh", "notobul", "pati", "nowiri", "bonitillo", "shacalote", "morenita", "chapeo", "kobi", "lokiita", "dembow", "Chamakito", "KeGusta", "sofokito","sofoke", "nobulto", "novota", "namah"];
    $scope.generated = "Tu nuevo nombre de usuario saldrá aquí ;)";
    $scope.generate = function(){
    	var length = $scope.dictionary.length;
    	var strLength = Math.floor((Math.random()*6)+3);
    	var usedIndexes = [];
    	var result = "";
    	for(var i=0; i < strLength; i = i+1)
    	{
    		var newIndex = Math.floor(Math.random()*strLength);
            while(indexOf.call(usedIndexes, newIndex) != -1)
            {
                newIndex = Math.floor(Math.random()*strLength);
            }
            usedIndexes.push(newIndex);
    		result += capitalizeFirstLetter($scope.dictionary[newIndex]);
    	}
        $timeout(function(){ 
            $scope.generated = result;
        });
    };
    var capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    //Taken from http://stackoverflow.com/questions/1181575/determine-whether-an-array-contains-a-value
    var indexOf = function(needle) {
        if(typeof Array.prototype.indexOf === 'function') {
            indexOf = Array.prototype.indexOf;
        } else {
            indexOf = function(needle) {
                var i = -1, index = -1;
                for(i = 0; i < this.length; i++) {
                    if(this[i] === needle) {
                        index = i;
                        break;
                    }
                }
                return index;
            };
        }
        return indexOf.call(this, needle);
    };
}]);