const config = require('../config.js');
const $ = require('../assets/jquery/jquery.min.js');
$("#sub").click(function () {
    var mobile = $("#mobile").val();
    $("#output").append("<div>" + mobile + "</div>");
    console.log(versions);
});