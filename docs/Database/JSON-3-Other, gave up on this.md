# JSON – Other, gave up on this

## Normal Form Animal

/!\ Give Up for the moment

```json
{
 "form_id": "example_form_1",
 "form_label": "Example Form 1",
 "form_version": "0.1.0",
 "form": [
    {
     "field_type": "select",
     "field_label": "Choissisez une catégorie",
     "field_required": true,
     "max_choices" : true,
     "select_options": [
         {
             "id": 1,
             "label": "Plant Life"
         },
         {
             "id": 2,
             "label": "Wild Life"
         },
         {
           "id": 3,
           "label" : "Insects"
         }
     ]
   },
   {
     "field_type": "input",
     "field_label": "Nom scientifique",
     "field_hint": "Entrez le nom scientifique de l'animal",
     "field_required": true,
     "input_type": "text"
   },
   {
     "field_type": "input",
     "field_label": "Nom vernaculaire",
     "field_hint": "Entrez le nom vernaculaire de l'animal",
     "field_required": true,
     "input_type": "text"
   },
    {
     "field_type": "Genre",
     "field_label": "Choissisez un ordre",
     "field_required": true,
     "max_choices" : true,
     "select_options": [
         {
             "id": 1,
             "label": "Plant Life"
         },
         {
             "id": 2,
             "label": "Wild Life"
         },
         {
           "id": 3,
           "label" : "Insects"
         }
     ]
   },
   {
     "field_type": "Classe",
     "field_label": "Choissisez une classe",
     "field_required": true,
     "max_choices" : true,
     "select_options": [
         {
             "id": 1,
             "label": "Gastéropodes"
         },
         {
             "id": 2,
             "label": "Arachnides"
         },
         {
           "id": 3,
           "label" : "Crustacé"
         },
         {
             "id": 4,
             "label": "Myriapodes"
         },
         {
             "id": 5,
             "label": "Insectes"
         },
         {
           "id": 6,
           "label" : "Ostéichtyens"
         },
         {
             "id": 7,
             "label": "Amphibien"
         },
         {
             "id": 8,
             "label": "Reptiles"
         },
         {
           "id": 9,
           "label" : "Mammifères"
         },
         {
             "id": 10,
             "label": "Oiseaux"
         },
         {
             "id": 11,
             "label": "Insectes"
         },
         {
           "id": 12,
           "label" : "Ostéichtyens"
         },
     ]
   },
   {
     "field_type": "Ordre",
     "field_label": "Choissisez une Ordre",
     "field_required": true,
     "max_choices" : true,
     "select_options": [
         {
             "id": 1,
             "label": "Isopodes"
         },
         {
             "id": 2,
             "label": "Décapodes"
         },
         {
           "id": 3,
           "label" : "Odonates"
         },
         {
             "id": 4,
             "label": "Dictyopères"
         },
         {
             "id": 5,
             "label": "Orthoptères"
         },
         {
           "id": 6,
           "label" : "Hémiptères"
         },
         {
             "id": 7,
             "label": "Diptères"
         },
         {
             "id": 8,
             "label": "Hyménoptères"
         },
         {
           "id": 9,
           "label" : "Salmoniformes"
         },
         {
             "id": 10,
             "label": "Cypriniformes"
         },
         {
             "id": 11,
             "label": "Urodèles"
         },
         {
           "id": 12,
           "label" : "Squamates sauriens"
         },
         {
             "id": 13,
             "label": "Squamates ophidiens"
         },
         {
             "id": 14,
             "label": "Chéloniens"
         },
         {
           "id": 15,
           "label" : "Insectivores"
         },
         {
             "id": 16,
             "label": "Chiroptères"
         },
         {
             "id": 17,
             "label": "Dermoptères"
         },
         {
           "id": 18,
           "label" : "Hyracoïdes"
         },
         {
             "id": 19,
             "label": "Carnivores"
         },
         {
             "id": 20,
             "label": "Pinnipèdes"
         },
         {
           "id": 21,
           "label" : "Rongeurs"
         },
         {
             "id": 22,
             "label": "Macroscélidés"
         },
         {
             "id": 23,
             "label": "Lagomorphes"
         },
         {
           "id": 24,
           "label" : "Artiodactyles"
         },
         {
             "id": 25,
             "label": "Périssodactyles"
         },
         {
             "id": 26,
             "label": "Cétacés"
         },
         {
           "id": 27,
           "label" : "Monotrèmes"
         },
         {
             "id": 28,
             "label": "Pholidotes"
         },
         {
             "id": 29,
             "label": "Proboscidiens"
         },
         {
           "id": 30,
           "label" : "Scandencia"
         },
         {
             "id": 31,
             "label": "Siréniens"
         },
         {
             "id": 32,
             "label": "Tubulidentés"
         },
         {
           "id": 33,
           "label" : "Xénarthres"
         },
         {
           "id": 34,
           "label" : "Pélécaiformes"
         },
         {
             "id": 35,
             "label": "Ciconiiformes"
         },
         {
             "id": 36,
             "label": "Phoenicoptériformes"
         },
         {
           "id": 37,
           "label" : "Ansériformes"
         },
         {
             "id": 38,
             "label": "Accipitriformes"
         },
         {
             "id": 40,
             "label": "Falconiformes"
         },
         {
           "id": 41,
           "label" : "Galliformes"
         },
          {
           "id": 42,
           "label" : "Charadriiformes"
         },
         {
             "id": 43,
             "label": "Columbiformes"
         },
         {
             "id": 44,
             "label": "Cuculiformes"
         },
         {
           "id": 45,
           "label" : "Strigiformes"
         },
         {
             "id": 46,
             "label": "Apodiformes"
         },
         {
             "id": 47,
             "label": "Coraciiformes"
         },
         {
           "id": 48,
           "label" : "Piciformes"
         },
         {
             "id": 49,
             "label": "Passériformes"
         },
         {
          "id": 50,
          "label": "Pulmonés"
         }
     ]
   },
   {
     "field_type": "Famille",
     "field_label": "Choissisez une famille",
     "field_required": true,
     "max_choices" : true,
     "select_options": [
         {
             "id": 1,
             "label": "lulidés"
         },
         {
             "id": 2,
             "label": "Salmonidés"
         },
         {
           "id": 3,
           "label" : "Cyprindés"
         },
         {
             "id": 4,
             "label": "Salamandridés"
         },
         {
             "id": 5,
             "label": "Bufonidés"
         },
         {
           "id": 6,
           "label" : "Ranidés"
         },
         {
             "id": 7,
             "label": "Hylidés"
         },
         {
             "id": 8,
             "label": "Lacertidés"
         },
         {
           "id": 9,
           "label" : "Geckonidés"
         },
         {
             "id": 10,
             "label": "Anguidés"
         },
         {
             "id": 11,
             "label": "Scincidés"
         },
         {
           "id": 12,
           "label" : "Colubridés"
         },
         {
             "id": 13,
             "label": "Vipéridés"
         },
         {
             "id": 14,
             "label": "Testudidés"
         },
         {
           "id": 15,
           "label" : "Erinacéidés"
         },
         {
             "id": 16,
             "label": "Talpidés"
         },
         {
             "id": 17,
             "label": "Soricidés"
         },
         {
           "id": 18,
           "label" : "Molossidés"
         },
         {
             "id": 19,
             "label": "Rhinolophidés"
         },
         {
             "id": 20,
             "label": "Vespertilionidés"
         },
         {
           "id": 21,
           "label" : "Canidés"
         },
         {
             "id": 22,
             "label": "Ursidés"
         },
         {
             "id": 23,
             "label": "Mustélidés"
         },
         {
           "id": 24,
           "label" : "Viverridés"
         },
         {
             "id": 25,
             "label": "Félidés"
         },
         {
             "id": 26,
             "label": "Procyonidés"
         },
         {
           "id": 27,
           "label" : "Sciuridés"
         },
         {
             "id": 28,
             "label": "Castoridés"
         },
         {
             "id": 29,
             "label": "Gliridés"
         },
         {
           "id": 30,
           "label" : "Arvicolidés"
         },
         {
             "id": 31,
             "label": "Muridés"
         },
         {
             "id": 32,
             "label": "Myocastoridés"
         },
         {
           "id": 33,
           "label" : "Hystricidés"
         },
          {
             "id": 34,
             "label": "Léporidés"
         },
         {
             "id": 35,
             "label": "Suidés"
         },
         {
           "id": 36,
           "label" : "Cervidés"
         },
         {
             "id": 37,
             "label": "Bovidés"
         },
         {
             "id": 38,
             "label": "Equidés"
         },
         {
           "id": 39,
           "label" : "Phalocrocoracidés"
         },
         {
           "id": 40,
           "label" : "Ardéidés"
         },
          {
             "id": 41,
             "label": "Ciconiidés"
         },
         {
             "id": 42,
             "label": "Anatidés"
         },
         {
           "id": 43,
           "label" : "Accipitridés"
         },
         {
             "id": 44,
             "label": "Falconidés"
         },
         {
             "id": 45,
             "label": "Tétraonidés"
         },
         {
           "id": 46,
           "label" : "Phasianidés"
         },
          {
           "id": 47,
           "label" : "Numinidés"
         },
          {
             "id": 48,
             "label": "Méléagrides"
         },
         {
             "id": 49,
             "label": "Rallidés"
         },
         {
           "id": 50,
           "label" : "Charadriidés"
         },
         {
             "id": 51,
             "label": "Laridés"
         },
         {
             "id": 52,
             "label": "Recuvirostridés"
         },
         {
           "id": 53,
           "label" : "Scolopacidés"
         },
          {
           "id": 54,
           "label" : "Sternidés"
         },
          {
             "id": 55,
             "label": "Culumbidés"
         },
         {
             "id": 56,
             "label": "Cuculidés"
         },
         {
           "id": 57,
           "label" : "Tytonidés"
         },
         {
             "id": 58,
             "label": "Strigidés"
         },
         {
             "id": 59,
             "label": "Apodidés"
         },
         {
           "id": 60,
           "label" : "Alcénidés"
         },
          {
           "id": 61,
           "label" : "Upudidés"
         },
          {
             "id": 62,
             "label": "Picidés"
         },
         {
             "id": 63,
             "label": "Alaudidés"
         },
         {
           "id": 64,
           "label" : "Cinclidés"
         },
         {
             "id": 65,
             "label": "Turdidés"
         },
         {
             "id": 66,
             "label": "Fringillidés"
         },
         {
           "id": 67,
           "label" : "Motacillidés"
         },
          {
           "id": 68,
           "label" : "Lanidés"
         },
          {
             "id": 69,
             "label": "Paridés"
         },
         {
             "id": 70,
             "label": "Corvidés"
         },
         {
           "id": 71,
           "label" : "Sturnidés"
         },
         {
             "id": 72,
             "label": "Passéridés"
         },
         {
             "id": 73,
             "label": "Prunellidés"
         },
         {
           "id": 74,
           "label" : "Sylviidés"
         },
         {
           "id": 75,
           "label" : "Trichodromadidés"
         }
         
     ]
   },
   {
     "field_type": "input",
     "field_label": "Description",
     "field_hint": "Entrez la description de l'animal",
     "field_required": true,
     "input_type": "text"
   }
```

> - Manque la classification des plantes

## Compact forum with completion

/!\ Give Up

```json
{
    "form_id": "example_form_1",
    "form_label": "Example Form 1",
    "form_version": "0.1.0",
    "form": [
       {
        "field_type": "select",
        "field_label": "Choissisez une catégorie",
        "field_required": true,
        "max_choices" : true,
        "select_options": [
            {
                "id": 1,
                "label": "Plant Life"
            },
            {
                "id": 2,
                "label": "Animal",
                "classe": [
                 {
                   "id": 1,
                   "label": "Gastéropodes",
                   "ordre": [
                     {
                       "id": 1.1,
                       "label": "Pulmonés"
                     }
                   ]
                 },
                 {
                   "id": 2,
                   "label": "Arachnides"
                 },
                 {
                   "id": 3,
                   "label": "Crustacés",
                   "ordre": [
                     {
                     "id": 3.1,
                     "label": "Isopodes"
                     },
                     {
                       "id": 3.2,
                       "label": "Décapodes"
                     }
                   ]
                 },
                 {
                   "id": 4,
                   "label": "Myriapodes"
                 }
                ]
            },
            {
                "id": 3,
                "label": "Insectes",
                "classe" : [
                    {
                        "id": 1.1,
                        "label": "Odonates"
                    },
                    {
                        "id": 1.2,
                        "label": "Dictyopères"
                    },
                    {
                        "id": 1.3,
                        "label": "Orthoptères"
                      },
                      {
                        "id": 1.4,
                        "label": "Hémiptères"
                      },
                      {
                        "id": 1.5,
                        "label": "Diptères"
                      },
                      {
                        "id": 1.6,
                        "label": "Hyménoptères"
                      },
                      {
                        "id": 1.5,
                        "label": "Coléoptères"
                      },
                      {
                        "id": 1.6,
                        "label": "Lépidoptères"
                      }
                ]
            } 
        ]
      }
    ]
}
```
