
(function() {

    app = {};

    function main() {
        $("button").click(function() {
            plusmultplus(1, 2, 3, 4).then(function(result) {
                console.log("(1+2)*(3+4)=", result.multiplication);
            });
        });
    };
    app.main = main;

    function plusmultplus(a, b, c, d) {
        var def1 = $.ajax("/service_plus", {
            type: "POST",
            dataType: "json",
            data: JSON.stringify({
                "a": a,
                "b": b,
            }),
            contentType: "application/json",
        });
        var def2 = $.ajax("/service_plus", {
            type: "POST",
            dataType: "json",
            data: JSON.stringify({
                "a": c,
                "b": d,
            }),
            contentType: "application/json",
        });

        return $.when(def1, def2).then(function(result1, result2) {
            return $.ajax("/service_mult", {
                type: "POST",
                dataType: "json",
                data: JSON.stringify({
                    "a": result1[0].addition,
                    "b": result2[0].addition,
                }),
                contentType: "application/json",
            });
        });
    };

})();