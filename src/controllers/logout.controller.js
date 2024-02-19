/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */

"use strict";

const logout = (req, res) => {
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
  res.redirect("/login");
};

module.exports = { logout };
