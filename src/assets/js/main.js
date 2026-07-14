document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  buildDossierSections();
});

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function buildDossierSections() {
  var body = document.getElementById("dossier-body");
  var tocNav = document.getElementById("dossier-toc");
  if (!body || !tocNav) return;

  var headings = Array.prototype.slice.call(body.querySelectorAll(":scope > h2"));
  if (headings.length < 2) return; // not worth a TOC/collapse for very short pages

  var usedIds = {};
  var tocList = document.createElement("ul");
  tocList.className = "toc-list";

  headings.forEach(function (heading) {
    // Build a unique id for this section
    var base = slugify(heading.textContent);
    var id = base;
    var n = 2;
    while (usedIds[id]) {
      id = base + "-" + n;
      n++;
    }
    usedIds[id] = true;

    // Gather all siblings up to (not including) the next h2
    var content = [];
    var node = heading.nextElementSibling;
    while (node && node.tagName !== "H2") {
      var next = node.nextElementSibling;
      content.push(node);
      node = next;
    }

    // Build the collapsible <details> wrapper
    var details = document.createElement("details");
    details.className = "toc-section";
    details.id = id;
    details.open = true;

    var summary = document.createElement("summary");
    summary.innerHTML = heading.innerHTML;
    details.appendChild(summary);

    var contentWrap = document.createElement("div");
    contentWrap.className = "toc-section-content";
    content.forEach(function (el) {
      contentWrap.appendChild(el);
    });
    details.appendChild(contentWrap);

    heading.replaceWith(details);

    // Add the TOC entry
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "#" + id;
    a.textContent = heading.textContent;
    li.appendChild(a);
    tocList.appendChild(li);

    a.addEventListener("click", function (e) {
      e.preventDefault();
      details.open = true;
      details.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "#" + id);
    });
  });

  // Expand all / Collapse all controls
  var controls = document.createElement("div");
  controls.className = "toc-controls";
  var expandBtn = document.createElement("button");
  expandBtn.type = "button";
  expandBtn.textContent = "Expand All";
  var collapseBtn = document.createElement("button");
  collapseBtn.type = "button";
  collapseBtn.textContent = "Collapse All";
  controls.appendChild(expandBtn);
  controls.appendChild(collapseBtn);

  expandBtn.addEventListener("click", function () {
    body.querySelectorAll(".toc-section").forEach(function (d) { d.open = true; });
  });
  collapseBtn.addEventListener("click", function () {
    body.querySelectorAll(".toc-section").forEach(function (d) { d.open = false; });
  });

  var label = document.createElement("p");
  label.className = "toc-label";
  label.textContent = "On This Page";

  tocNav.appendChild(label);
  tocNav.appendChild(tocList);
  tocNav.appendChild(controls);
  tocNav.hidden = false;
  var layout = document.querySelector(".dossier-layout");
  if (layout) layout.classList.add("has-toc");

  // If the page loaded with a hash matching a section, open it
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target && target.classList.contains("toc-section")) {
      target.open = true;
    }
  }
}
