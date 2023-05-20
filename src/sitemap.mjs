import { SitemapStream, streamToPromise } from 'sitemap';
import { routes } from './routes.js';

const hostname = 'http://localhost:3000';
const urls = [];

routes.forEach((route) => {
  urls.push({
    url: route.path,
    changefreq: 'daily',
    priority: 0.3
  });
});

const sitemapStream = new SitemapStream({ hostname });
urls.forEach((url) => {
  sitemapStream.write(url);
});
sitemapStream.end();

streamToPromise(sitemapStream).then((sitemap) => {
  console.log(sitemap.toString());
});
