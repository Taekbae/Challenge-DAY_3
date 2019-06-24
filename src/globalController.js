export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const join = (req, res) => res.render("join", { pageTitle: "Join" });

export const photos = (req, res) =>
  res.render("photos", { pageTitle: "Photos" });

export const profile = (req, res) =>
  res.render("profile", { pageTitle: "Profile" });
