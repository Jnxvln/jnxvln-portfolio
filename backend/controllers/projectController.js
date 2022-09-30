const asyncHandler = require("express-async-handler");

// @description Get projects
// @route       GET /api/projects
// @access      Private
const getProjects = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET projects! " });
});

// @description Create project
// @route       POST /api/projects
// @access      Private
const createProject = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "CREATE project" });
});

// @description Update project
// @route       PUT /api/project/:id
// @access      Private
const updateProject = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `UPDATE project ${req.params.id}` });
});

// @description Delete project
// @route       DELETE /api/projects/:id
// @access      Private
const deleteProject = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `DELETE project ${req.params.id}` });
});

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
