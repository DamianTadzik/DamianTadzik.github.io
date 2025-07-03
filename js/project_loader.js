document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const file = params.get("file");

  if (!file) {
    document.getElementById("project-container").innerHTML = "<p>Error: No project file specified.</p>";
    return;
  }

  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error("Fetch failed");

    const data = await res.json();
    const container = document.getElementById("project-container");

    // Set project title in <h1>
    document.getElementById("project-title").textContent = data.title;
    document.title = `${data.title} - Damian Brzana`;

    // Format sections
    const meta = `
      <section class="project-meta">
        <p><strong>Date: </strong> ${data.date}</p>
        <p><strong>Technologies: </strong> ${data.technologies.join(", ")}</p>
      </section>
    `;

    const overview = `
      <section class="project-description">
        <h2>Overview</h2>
        ${data.overview.map(p => `<p>${p}</p>`).join("")}
    `;

    const highlights = `
        <h2>Technical Highlights</h2>
        <ul>${data.highlights.map(point => `<li>${point}</li>`).join("")}</ul>
    `;

    const results = `
        <h2>Results</h2>
        ${data.results.map(p => `<p>${p}</p>`).join("")}
    `;

    const gallery = `
        <h2>Gallery</h2>
        ${data.images.map(img => `
          <figure>
            <img src="${img.src}" alt="${img.caption}" class="project-image" />
            <figcaption>${img.caption}</figcaption>
          </figure>
        `).join("")}
      </section>
    `;

    container.innerHTML = meta + overview + highlights + results + gallery;

  } catch (err) {
    console.error("Error loading project JSON:", err);
    document.getElementById("project-container").innerHTML = "<p>Error loading project data.</p>";
  }
});
