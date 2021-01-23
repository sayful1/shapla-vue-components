module.exports = {
  configureWebpack: () => {
    let externals = {
      "shapla-delete": {root: "delete-icon", commonjs: "delete-icon", commonjs2: "delete-icon", amd: "delete-icon",},
    };
    if (process.env.NODE_ENV === 'production') {
      return {externals: externals}
    }
  }
}
