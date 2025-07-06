document.addEventListener('DOMContentLoaded', () => {
  fetch('projects/projects_list.json')
    .then(response => response.json())
    .then(projects => {
      const main = document.querySelector('main');
      const sections = {};

      projects.forEach(project => {
        if (!project.visible) return; // Exit early if project is not visible

        const { title, jsonPath, section, tag } = project;

        if (!sections[section]) {
          const secEl = document.createElement('section');
          const h2 = document.createElement('h2');
          h2.textContent = section;
          const ul = document.createElement('ul');
          secEl.appendChild(h2);
          secEl.appendChild(ul);
          main.appendChild(secEl);
          sections[section] = ul;
        }

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `project.html?file=${encodeURIComponent(jsonPath)}`;
        a.textContent = title;

        const span = document.createElement('span');
        span.classList.add('tag', `tag-${tag.toLowerCase()}`);
        span.textContent = `${tag} Project`;

        li.appendChild(a);
        li.appendChild(span);
        sections[section].appendChild(li);
      });
    })
    .catch(err => {
      console.error('Error loading project list:', err);
    });
});
