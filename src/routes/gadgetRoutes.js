const express = require("express");
const gadgetController = require("../controllers/gadgetController");
const { authenticateToken } = require("../middleware/auth");

const router = express.Router();

router.get("/", authenticateToken, gadgetController.getAllGadgets);
router.post("/", authenticateToken, gadgetController.addGadget);
router.patch("/:id", authenticateToken, gadgetController.updateGadget);
router.delete("/:id", authenticateToken, gadgetController.deleteGadget);
router.post(
  "/:id/self-destruct",
  authenticateToken,
  gadgetController.selfDestruct
);
router.get("/", authenticateToken, gadgetController.getGadgetsByStatus);

module.exports = router;
