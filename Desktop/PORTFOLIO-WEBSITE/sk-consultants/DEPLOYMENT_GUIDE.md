# 🚀 MA BYTES Website - Deployment Guide (Free)

## Step 1: GitHub Pe Code Push Karo

### Option A: New Repository Banana (Recommended)
1. GitHub.com pe jao aur login karo
2. New repository create karo:
   - Name: `mabytes-website` ya `mabytes-portfolio`
   - Public select karo
   - Initialize with README **MAT KARO**
3. Terminal mein ye commands run karo:

```bash
# Current remote remove karo (agar old repo hai)
git remote remove origin

# New repository URL add karo (apna username use karo)
git remote add origin https://github.com/YOUR_USERNAME/mabytes-website.git

# Sab files add karo
git add .

# Commit karo
git commit -m "Initial commit: MA BYTES portfolio website"

# Push karo
git push -u origin main
```

### Option B: Existing Repository Use Karna
Agar existing repo use karna hai, toh:
```bash
git add .
git commit -m "Update: MA BYTES website complete"
git push origin main
```

---

## Step 2: Free Hosting Setup (Best Options)

### 🎯 Option 1: Netlify (RECOMMENDED - Sabse Best)

**Kyun Netlify?**
- ✅ Free SSL certificate (automatic)
- ✅ Free custom domain support
- ✅ Easy deployment
- ✅ Fast CDN
- ✅ Free subdomain: `yoursite.netlify.app`

**Steps:**

1. **Netlify Account Banao:**
   - https://www.netlify.com/ pe jao
   - "Sign up" pe click karo
   - "Sign up with GitHub" select karo (easiest)

2. **New Site Create Karo:**
   - Dashboard mein "Add new site" → "Import an existing project"
   - GitHub select karo
   - Apna repository select karo (`mabytes-website`)

3. **Build Settings Configure Karo:**
   ```
   Build command: npm run build
   Publish directory: build
   ```

4. **Deploy!**
   - "Deploy site" pe click karo
   - 2-3 minutes mein site live ho jayegi
   - Free URL milegi: `yoursite.netlify.app`

5. **Custom Domain Add Karo (Step 3 mein details)**

---

### 🎯 Option 2: Vercel (Also Great)

**Steps:**
1. https://vercel.com/ pe sign up karo (GitHub se)
2. "Add New Project" click karo
3. GitHub repository select karo
4. Auto-detect hoga - "Deploy" click karo
5. Free URL: `yoursite.vercel.app`

---

### 🎯 Option 3: GitHub Pages (Free but Limited)

**Steps:**
1. Repository settings mein jao
2. "Pages" section mein
3. Source: "GitHub Actions" select karo
4. Free URL: `username.github.io/mabytes-website`

---

## Step 3: Free Domain Options

### Option A: Free Subdomain (Instant, No Cost)
**Netlify/Vercel automatically free subdomain dete hain:**
- `mabytes.netlify.app` ✅
- `mabytes.vercel.app` ✅

**Ye pehle use karo, baad mein custom domain add kar sakte ho!**

---

### Option B: Free Custom Domain (Limited Options)

#### 1. Freenom (.tk, .ml, .ga domains)
⚠️ **Not Recommended for Business** - Unreliable

Steps:
- https://www.freenom.com/ pe jao
- Free domain search karo (e.g., `mabytes.tk`)
- Add to cart → Get Now (free)
- Domain management se DNS settings configure karo

#### 2. GitHub Student Pack (Agar student ho)
- Free domain: Namecheap se free domain mil sakta hai
- https://education.github.com/pack

#### 3. Free Tier Services
- Some services offer free domain with hosting

---

### Option C: Paid Domain (Recommended for Business)
**Best Options (Affordable):**
- **Namecheap**: ~$10-15/year (.com domain)
- **GoDaddy**: ~$12-15/year
- **Google Domains**: ~$12/year

**Yeh professional lagta hai aur reliable hai!**

---

## Step 4: Domain Ko Hosting Se Connect Karna

### Netlify Pe Custom Domain Add Karna:

1. **Netlify Dashboard mein:**
   - Site settings → "Domain management"
   - "Add custom domain" click karo
   - Apna domain name enter karo (e.g., `mabytes.com`)

2. **DNS Records Configure Karo:**
   
   **Agar domain Freenom se hai:**
   - Freenom DNS settings mein jao
   - Netlify ke nameservers add karo:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```
   
   **Ya phir A Record add karo:**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5 (Netlify IP)
   
   Type: CNAME
   Name: www
   Value: yoursite.netlify.app
   ```

3. **SSL Certificate:**
   - Netlify automatically free SSL provide karta hai
   - 24-48 hours mein activate ho jayega

---

### Vercel Pe Custom Domain:

1. Project settings → "Domains"
2. Domain add karo
3. DNS records configure karo (similar to Netlify)

---

## Step 5: Build Configuration (Important!)

### Netlify Build Settings:

Repository mein `netlify.toml` file create karo:

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel Build Settings:

Vercel automatically detect karta hai, but agar manually karna ho:
- `vercel.json` file:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## Step 6: Environment Variables (If Needed)

Agar koi API keys ya secrets use kar rahe ho:
- Netlify: Site settings → Environment variables
- Vercel: Project settings → Environment variables

---

## Quick Start Checklist:

- [ ] GitHub pe code push karo
- [ ] Netlify/Vercel account banao
- [ ] Repository connect karo
- [ ] Build settings configure karo
- [ ] Deploy karo
- [ ] Free subdomain test karo
- [ ] (Optional) Custom domain add karo
- [ ] SSL certificate verify karo (automatic)

---

## Recommended Path:

1. **Pehle:** Free Netlify subdomain use karo (`mabytes.netlify.app`)
2. **Test karo:** Sab kuch theek se kaam kar raha hai
3. **Phir:** Custom domain add karo (agar budget hai)
4. **Update:** Website content mein domain URLs update karo

---

## Support & Resources:

- **Netlify Docs:** https://docs.netlify.com/
- **Vercel Docs:** https://vercel.com/docs
- **React Deployment:** https://create-react-app.dev/docs/deployment/

---

## Notes:

- Free hosting ka limitation: Build time limits (Netlify: 300 min/month)
- Free domains (.tk, .ml) reliable nahi hain business ke liye
- SSL certificate automatically free milta hai
- CDN automatic included hai (fast loading)

---

**Best Approach:**
1. Netlify free hosting use karo (easiest)
2. Free subdomain pe start karo
3. Baad mein custom domain add kar sakte ho
4. Professional lagne ke liye paid domain lena better hai ($10-15/year)

