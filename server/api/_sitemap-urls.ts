type SitemapEntry = { loc: string; lastmod: Date };

export default defineEventHandler(async () => {
  const { client } = useContentful();

  const sitemap: Array<SitemapEntry> = [];

  console.log(sitemap);
  return sitemap;
});
