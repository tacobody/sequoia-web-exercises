(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            var area = Math.PI * (this.radius * this.radius);

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            var finalArea = 0;

            // if (doRounding === true) {
            //     finalArea = Math.round(this.getArea());
            // } else {
            //     finalArea = this.getArea();
            // }

            // var finalArea is a great example for ternary operator
            finalArea = (doRounding) ? Math.round(this.getArea()) : this.getArea();

            var outputMessage = "Area of a circle with radius: ";
            outputMessage += this.radius + ", is: ";
            outputMessage += finalArea;

            console.log(outputMessage);
        }
    };


    // use .getArea to process your data
    // CALL .logInfo to output the data


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    // console.log("=======================================================");
    // // TODO: Change the radius of the circle to 5.
    //
    // // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
})();
