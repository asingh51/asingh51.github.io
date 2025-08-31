
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-jsx": preferDefault(require("/Users/abhaysingh/portfolio-gatsby/src/pages/404.jsx")),
  "component---src-pages-about-jsx": preferDefault(require("/Users/abhaysingh/portfolio-gatsby/src/pages/about.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/abhaysingh/portfolio-gatsby/src/pages/index.jsx")),
  "component---src-pages-leadership-jsx": preferDefault(require("/Users/abhaysingh/portfolio-gatsby/src/pages/leadership.jsx")),
  "component---src-pages-projects-jsx": preferDefault(require("/Users/abhaysingh/portfolio-gatsby/src/pages/projects.jsx")),
  "component---src-pages-resume-jsx": preferDefault(require("/Users/abhaysingh/portfolio-gatsby/src/pages/resume.jsx"))
}

