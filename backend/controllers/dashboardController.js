const db = require("../middleware/config/db.js");

const getDashboardStats = async (req, res) => {
  try {

    const [[users]] = await db.promise().query(
      "SELECT COUNT(*) AS totalUsers FROM users"
    );

    const [[lost]] = await db.promise().query(
      "SELECT COUNT(*) AS totalLost FROM lost_items"
    );

    const [[found]] = await db.promise().query(
      "SELECT COUNT(*) AS totalFound FROM found_items"
    );

    res.json({
      totalUsers: users.totalUsers,
      totalLost: lost.totalLost,
      totalFound: found.totalFound,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

module.exports = {
  getDashboardStats,
};