app.component("searchResult", {
    templateUrl: "./components/search/search-result/searchResultTemplate.html",
    controller: ["$rootScope", "$scope", "$routeParams", "searchService", SearchResultController]
});

function SearchResultController($rootScope, $scope, $routeParams, searchService) {

    var ctrl = this;

    ctrl.colors = ["red", "green", "blue", "yellow", "orange"];

    $scope.$watch(function () {
        return $routeParams.query
    }, function (searchQuery) {
        searchService.search(searchQuery).then(function (response) {

            $rootScope.safeApply(function () {
                ctrl.searchResults = response.data;
            });

        })
    })

    ctrl.randomColor = function () {
        var index = Math.round(Math.random()*(ctrl.colors.length-1));

        return ctrl.colors[index]+"-600";
    }

}