# JSON – Default Olga forms

## Faune

### Espèce Protégée

>```json
>{
>  "form_id": "Specie_Protected",
>  "form_label": "Form for protected species",
>  "form_version": "0.1.0",
>  "form": [
>    {
>      "field_type": "picturepicker",
>      "field_label": "selectionner une photo",
>      "field_required": true
>    },
>    {
>      "field_type": "recognition",
>      "specie_type": "faune"
>    },
>    {
>      "field_type": "input",
>      "field_label": ", Confidence 0.0",
>      "field_hint": ", Confidence 0.0",
>      "field_required": true,
>      "input_type": "text",
>      "field_key": "score"
>    },
>    {
>      "field_type": "select",
>      "field_label": "choisir une espèce",
>      "field_required": true,
>      "input_multi": false,
>      "field_key": "nom espece",
>      "select_options": []
>    },
>    {
>      "field_type": "select",
>      "field_label": "choisir un inventaire",
>      "field_required": true,
>      "input_multi": false,
>      "field_key": "codeInventaire",
>      "select_options": [
>        {
>          "id": 1,
>          "label": "inventaire 1"
>        },
>        {
>          "id": 2,
>          "label": "inventaire 2"
>        },
>        {
>          "id": 3,
>          "label": "inventaire 3"
>        }
>      ]
>    },
>    {
>      "field_type": "datetimepicker",
>      "field_label": "Date et Heure de l'observation",
>      "field_hint": "Entrer la date et l'heure de l'observation",
>      "field_required": true,
>      "field_key": "date"
>    },
>    {
>      "field_type": "select",
>      "field_label": "Choisir un stade",
>      "field_required": true,
>      "input_multi": false,
>      "field_key": "phase",
>      "select_options": [
>        {
>          "id": 1,
>          "label": "Germination"
>        },
>        {
>          "id": 2,
>          "label": "Development"
>        },
>        {
>          "id": 3,
>          "label": "Pollination"
>        },
>        {
>          "id": 4,
>          "label": "Fructification"
>        }
>      ]
>    },
>    {
>      "field_type": "input",
>      "field_label": "Individus observés",
>      "field_hint": "Entrer le nombre d'individus observés",
>      "field_required": true,
>      "input_type": "integer",
>      "field_key": "nombre"
>    },
>    {
>      "field_type": "select",
>      "field_label": "choisir un stade du développement",
>      "field_required": true,
>      "input_multi": false,
>      "field_key": "etat",
>      "select_options": [
>        {
>          "id": 1,
>          "label": "In development"
>        },
>        {
>          "id": 2,
>          "label": "State 1"
>        },
>        {
>          "id": 3,
>          "label": "State 2"
>        }
>      ]
>    },
>    {
>      "field_type": "select",
>      "field_label": "choisir une action",
>      "field_required": true,
>      "input_multi": false,
>      "field_key": "action",
>      "select_options": [
>        {
>          "id": 1,
>          "label": "Action 1"
>        },
>        {
>          "id": 2,
>          "label": "Action 2"
>        },
>        {
>          "id": 3,
>          "label": "Action 3"
>        }
>      ]
>    },
>    {
>      "field_type": "input",
>      "field_label": "Commentaires",
>      "field_hint": "Description ...",
>      "field_required": true,
>      "input_type": "text",
>      "field_key": "description"
>    }
>  ]
>}
>```

Todo :
>
> - Find out what the Text "Confidence: 0.0" is used for, is it an input or a notice ?
>   - Confidence is the score of recognition IA when it use. User doesn't enter any value but currently this value is stored in database.
>   - Need to be link with the response of API
> - Choisir espèce, link to database
> - Replace Inventaire 1, Inventaire 2 and Inventaire 3 with the actual inventories
> - Create and add the buttons "Connecter à un appareil" and "Reconnaissance Automatique"
> - Date & Datetime have by default the current date & time of device.

### Espèce Invasive

> ```json
> json
> ```

### Espèce Courante

> ```json
> json
> ```

### Espèce Inconnue

> ```json
> json
> ```

## Flore

### Espèce Protégé

> ```json
> json
> ```

### Espèce Invasive

> ```json
> json
> ```

### Espèce Courante

> ```json
> json
> ```

### Espèce Inconnue

> ```json
> json
> ```

## Insectes

### Espèce Protégé

> ```json
> json
> ```

### Espèce Invasive

> ```json
> json
> ```

### Espèce Courante

> ```json
> json
> ```

### Espèce Inconnue

> ```json
> json
> ```

## New Specie
>
>```json
> {
>  "form_id": "example_form_1",
>  "form_label": "Example Form 1",
>  "form_version": "0.1.0",
>  "form": [
>    {
>      "field_type": "select",
>      "field_label": "Choisissez une catégorie",
>      "field_required": true,
>      "input_multi": false,
>      "field_key": "type",
>      "select_options": [
>        {
>          "id": 1,
>          "label": "Plant life"
>        },
>        {
>          "id": 2,
>          "label": "Wildlife"
>        },
>        {
>          "id": 3,
>          "label": "Insects"
>        }
>      ]
>    },
>    {
>      "field_type": "input",
>      "field_label": "Nom scientifique",
>      "field_hint": "Entrez le nom scientifique de l'animal",
>      "field_required": true,
>      "input_type": "text",
>      "field_key": "Nom scientifique"
>    },
>    {
>      "field_type": "input",
>      "field_label": "Nom vernaculaire",
>      "field_hint": "Entrez le nom vernaculaire de l'animal",
>      "field_required": true,
>      "input_type": "text",
>      "field_key": "Nom français"
>    },
>    {
>      "field_type": "input",
>      "field_label": "Embranchement",
>      "field_hint": "Entrez l'embranchement de l'animal",
>      "field_required": true,
>      "input_type": "text",
>      "field_key": "embranchement"
>    },
>    {
>      "field_type": "input",
>      "field_label": "Classe",
>      "field_hint": "Entrez la classe de l'animal",
>      "field_required": true,
>      "input_type": "text",
>      "field_key": "classe"
>    },
>    {
>      "field_type": "input",
>      "field_label": "Ordre",
>      "field_hint": "Entrez l'ordre de l'animal",
>      "field_required": true,
>      "input_type": "text",
>      "field_key": "ordre"
>    },
>    {
>      "field_type": "input",
>      "field_label": "Famille",
>      "field_hint": "Entrez la famille de l'animal",
>      "field_required": true,
>      "input_type": "text",
>      "field_key": "famille"
>    },
>    {
>      "field_type": "input",
>      "field_label": "Description",
>      "field_hint": "Entrez la description",
>      "field_required": true,
>      "input_type": "text",
>      "field_key": "description"
>    }
>  ]
>}
>```

## New Inventory

>```json
> {
>    "form_id": "example_form_1",
>    "form_label": "Example Form 1",
>    "form_version": "0.1.0",
>    "form": [
>        {
>            "field_type": "input",
>            "field_label": "Code Inventaire",
>            "field_hint": "Entrer un code d'inventaire",
>            "field_required": true,
>            "input_type": "text",
>            "field_key": "code"
>        },
>        {
>            "field_type": "datepicker",
>            "field_label": "Entrer la date de début",
>            "field_hint": "Entrer la date de début",
>            "field_required": true,
>            "field_key": "date_début"
>        },
>        {
>            "field_type": "datepicker",
>            "field_label": "Entrer la date d'expiration",
>            "field_hint": "Entrer la date d'expiration'",
>            "field_required": true,
>            "field_key": "date_fin"
>        },
>        {
>            "field_type": "select",
>            "field_label": "Membre de l'équipe",
>            "field_required": true,
>            "max_choices": true,
>            "field_key": "membres",
>            "select_options": [
>                {
>                    "id": 1,
>                    "label": "Belaiche Reda"
>                },
>                {
>                    "id": 2,
>                    "label": "Abdelghani Chibani"
>                }
>            ]
>        }
>    ]
>}
>```
