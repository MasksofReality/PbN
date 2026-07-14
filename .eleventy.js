module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("splatIcon", function (splat) {
    const icons = {
      vampire: "▲", werewolf: "◆", lost: "✦", hellion: "▼",
      gifted: "◈", mortals: "●", hunter: "✚", "half-damned": "◐",
    };
    return icons[splat] || "•";
  });

  eleventyConfig.addCollection("denizens", function (api) {
    return api.getFilteredByGlob("src/denizens/*.md").sort((a, b) => {
      return (a.data.order || 99) - (b.data.order || 99);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
