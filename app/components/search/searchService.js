app.service("searchService",["$http", function ($http) {
    
    this.search = function (searchQuery) {
        return new Promise(function (resolve, reject) {
            var config = {
                "method": "GET",
                "url": "https://www.datakick.org/api/items?query="+searchQuery
            };

            $http(config).then(function (response) {
                resolve(response)
            }, function (response) {
                reject(response)
            })
        });

    }
}]);