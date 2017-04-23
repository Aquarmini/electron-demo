const config = require('../config.js');
const $ = require('jquery');
$("#sub").click(function () {
    var name = $("#name").val();
    var password = $("#password").val();
    var html = $("<tr></tr>");
    html.append("<td>" + name + "</td><td>" + password + "</td>")
    $("#output").append(html);
});