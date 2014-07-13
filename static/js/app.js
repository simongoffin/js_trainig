
(function() {

    app = {};

    function main() {
        var x = 0;
        _.each(_.range(1, 101), function(i) {
            x += i;
        });
        console.log("Result", x);
    };
    app.main = main;

})();