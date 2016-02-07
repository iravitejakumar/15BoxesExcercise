function fnKeyFunction(e,topName,leftName,bottomName,rightName)
{
  if (!e) e=window.event;
  var selectName;
  switch(e.keyCode)
  {
  case 37:
    // Key left.
    selectName = leftName;
    var output=document.getElementById('output');
    var data=document.createElement('span');
    output.appendChild(data);
    data.innerHTML='---left';
    break;
  case 38:
    // Key up.
    selectName = topName;
   var output=document.getElementById('output');
    var data=document.createElement('span');
    output.appendChild(data);
    data.innerHTML='---up';
    break;
  case 39:
    // Key right.
    selectName = rightName;
    var output=document.getElementById('output');
    var data=document.createElement('span');
    output.appendChild(data);
    data.innerHTML='---right';
    break;
  case 40:
    // Key down.
    selectName = bottomName;
    var output=document.getElementById('output');
    var data=document.createElement('span');
    output.appendChild(data);
    data.innerHTML='---down';
    break;
  }
  if (!selectName) return;
  var controls = document.getElementsByName(selectName);
  if (!controls) return;
  if (controls.length != 1) return;
  controls[0].focus();
}
