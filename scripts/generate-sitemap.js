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
  .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

// Add homepage
doc.ele('url')
  .ele('loc').txt(BASE_URL).up()
  .ele('lastmod').txt(LAST_MOD).up()
  .ele('changefreq').txt('daily').up()
  .ele('priority').txt('1.0').up();

// Add FAQ page
doc.ele('url')
  .ele('loc').txt(`${BASE_URL}/faq`).up()
  .ele('lastmod').txt(LAST_MOD).up()
  .ele('changefreq').txt('weekly').up()
  .ele('priority').txt('0.8').up();

// Add industry pages
industries.forEach(industry => {
  doc.ele('url')
    .ele('loc').txt(`${BASE_URL}/branche/${industry.id}`).up()
    .ele('lastmod').txt(LAST_MOD).up()
    .ele('changefreq').txt('daily').up()
    .ele('priority').txt('0.9').up();
});

// Add Tarifvertrag pages (only current ones, not historical)
tarifvertraege
  .filter(tv => !tv.isHistorical)
  .forEach(tv => {
    doc.ele('url')
      .ele('loc').txt(`${BASE_URL}/tarifvertrag/${tv.id}`).up()
      .ele('lastmod').txt(LAST_MOD).up()
      .ele('changefreq').txt('daily').up()
      .ele('priority').txt('0.9').up();
  });

// Convert to string and save
const xml = doc.end({ prettyPrint: true });
writeFileSync(join(__dirname, '../public/sitemap.xml'), xml);

console.log('Sitemap generated successfully!');