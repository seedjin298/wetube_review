export const trending = (req, res) => res.render("home");
export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`)
};
export const edit = (req, res) => {
  return res.send("edit")
};
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("delete video");