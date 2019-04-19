const ROW_VACIO = "<tr><td colspan='3'>Vacio Ameo!</td></tr>";

$("#btnInfoGrupo").click(getInfoGroup);
$("#btnInfoId").click(getInfoId);
$("#btnCrearInfo").click(createInfo);


function crearRow(info){
  return "<tr><td>"+info._id+"</td><td>"+info.group+"</td><td>"+info.thing+"</td></tr>";
}

function borrarTabla(tbody){
  tbody.html("");
}

function getInfoGroup() {
  var groupId = $("#groupid").val();
  $.ajax({
    url:"http://web-unicen.herokuapp.com/api/group/" + groupId +"?",
    method:"GET",
    contentType: "application/json; charset=utf-8",
    success: function(resultData){
      var tbody = $("#infoGrupo tbody");
      borrarTabla(tbody);
      if(resultData.information.length === 0){
        tbody.html(ROW_VACIO);
        return;
      }
      for (var i = 0; i < resultData.information.length; i++) {
        tbody.append(crearRow(resultData.information[i]));
      }
      console.log(resultData.information[0].thing);
    },
    error:function(jqxml, status, errorThrown){
      alert('Error');
    }
  });
}


function getInfoId() {
  var id = $("#itemid").val();
  $.ajax({
    url:"http://web-unicen.herokuapp.com/api/get/" + id +"?",
    method:"GET",
    contentType: "application/json; charset=utf-8",
    success: function(resultData){
      var ul = $("#infoItem");
      ul.append("<li>ID: "+resultData.information._id+"</li>");
      ul.append("<li>Grupo: "+resultData.information.group+"</li>");
      ul.append("<li>Cosa: "+resultData.information.thing+"</li>");
      console.log(resultData);
    },
    error:function(jqxml, status, errorThrown){
      alert('Error');
    }
  });
}

function createInfo() {
  event.preventDefault();
  var grupo = $("#grupo").val();
  var cosa = $("#informacion").val();
  var info = {
    "group":grupo,
    "thing":cosa
  };
  $.ajax({
        url:"http://web-unicen.herokuapp.com/api/create",
        method:"POST",
        dataType: 'JSON',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(info),
        success: function(resultData){
          $('#guardarAlert').html("Se creo el elemento " + resultData.information._id);
          $("#grupo").val("");
          $("#informacion").val("");
          $('#guardarAlert').addClass('alert-success');
          console.log(resultData);
        },
        error:function(jqxml, status, errorThrown){
          $('#guardarAlert').html("Error intente mas tarde");
          $('#guardarAlert').addClass('alert-danger');
          console.log(errorThrown);
        }
      });
}
