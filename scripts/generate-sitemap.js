import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { create } from 'xmlbuilder2';
import { writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import mock data
const { industries, tarifvertraege } = await import('../src/data/mockData.js');

const BASE_URL = 'https://tarif-vertrag.org';
const LAST_MOD = new Date().toISOString();

// Create the root urlset element
const doc = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', { 
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:xhtml': 'http://www.w3.org/1999/xhtml'
  });

// Add homepage
doc.ele('url')
  .ele('loc').txt(BASE_URL).up()
  .ele('lastmod').txt(LAST_MOD).up()
  .ele('changefreq').txt('daily').up()
  .ele('priority').txt('1.0').up();

// Add static pages
const staticPages = ['faq', 'kontakt', 'impressum', 'datenschutz'];
staticPages.forEach(page => {
  doc.ele('url')
    .ele('loc').txt(`${BASE_URL}/${page}`).up()
    .ele('lastmod').txt(LAST_MOD).up()
    .ele('changefreq').txt('weekly').up()
    .ele('priority').txt('0.8').up();
});

// Add industry pages
industries.forEach(industry => {
  doc.ele('url')
    .ele('loc').txt(`${BASE_URL}/branche/${industry.id}`).up()
    .ele('lastmod').txt(LAST_MOD).up()
    .ele('changefreq').txt('daily').up()
    .ele('priority').txt('0.9').up();
});

// Add Tarifvertrag pages
tarifvertraege.forEach(tv => {
  const url = doc.ele('url')
    .ele('loc').txt(`${BASE_URL}/branche/${tv.industry}/${tv.id}`).up()
    .ele('lastmod').txt(LAST_MOD).up()
    .ele('changefreq').txt('daily').up()
    .ele('priority').txt('0.9').up();

  // Add alternate language versions if available
  url.ele('xhtml:link')
    .att('rel', 'alternate')
    .att('hreflang', 'de')
    .att('href', `${BASE_URL}/branche/${tv.industry}/${tv.id}`);
});

// Convert to string and save
const xml = doc.end({ prettyPrint: true });
writeFileSync(join(__dirname, '../public/sitemap.xml'), xml);

console.log('Sitemap generated successfully!');