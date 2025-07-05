# DamianTadzik.github.io
This is the source code for my personal portfolio website hosted via GitHub Pages.

## Project Structure
- `index.html` – home page with most useful information, contat, links etc
- `projects.html` – projects overview, and links to specific projects - it is filled with `projects_list.js` and projects_list.json
- `about.html` – about me page with description and photo
- `project.html` - Project template used by `project_loader.js` and specific `project.json`

- `css/` – custom styles
    - `css/styles.css` - styles for everything
- `js/` – contains js scripts used for static webpages generation
    - `js/projects_list.js` - will fill the projects.html with data from projects
    - `js/project_loader.js` - will fill template with correct project's .json
- `images/` – thumbnails, diagrams, photos organized in subfolders
    - `image.jpg` - example image
- `projects/` – Contains one .json per project and one `projects_list.json` with list of all projects
    - `projects/projects_list.json`  - it is used to generate the projects.html
    - `projects/project.json` - example json file for a project


## Deployment
This site is automatically published via GitHub Pages.

## TODO List
- [x] Think of projects to include
- [x] Ensure that the page is secure!!!
- [x] Ensure that everything is in english, and easy to understand
- [ ] Add the thanks section somewhere
- [ ] Add the conference to the CV
- [ ] References to obtain
