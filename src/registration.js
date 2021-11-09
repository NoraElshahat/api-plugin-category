export const customPublishedCategoryFields = [];
// export const customPublishedCategoryVariantFields = [];

export function registerPluginHandlerForCategory({ category }) {
  if (category) {
    const {
      publishedCategoryFields,
      //   publishedCategoryVariantFields,
    } = category;
    if (Array.isArray(publishedCategoryFields)) {
      customPublishedCategoryFields.push(...publishedCategoryFields);
    }
    // if (Array.isArray(publishedProductVariantFields)) {
    //   customPublishedProductVariantFields.push(
    //     ...publishedProductVariantFields
    //   );
    // }
  }
}
