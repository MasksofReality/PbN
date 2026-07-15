module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("splatIcon", function (splat) {
    const icons = {
      vampire: "▲", werewolf: "◆", lost: "✦", hellion: "▼",
      gifted: "◈", mortals: "●", hunter: "✚", "half-damned": "◐",
    };
    return icons[splat] || "•";
  });

  eleventyConfig.addFilter("jsonStringify", function (value) {
    return JSON.stringify(value || "");
  });

  eleventyConfig.addCollection("denizens", function (api) {
    return api.getFilteredByGlob("src/denizens/*.md").sort((a, b) => {
      return (a.data.order || 99) - (b.data.order || 99);
    });
  });

  // Pages intentionally excluded from the public search index: Rare-path
  // content (Dreamborne, Thousand Whispers, Bystander) and the Storyteller
  // share index itself. These stay off the menu on purpose — indexing them
  // in search would defeat that.
  eleventyConfig.addCollection("searchable", function (api) {
    const hiddenPatterns = [
      "/st-rare/",
      "/denizens/lost/dreamborne/",
      "/denizens/hellion/thousand-whispers/",
      "/denizens/hunter/bystander/",
    ];
    return api.getAll().filter((item) => {
      if (!item.url || !item.data.title) return false;
      if (hiddenPatterns.some((p) => item.url.includes(p))) return false;
      return true;
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
