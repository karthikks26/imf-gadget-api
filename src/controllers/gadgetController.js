const { PrismaClient } = require("@prisma/client");
const {
  generateCodename,
  generateConfirmationCode,
} = require("../utils/helpers");

const prisma = new PrismaClient();

exports.getAllGadgets = async (req, res) => {
  try {
    const gadgets = await prisma.gadget.findMany();
    const gadgetsWithProbability = gadgets.map((gadget) => ({
      ...gadget,
      missionSuccessProbability: Math.floor(Math.random() * 101),
    }));
    res.json(gadgetsWithProbability);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving gadgets" });
  }
};

exports.addGadget = async (req, res) => {
  try {
    const gadget = await prisma.gadget.create({
      data: {
        name: req.body.name,
        status: "Available",
        codename: generateCodename(),
      },
    });
    res.status(201).json(gadget);
  } catch (error) {
    res.status(500).json({ error: "Error creating gadget" });
  }
};

exports.updateGadget = async (req, res) => {
  try {
    const { id } = req.params;
    const gadget = await prisma.gadget.update({
      where: { id },
      data: req.body,
    });
    res.json(gadget);
  } catch (error) {
    res.status(500).json({ error: "Error updating gadget" });
  }
};

exports.deleteGadget = async (req, res) => {
  try {
    const { id } = req.params;
    const gadget = await prisma.gadget.update({
      where: { id },
      data: {
        status: "Decommissioned",
        decommissionedAt: new Date(),
      },
    });
    res.json(gadget);
  } catch (error) {
    res.status(500).json({ error: "Error decommissioning gadget" });
  }
};

exports.selfDestruct = async (req, res) => {
  try {
    const { id } = req.params;
    const confirmationCode = generateConfirmationCode();
    res.json({ message: "Self-destruct sequence initiated", confirmationCode });
  } catch (error) {
    res.status(500).json({ error: "Error initiating self-destruct sequence" });
  }
};

exports.getGadgetsByStatus = async (req, res) => {
  try {
    const { status } = req.query;
    const gadgets = await prisma.gadget.findMany({
      where: status ? { status } : undefined,
    });
    res.json(gadgets);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving gadgets" });
  }
};
