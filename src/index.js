import pkg from "../package.json";
import i18n from "./i18n/index.js";
import { CategorySchema } from "./simpleSchema";
import { registerPluginHandlerForCategory } from "./registration";
import resolvers from "./resolvers/index.js";
import schemas from "./schemas/index.js";
import startup from "./startup.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Category",
    name: "Category",
    version: pkg.version,
    i18n,
    collections: {
      CategorySchema: {
        name: "Category",
        indexes: [[{ createdAt: 1, _id: 1 }], [{ updatedAt: 1, _id: 1 }]],
      },
    },
    functionsByType: {
      registerPluginHandler: [registerPluginHandlerForCategory],
      startup: [startup],
    },
    graphQL: {
      resolvers,
      schemas,
    },
    mutations,
    queries,
    simpleSchemas: {
      CategorySchema,
    },
  });
}
