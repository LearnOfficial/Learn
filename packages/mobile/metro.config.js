const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path')

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const config = {
  watchFolders: [
    path.resolve(__dirname, '../../packages'),
  ],
  resolver: {
    nodeModulesPaths: [
      path.resolve(path.join(__dirname, "./node_modules"))
    ],
    resolveRequest: (context, moduleName, platform) => {
      if (
        moduleName.startsWith("react") ||
        moduleName.startsWith("@react-native") ||
        moduleName.startsWith("@react-native-community")
      ) {
        const pathToResolve = path.resolve(
          __dirname,
          "./node_modules",
          moduleName
        );
        return context.resolveRequest(context, pathToResolve, platform);
      }
      return context.resolveRequest(context, moduleName, platform);
    }
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
