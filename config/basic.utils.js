import jwt from "jsonwebtoken";
function genToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}
export { genToken };
