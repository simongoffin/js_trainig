
(function() {

    app = {};

    function main() {
        $("button").click(function() {
            _.each(_.range(1, 11), function(i) {
                $(".main_content").append("<div>" + i + "</div>");
            });
        });
    };
    app.main = main;

})();