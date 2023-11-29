module.exports = class FileListPlugin {
  constructor(filename = "fileList") {
    this.filename = filename;
  }
  apply(compiler) {
    compiler.hooks.emit.tap("FileListPlugin", (complation) => {
      const _arr = [];
      for (const key in complation.assets) {
        const content = `
        【${key}】
        大小:${complation.assets[key].size() / 1000}KB
        `;
        _arr.push(content);
      }
      let str = _arr.join("\n");
      complation.assets[this.filename] = {
        source() {
          return str;
        },
        size() {
          return str.length;
        },
      };
    });
  }
};
