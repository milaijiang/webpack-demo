const pluginName = 'StartOnBuildWebpackPlugin';

class StartOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('webpack 构建正在启动！\n');
    });
  }
}

module.exports = StartOnBuildWebpackPlugin;