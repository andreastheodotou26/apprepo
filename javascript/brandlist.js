// JavaScript Document

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "libs/brands.xml",
        dataType: "xml",
        success: xmlParser
    });
});

function xmlParser(xml) {
    $('#load').fadeOut();
    $(xml).find("Brand").each(function () {
		
        $("#BrandList").append('<li class="brandItem"><a href = "' + $this.find("BrandDesc").text() + '_page" data-transition="slide"><h1>' + $this.find("BrandName").text() + '</h1><img src="images/' + $this.find("BrandImage").text() + '" width="150" height="150" alt ="Product Brand"><p>Touch to browse' + $this.find("BrandName").text() + 'related products.</p></a></li>'  );
        $(".BrandList").listview("refresh");
    });
}   



