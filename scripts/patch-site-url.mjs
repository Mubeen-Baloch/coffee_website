/**
 * Vercel / CI: rewrites the canonical base URL in static files before deploy.
 *
 * Priority:
 *   1. SITE_URL — set in Vercel → Project → Environment Variables (e.g. https://yourdomain.com)
 *   2. Preview: VERCEL_URL — e.g. branch-xxx.vercel.app (only when VERCEL_ENV is "preview")
 *   3. DEFAULT_SITE_URL — production fallback committed in repo
 *
 * When target === DEFAULT, the script no-ops (fast local builds).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const DEFAULT_SITE_URL = 'https://coffeewebsite-ebon.vercel.app';

function normalizeBase(u) {
    if (!u || typeof u !== 'string') return '';
    let s = u.trim();
    if (!s.startsWith('http')) s = `https://${s}`;
    s = s.replace(/\/+$/, '');
    return s;
}

function resolveTargetUrl() {
    const fromEnv = normalizeBase(process.env.SITE_URL);
    if (fromEnv) return fromEnv;

    const vercelEnv = process.env.VERCEL_ENV || '';
    const isPreview = vercelEnv === 'preview';
    if (isPreview && process.env.VERCEL_URL) {
        return normalizeBase(process.env.VERCEL_URL);
    }

    return DEFAULT_SITE_URL;
}

const TARGET = resolveTargetUrl();
const EXT = new Set(['.html', '.xml', '.txt', '.js', '.md']);

function* walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of entries) {
        if (ent.name === 'node_modules' || ent.name === '.git') continue;
        const full = path.join(dir, ent.name);
        if (ent.isDirectory()) yield* walk(full);
        else if (EXT.has(path.extname(ent.name).toLowerCase())) yield full;
    }
}

if (TARGET === DEFAULT_SITE_URL) {
    console.log(`[patch-site-url] Using default site URL: ${TARGET} (no file changes).`);
    process.exit(0);
}

let count = 0;
for (const file of walk(ROOT)) {
    const rel = path.relative(ROOT, file);
    if (rel.startsWith(`scripts${path.sep}`) && path.basename(file) === 'patch-site-url.mjs') continue;

    let text = fs.readFileSync(file, 'utf8');
    if (!text.includes(DEFAULT_SITE_URL)) continue;

    const next = text.split(DEFAULT_SITE_URL).join(TARGET);
    if (next !== text) {
        fs.writeFileSync(file, next, 'utf8');
        count++;
        console.log(`[patch-site-url] ${rel}`);
    }
}

console.log(`[patch-site-url] Patched ${count} file(s) → ${TARGET}`);
