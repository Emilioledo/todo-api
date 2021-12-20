const logger = require("../logger");
const Role = require("../models/Role");

const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all([
      new Role({ name: "User" }).save(),
      new Role({ name: "Moderator" }).save(),
      new Role({ name: "Admin" }).save(),
    ]);
    logger.info(values);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { createRoles };
