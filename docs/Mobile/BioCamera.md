# BioCamera
Création d'une Application secondaire fonctionnent hors connexion en stockant la latitude longitude dans les métadonnées de l'image et envoi en ligne d'observation à compléter.


# Documentation BioCamera

## MainActivity.java

### Listes des méthodes

- `onCreate(Bundle savedInstanceState)` :
  - Initialise l'activité, configure l'interface utilisateur et les préférences partagées, vérifie et demande les permissions nécessaires.

- `onDestroy()` :
  - Nettoie les ressources en cours, notamment les écouteurs de changement de préférences partagées.

- `updateTypeSelectorIcon(String selectedCategory)` :
  - Met à jour l'icône du sélecteur de type en fonction de la catégorie sélectionnée (Faune, Flore, Insecte).

- `cycleObservationType()` :
  - Change le type d'observation en fonction du type actuellement sélectionné et met à jour les préférences partagées.

- `startCamera(int cameraFacing)` :
  - Initialise la caméra avec les paramètres définis, configure les écouteurs pour les boutons de capture, flash et zoom.

- `requestLocationUpdates()` :
  - Demande des mises à jour de la localisation et met à jour les TextViews de latitude et longitude avec les coordonnées actuelles.

- `convertToExifFormat(double coordinate)` :
  - Convertit les coordonnées géographiques en format EXIF (degrés, minutes, secondes).

- `takePicture(ImageCapture imageCapture)` :
  - Capture une image et sauvegarde le fichier avec les métadonnées GPS, puis déclenche le scan des médias et télécharge l'image sur Firebase.

- `uploadImageToFirebase(File file, double latitude, double longitude, double altitude)` :
  - Télécharge l'image capturée sur Firebase Storage et sauvegarde l'observation sur Firestore.

- `saveObservationToFirestore(String imageUrl, double latitude, double longitude, double altitude)` :
  - Sauvegarde les informations d'observation sur Firestore.

- `saveObservationOffline(String imageUrl, double latitude, double longitude, double altitude)` :
  - Sauvegarde les informations d'observation dans une base de données locale pour une utilisation hors ligne.

- `setFlashIcon(Camera camera)` :
  - Active ou désactive la torche (flash) de la caméra et met à jour l'icône du bouton de flash.

- `aspectRatio(int width, int height)` :
  - Détermine le meilleur ratio d'aspect (4:3 ou 16:9) en fonction des dimensions de l'affichage de la prévisualisation.

## SettingsActivity.java

### Listes des méthodes

- `onCreate(Bundle savedInstanceState)` :
  - Initialise l'activité, configure l'interface utilisateur, récupère les informations utilisateur depuis Firestore, et configure les spinners et les boutons.

- `loadUserInfo()` :
  - Charge les informations de l'utilisateur connecté depuis Firestore et met à jour le message de bienvenue.

- `setupAirportSpinner()` :
  - Configure le spinner pour les aéroports avec une liste d'aéroports disponibles et gère la sélection de l'aéroport, déclenchant le chargement des codes d'inventaire correspondants et sauvegardant la sélection.

- `setupCategorySpinner()` :
  - Configure le spinner pour les catégories avec une liste de catégories disponibles (Faune, Flore, Insecte) et gère la sélection de la catégorie, sauvegardant la sélection.

- `setupButtons()` :
  - Configure les boutons de retour et de déconnexion, définissant leurs actions respectives : revenir en arrière ou déconnecter l'utilisateur.

- `loadInventoryCodes(String airport)` :
  - Charge les codes d'inventaire spécifiques à l'aéroport sélectionné depuis Firestore et met à jour le spinner des codes d'inventaire.

- `getAirports()` :
  - Retourne une liste d'aéroports disponibles.

- `getCollectionNameForAirport(String airport)` :
  - Retourne le nom de la collection Firestore correspondant à l'aéroport sélectionné.

- `saveSelectedAirport(String airport)` :
  - Sauvegarde l'aéroport sélectionné dans les préférences partagées.

- `saveSelectedInventoryCode(String code)` :
  - Sauvegarde le code d'inventaire sélectionné dans les préférences partagées.

- `saveSelectedCategory(String category)` :
  - Sauvegarde la catégorie sélectionnée dans les préférences partagées.

- `loadSavedSelections()` :
  - Charge les sélections sauvegardées d'aéroport et de catégorie depuis les préférences partagées et met à jour les spinners correspondants.

- `loadSavedInventoryCode()` :
  - Charge le code d'inventaire sauvegardé depuis les préférences partagées et met à jour le spinner correspondant, configurant également son écouteur de sélection.

## LoginActivity.java

### Listes des méthodes

- `onCreate(Bundle savedInstanceState)` :
  - Initialise l'activité, configure l'interface utilisateur et initialise l'authentification Firebase. Configure le bouton de connexion pour déclencher la méthode de connexion.

- `loginUser()` :
  - Récupère les valeurs des champs de texte pour l'email et le mot de passe. Valide que ces champs ne sont pas vides. Si les champs sont valides, tente de connecter l'utilisateur avec Firebase Authentication. Si la connexion est réussie, lance l'activité principale (MainActivity). Si la connexion échoue, affiche un message d'erreur.

## SyncService.java

### Listes des méthodes

- `SyncService(Context context)` :
  - Constructeur de la classe SyncService. Initialise le contexte et crée une instance de SQLiteHelper pour interagir avec la base de données locale.

- `synchronize()` :
  - Effectue la synchronisation des observations locales avec Firestore. Cette méthode :
    - Récupère la catégorie sélectionnée depuis les préférences partagées.
    - Détermine le nom de la table correspondante en fonction de la catégorie sélectionnée.
    - Récupère toutes les observations de la table correspondante à l'aide de SQLiteHelper.
    - Pour chaque observation, crée un objet ContentValues avec les données de l'observation.
    - Ajoute l'observation à la collection Firestore correspondante.
    - Supprime l'observation locale après un succès de l'ajout à Firestore.
    - Affiche un toast de confirmation lorsque la synchronisation est terminée.

## SQLiteHelper.java

### Listes des méthodes

- `SQLiteHelper(Context context)` :
  - Constructeur de la classe SQLiteHelper. Initialise la base de données avec le nom `Observations.db` et la version 1.

- `onCreate(SQLiteDatabase db)` :
  - Crée les tables de la base de données pour les observations en cours (Faune, Flore, Insecte) avec leurs colonnes respectives. Chaque table contient les colonnes pour l'ID, l'aéroport, l'action, le code d'inventaire, la date, la description, l'email, l'état, l'URL de l'image, la latitude, la longitude, le nom de l'espèce, le nombre, la phase, l'espèce prédite, le score, et le statut.

- `onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion)` :
  - Met à jour la base de données en supprimant les tables existantes et en les recréant. Appelé lors d'un changement de version de la base de données.

- `insertObservation(String tableName, ContentValues values)` :
  - Insère une nouvelle observation dans la table spécifiée. Prend le nom de la table et les valeurs à insérer en paramètres.

- `getAllObservations(String tableName)` :
  - Récupère toutes les observations de la table spécifiée. Retourne un curseur contenant toutes les lignes de la table.

- `deleteObservation(String tableName, int id)` :
  - Supprime une observation de la table spécifiée basée sur l'ID. Prend le nom de la table et l'ID de l'observation à supprimer en paramètres.


# Liste des tâches :
Création d'une Application secondaire fonctionnent hors connexion en stockant la latitude longitude dans les métadonnées de l'image et envoi en ligne d'observation à compléter.

- [x] Prise de Photos
- [x] Récupération Latitude Longitude depuis puce GPS
- [x] Connexion à son compte pour fonctionnement + stockage en cache de l'utilisateur pour fonctionner hors connexion
- [x] Stockage en cache des préférence (aéroport et inventaire) l'inventaire est récupéré dynamiquement puis stocker en cache
- [x] Stockage en cache du type de taxon choisis depuis setting (Faune, Flore, Insecte)
- [x] Envoi vers la base de données Firebase au moment de la prise de la photo
- [x] Création de base de données SQLite local en cas de offline
- [x] Synchronisation entre les deux bases de données au moment de la réapparition de la connexion internet
- [x] Zoom de l'appareil photo
- [x] Implémentation du bouton de sélection du type de taxon (Faune, Flore, Insecte) sur la page principale de l'appareil pour faciliter l'usage à une main
- [ ] Refactorisation et commentaires
- [x] Documentation Développeur
- [ ] Documentation utilisateur


Optionnelles et idées (à voir après tâches principales)  :

- [ ] Multilingue
- [ ]  Reconnaissance via bouton loupe par IA en choisissant le modèle par rapport au type de Taxon sélectionnée (Faune, Flore, Insecte) si connexion disponible sinon garder observation incomplète envoyée vers SQLite

