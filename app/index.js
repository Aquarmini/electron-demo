const config = require('../config.js');
const $ = require('jquery');
$("#sub").click(function () {
    var mobile = $("#mobile").val();
    $("#output").append("<div>" + mobile + "</div>");
    console.log(versions);
});