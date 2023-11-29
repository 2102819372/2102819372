const utils = require("loader-utils");
function loader(buffer) {
  const { limit = 1000, filename = "[contenthash:5].[ext]" } =
    utils.getOptions(this);
  let content;
  if (buffer.byteLength >= limit) {
    content = getFilePath.call(this, buffer, filename);
  } else {
    content = toBase64(buffer);
  }
  return `module.exports=\`${content}\``;
}
loader.raw = true;
function toBase64(buffer) {
  return "data:image/png;base64," + buffer.toString("base64");
}
function getFilePath(buffer, name) {
  const fileName = utils.interpolateName(this, name, {
    content: buffer,
  });
  this.emitFile(fileName, buffer);
  return fileName;
}
module.exports = loader;
