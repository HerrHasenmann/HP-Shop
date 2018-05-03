app.component("search", {
    templateUrl: "./components/search/search-input/searchTemplate.html",
    controller: ["$location", "$routeParams", SearchController]
});

function SearchController($location, $routeParams) {
    var ctrl = this;

    ctrl.search = function (searchQuery) {
        if (searchQuery && searchQuery.length > 0) {
            $location.url('/search?query=' + searchQuery);
        }
    };

    function init() {
        if($routeParams.query){
            ctrl.searchQuery = $routeParams.query
        }
    }
    init()
}