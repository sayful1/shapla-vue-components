module.exports = {
  configureWebpack: () => {
    let externals = {
      "shapla-modal": {
        root: "modal", commonjs: "modal", commonjs2: "modal", amd: "modal"
      },
      "shapla-button": {
        root: "shapla-button", commonjs: "shapla-button", commonjs2: "shapla-button", amd: "shapla-button"
      },
    };
    if (process.env.NODE_ENV === 'production') {
      return {externals: externals}
    }
  }
}
