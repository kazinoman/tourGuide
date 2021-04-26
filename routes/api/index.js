// Dependencies
// ============================================================================
const router = require("express").Router();
const userRoutes = require("./users");
const tourRoutes = require('./tourRoute');
const { route } = require("./users");

// User routes
// ============================================================================
router.use("/users", userRoutes);

// TOUR ROUTES
router.use("/tours", tourRoutes );

module.exports = router;
