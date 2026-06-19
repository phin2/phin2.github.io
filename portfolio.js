  // Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("links_div"));
dragElement(document.getElementById("projects_div"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function setLayer(e) {
    let maxZ = 0;
    document.querySelectorAll('*').forEach(el => {
      const z = parseInt(window.getComputedStyle(el).zIndex, 10);
      if (!isNaN(z) && z > maxZ) {
        maxZ = z;
      }
    });
    elmnt.style.zIndex = maxZ + 1;
  }

  function dragMouseDown(e) {
    setLayer(e);
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

  }
  (function showDiv() {
    const btn = document.getElementById('about_btn');
    const mydiv = document.getElementById('mydiv');

    const linkBtn = document.getElementById('links_btn');
    const links_div = document.getElementById('links_div');

    const projectsBtn = document.getElementById('projects_btn');
    const projects_div = document.getElementById('projects_div');

    btn?.addEventListener('click', function (e) {
      if (mydiv) mydiv.style.display = 'block';
      setLayer(mydiv);

    })
    linkBtn?.addEventListener('click', function (e) {
      if (links_div) links_div.style.display = 'block';
      setLayer(links_div);

      
    })
    projectsBtn?.addEventListener('click', function (e) {
 
      if (projects_div) projects_div.style.display = 'block';
      setLayer(projects_div);
    })
  }
)();

  (function hideDiv() {
    const btn = document.getElementById('close_abt');
    const mydiv = document.getElementById('mydiv');

    const linkBtn = document.getElementById('close_links');
    const links_div = document.getElementById('links_div');

    const projectsBtn = document.getElementById('close_projects');
    const projects_div = document.getElementById('projects_div');

    btn?.addEventListener('click', function (e) {
      if (mydiv) mydiv.style.display = 'none';
    })
    linkBtn?.addEventListener('click', function (e) {
      if (links_div) links_div.style.display = 'none';
    })
    projectsBtn?.addEventListener('click', function (e) {
      if (projects_div) projects_div.style.display = 'none';
    })
  })();
