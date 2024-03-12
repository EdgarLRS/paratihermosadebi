$(document).ready(function(){
    $("#btnNext1").click(function() {
        $("#modal1").modal("hide");
        $("#modal2").modal("show");
    });

    $("#btnNext2").click(function() {
        $("#modal2").modal("hide");
        $("#modal3").modal("show");
    });

    $("#btnNext3").click(function() {
        $("#modal3").modal("hide");
        $("#modal4").modal("show");
    });

    $("#btnNext4").click(function() {
        $("#modal4").modal("hide");
        $("#modal5").modal("show");
    });

    $("#btnNext5").click(function() {
        $("#modal5").modal("hide");
        $("#modal6").modal("show");
    });

    $("#btnNext6").click(function() {
        $("#modal6").modal("hide");
        $("#btnPresionar").hide();
        $("#panelResult").show();
    });
})
