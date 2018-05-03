app.component("searchResult", {
    templateUrl: "./components/search/search-result/searchResultTemplate.html",
    controller: ["$rootScope", "$scope", "$routeParams", "searchService", SearchResultController]
});

function SearchResultController($rootScope, $scope, $routeParams, searchService) {

    var ctrl = this;

    $scope.$watch(function () {
        return $routeParams.query
    }, function (searchQuery) {
        console.log(searchQuery);
        searchService.search(searchQuery).then(function (response) {

            $rootScope.safeApply(function () {
                ctrl.searchResults = response.data;
            });

        })
    })

}