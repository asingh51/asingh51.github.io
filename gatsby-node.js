// gatsby-node.js
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    if (page.path === "/resume/") {
        const oldPage = { ...page };
        page.matchPath = "/resume/*";
        deletePage(oldPage);
        createPage(page);
    }
};