# 🚀 Deployment Guide: apps.sheikhhussien.com

## Prerequisites
- Node.js 18+
- npm or yarn
- Cloudflare account (for hosting)
- Domain: sheikhhussien.com (configured in Cloudflare)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## DNS Configuration (Cloudflare)

Add these DNS records to your Cloudflare dashboard:

```
Type: CNAME
Name: apps
Content: [your-vercel-deployment].vercel.app
TTL: Auto
Proxy status: Proxied
```

Or if using Cloudflare Workers:

```
Type: CNAME  
Name: apps
Content: [your-worker-subdomain].workers.dev
TTL: Auto
```

## Deployment to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Follow prompts:
# Project name: apps-sheikhhussien
# Framework: Vite
# Build command: npm run build
# Output directory: dist
```

## Deployment to Cloudflare Workers

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Update wrangler.toml with your IDs
# Then deploy
wrangler publish
```

## Integration with Norhan App

The landing page at `apps.sheikhhussien.com/` shows Norhan app.
Clicking "Launch App" redirects to `apps.sheikhhussien.com/norhan`
which iframes the Norhan server at `http://localhost:8888`

For production, update the iframe URL:
```tsx
// In src/App.tsx
src="https://norhan-server.sheikhhussien.com/" // Your Norhan deployment
```

## Environment Variables

Create `.env.local`:
```
VITE_NORHAN_API=http://localhost:8888
VITE_CWC_API=https://api.cwc.plus
```

## Post-Deployment

1. ✅ Visit https://apps.sheikhhussien.com
2. ✅ Verify landing page loads (glassmorphic cards visible)
3. ✅ Click "Norhan Therapy" → Should launch app
4. ✅ Check browser console for errors
5. ✅ Monitor Cloudflare Analytics

## Troubleshooting

**Landing page not loading?**
- Check Cloudflare DNS records
- Verify build output: `npm run build`
- Check browser console (F12)

**Norhan app not loading?**
- Ensure Norhan server running on http://localhost:8888
- Or update iframe src to your production Norhan URL
- Check CORS headers

**Styling issues?**
- Clear browser cache (Ctrl+Shift+Delete)
- Verify Tailwind build: `npm run build`
- Check dark mode toggle

## Monitoring

- Cloudflare Dashboard: Analytics
- Vercel Dashboard: Deployments, Analytics
- Norhan Server Logs: `/tmp/norhan_v6_prod.log`
