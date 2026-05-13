Remplacer la série « Écran » par « Encres » partout dans le site.

## Changements

1. **Renommer la route** : `src/routes/ecran.tsx` → `src/routes/encres.tsx`
   - `createFileRoute("/ecran")` → `createFileRoute("/encres")`
   - Composant `Ecran` → `Encres`
   - Tous les libellés visibles et métadonnées SEO (title, description, og:title, og:description, PageHeader, labels des placeholders) passent de « Écran » à « Encres »

2. **Mettre à jour la navigation** : `src/components/site/Header.tsx`
   - `{ to: "/ecran", label: "Écran" }` → `{ to: "/encres", label: "Encres" }`

3. **Texte d'intro** : ajuster la phrase d'introduction pour qu'elle parle d'encres plutôt que de la série Écran (texte court, à remplacer plus tard par le vrai texte de Christine).

Aucune autre page ne référence « Écran ». Le `routeTree.gen.ts` sera régénéré automatiquement par le plugin TanStack.
