## Objectif

Déployer automatiquement le site sur **Cloudflare Workers** à chaque push sur `main` depuis GitHub, sans toucher à la stack actuelle. Lovable continue d'éditer normalement, GitHub reçoit les commits, Cloudflare déploie. Gratuit, custom domain inclus, SSL automatique.

⚠️ **Important** : on ignore les instructions Cloudflare **Pages** que tu as collées — elles cassent le projet (pas de `app.config.ts`, le plugin Lovable force Workers, pas Pages). Workers fait exactement la même chose et c'est déjà configuré.

## Étapes

### 1. Préparer Cloudflare (côté toi, ~5 min)
1. Créer un compte gratuit sur [cloudflare.com](https://cloudflare.com) si pas déjà fait.
2. Récupérer ton **Account ID** : dashboard Cloudflare → Workers & Pages → côté droit, copier l'Account ID.
3. Créer un **API Token** : My Profile → API Tokens → Create Token → template "Edit Cloudflare Workers" → Continue → Create. Copier le token (visible une seule fois).

### 2. Connecter Lovable à GitHub (si pas déjà fait)
Dans Lovable : menu `+` (en bas à gauche du chat) → GitHub → Connect project → créer le repo.

### 3. Ajouter les secrets dans GitHub (côté toi)
Repo GitHub → Settings → Secrets and variables → Actions → New repository secret. Ajouter :
- `CLOUDFLARE_API_TOKEN` = le token créé à l'étape 1.3
- `CLOUDFLARE_ACCOUNT_ID` = l'Account ID de l'étape 1.2

### 4. Création du workflow (ce que je ferai en build mode)
Je crée **un seul fichier** : `.github/workflows/deploy.yml`. Il :
- se déclenche à chaque push sur `main`
- installe les dépendances avec bun
- lance `bun run build`
- déploie via `wrangler deploy` avec les secrets GitHub

Aucun autre fichier touché. `wrangler.jsonc`, `vite.config.ts`, `src/server.ts` restent identiques.

### 5. Premier déploiement
Au premier push après le merge du workflow, Cloudflare crée automatiquement le Worker `sculpture-studio-folio` (nom déjà dans `wrangler.jsonc`). URL par défaut : `sculpture-studio-folio.<ton-subdomain>.workers.dev`.

### 6. Custom domain (côté toi, dans Cloudflare dashboard)
Workers & Pages → ton worker → Settings → Domains & Routes → Add → Custom Domain → entrer ton domaine. Cloudflare gère DNS + SSL automatiquement (instantané si le domaine est déjà sur Cloudflare, sinon ajouter un CNAME chez ton registrar).

## Détails techniques

- **Coût** : 100 000 requêtes/jour gratuit, largement suffisant pour un site portfolio.
- **Stack inchangée** : TanStack Start + Workers + plugin Lovable. Lovable preview continue de fonctionner sur `*.lovable.app`.
- **Sync bidirectionnel** : tu modifies dans Lovable → push auto sur GitHub → workflow trigger → déploie sur Cloudflare. Tu peux aussi modifier directement sur GitHub, ça reviendra dans Lovable.
- **Pas de `wrangler.toml`** : on garde `wrangler.jsonc` (le plugin Lovable et Wrangler v3+ gèrent les deux).
- **Rollback** : Cloudflare Workers garde un historique des déploiements (Deployments tab).

## Ce qu'il faut que tu prépares avant que je passe en build mode

- [ ] Compte Cloudflare créé
- [ ] Account ID copié
- [ ] API Token "Edit Cloudflare Workers" généré
- [ ] Repo GitHub connecté à Lovable
- [ ] Les 2 secrets GitHub ajoutés (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`)

Dis-moi quand c'est prêt (ou approuve directement le plan, je crée le workflow).
