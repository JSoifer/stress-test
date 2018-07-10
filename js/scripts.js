function Stresslevel(signs, health, mechanisms) {
  this.warning = signs;
  this.symptom = health;
  this.cope= mechanisms;
}
var stressSigns = [];
var healthWarnings = [];
var copingMechanisms = [];
// Stresslevel.prototype.calculate = function(warning, symptom, cope) {
//   var value = 0:
//   value = warning + symptom - cope;
// }

Stresslevel.prototype.compile = function(signs) {
  console.log(signs);
  return stressSigns + " " + healthWarnings + " "  + copingMechanisms;
}

$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    debugger;
    //$("#good").hide();

    });

    $("input:checkbox[name=warning]:checked").each(function(){
      var signs = $(this).val();
      console.log(signs);
      stressSigns.push(signs + "<br>");
      $('#warning').show();
    });

    // $("#bad").hide();

    $("input:checkbox[name=symptom]:checked").each(function(){
      var health = $(this).val();
      healthWarnings.push(health + "<br>");
      $('#symptom').show();
    });

    // $("#terrible").hide();

    $("input:checkbox[name=cope]:checked").each(function(){
      var mechanisms = $(this).val();
      copingMechanisms.push(mechanisms + "<br>");
      $('#cope').show();

    });
    //$('#stress-test').hide();

    // newStresslevel = new Stresslevel(signs, health, mechanisms);
    // Stresslevel.compile(signs);
  });
