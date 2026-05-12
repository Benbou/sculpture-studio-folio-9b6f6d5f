## Objectif

Refaire le site de Christine Bouquet, artiste sculptrice, en portfolio moderne et épuré (esprit galerie d'art / musée), avec des emplacements à remplir plus tard pour les photos et textes.

## Pages

Chaque page = une route TanStack dédiée (bonne pour SEO et partage), avec son propre titre/description.

```
/                 Accueil — image hero, nom, baseline, accès aux sections
/portrait         Bio, parcours, démarche artistique
/galerie          Portfolio des sculptures, organisé par matériau
/fonderie         Atelier & processus de création (texte + images)
/ecran            Nouvelle page « Écran » (œuvres dédiées)
/cyanotype        Nouvelle page « Cyanotype » (œuvres dédiées)
/expositions      Expositions passées et à venir + presse
/contact          Coordonnées + formulaire simple (mailto pour commencer)
```

Une barre de navigation partagée présente dans toutes les pages, plus un pied de page minimal (nom, année, mentions).

## Galerie — organisation par matériau

Page `/galerie` avec onglets/filtres en haut :

- Bronze
- Terre
- Résine
- Plâtre
- Autres

(catégories ajustables — je les mettrai modifiables facilement dans le code)

Chaque œuvre = vignette dans une grille aérée → clic ouvre une vue agrandie (lightbox) avec titre, matériau, dimensions, année, courte description.

Pour l'instant : placeholders élégants (cadres gris clair avec « Œuvre à venir ») afin que la mise en page soit prête à recevoir tes vraies photos.

## Direction visuelle — galerie d'art épurée

- Fond crème/blanc cassé, beaucoup d'espace blanc
- Typographie : un serif élégant pour les titres (esprit éditorial), un sans-serif fin pour le texte
- Accent discret (un seul, sobre — type encre noire ou bordeaux profond très contenu)
- Images mises en valeur, pas de surcharge décorative
- Animations très subtiles (fondus au défilement)
- Navigation horizontale claire, responsive mobile

## Contenu

Comme rien n'est prêt :

- Textes : faux-textes courts mais crédibles (bio, démarche, descriptifs) marqués comme remplaçables
- Images : placeholders gris monochrome avec libellé du contenu attendu (ex. « Sculpture bronze — 2023 »)
- Liste expositions : tableau vide avec 2-3 lignes d'exemple
- Formulaire contact : champs nom/email/message → envoi par mailto pour démarrer (on pourra connecter un vrai envoi plus tard)

## Détails techniques (pour info)

- TanStack Start, une route par page sous `src/routes/`
- Tokens de design (couleurs, polices) centralisés dans `src/styles.css`
- Composants partagés : `Header`, `Footer`, `WorkCard`, `Lightbox`
- Pas de backend nécessaire pour l'instant (pas de Lovable Cloud)
- Métadonnées SEO (title, description, og) propres à chaque page
- Responsive mobile/tablette/desktop

## Hors scope

- Pas de boutique / paiement
- Pas de connexion / espace privé
- Pas d'envoi d'email réel pour le moment (mailto seulement)

Une fois le squelette en place, tu pourras m'envoyer les photos et textes au fur et à mesure et je remplacerai les placeholders.