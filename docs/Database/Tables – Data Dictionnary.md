### Form

No structure

&nbsp;

#### Observation Faune

No structure

&nbsp;

#### Observation Flore

No structure

&nbsp;

#### Observation Insect

No structure

&nbsp;

### Specie

| Nom                       | Type        | Description                                | Taille | Cle     |
|---------------------------|-------------|--------------------------------------------|--------|---------|
| ID                        | Int         | Unique ID                                  | 10     |PRIMARY  |
| Specie_ID                 | Int         | Unique ID of specie                        | 10     |PRIMARY  |
| Scientific_name           | Text        | Scientific name of the species             | 200    |         |
| French_vernacular_name    | Text        | Common name of the species in french       | 100    |         |
| English_vernacular_name   | Text        | Common name of the species in english      | 100    |         |
| Italian_vernacular_name   | Text        | Common name of the species in italian      | 100    |         |
| Romania_vernacular_name   | Text        | Common name of the species in romania      | 100    |         |
| Genus                     | Int         | Species class                              | 10     | FOREIGN |
| Class                     | Int         | Species class                              | 10     | FOREIGN |
| Order                     | Int         | Order of the species                       | 10     | FOREIGN |
| Family                    | Int         | Species family                             | 10     | FOREIGN |
| Kingdom                   | Int         | Species kingdom                            | 10     | FOREIGN |
| Status                    | Int         | Species Status                             | 10     | FOREIGN |
| Type                      | Int         | Species Type                               | 10     | FOREIGN |

&nbsp;

#### Class

| Nom                   | Type        | Description                          | Taille | Cle     |
|-----------------------|-------------|--------------------------------------|--------|---------|
| Class_ID              | Int         | Unique ID of the class of a species  | 10     |PRIMARY  |
| Class_name            | Text        | Class name of the species            | 100    |         |
| Vernacular_class_name | Text        | Vernacular class name of the species | 100    |         |

&nbsp;

#### Order

| Nom                   | Type        | Description                          | Taille | Cle     |
|-----------------------|-------------|--------------------------------------|--------|---------|
| Order_ID              | Int         | Unique ID of the order of a species  | 10     |PRIMARY  |
| Order_name            | Text        | Order name of the species            | 100    |         |
| Vernacular_order_name | Text        | Vernacular order name of the species | 100    |         |

&nbsp;

##### Family

| Nom                    | Type        | Description                           | Taille | Cle     |
|------------------------|-------------|---------------------------------------|--------|---------|
| Family_ID              | Int         | Unique ID of the family of a species  | 10     |PRIMARY  |
| Family_name            | Text        | Family name of the species            | 100    |         |
| Vernacular_family_name | Text        | Vernacular family name of the species | 100    |         |

&nbsp;

##### Genus

| Nom                   | Type        | Description                            | Taille  | Cle     |
|-----------------------|-------------|----------------------------------------|---------|---------|
| Genus_ID              | Int         | Unique ID of the family of a species   | 10      |PRIMARY  |
| Genus_name            | Text        | Kingdom name of the species            | 100     |         |
| Vernacular_genus_name | Text        | Vernacular genus name of the species   | 100     |         |

&nbsp;

##### Kingdom

| Nom                     | Type        | Description                            | Taille  | Cle     |
|-------------------------|-------------|----------------------------------------|---------|---------|
| Kingdom_ID              | Int         | Unique ID of the family of a species   | 10      |PRIMARY  |
| Kingdom_name            | Text        | Kingdom name of the species            | 100     |         |
| Vernacular_kingdom_name | Text        | Vernacular kingdom name of the species | 100     |         |

&nbsp;

#### Status

| Nom               | Type        | Description                         | Taille | Cle     |
|-------------------|-------------|-------------------------------------|--------|---------|
| Status_ID         | Int         | Unique ID of the status of a species| 10     |PRIMARY  |
| Status_name       | Text        | Status name of the species          | 100    |         |

&nbsp;

#### Type

| Nom               | Type        | Description                         | Taille | Cle     |
|-------------------|-------------|-------------------------------------|--------|---------|
| Type_ID         | Int           | Unique ID of the type of a species  | 10     |PRIMARY  |
| Type_name       | Text          | Type name of the species            | 100    |         |

&nbsp;

#### Airport

&nbsp;

| Nom                | Type        | Description                         | Taille | Cle     |
|--------------------|-------------|-------------------------------------|--------|---------|
| Airport_ID         | Int         | Unique ID                           | 10     |PRIMARY  |
| Airport_fullname   | Text        | Airport fullname                    | 100    |         |
| Airport_shortname  | Text        | Airport shortname                   | 100    |         |

&nbsp;

#### SpecieAirport

&nbsp;

| Nom                | Type        | Description                         | Taille | Cle     |
|--------------------|-------------|-------------------------------------|--------|---------|
| Airport_ID         | Int         |                                     | 10     |FOREIGN  |
| Specie_ID          | Text        |                                     | 10     |FOREIGN  |


### Collections

| Nom               | Type        | Description                       | Taille | Cle     |
|-------------------|-------------|-----------------------------------|--------|---------|
| Inventory_code    | Int         | Unique code for inventory         | 10     | PRIMARY |
| Start_date        | Date        | Inventory start date              | 8      |         |
| Expiration_date   | Date        | Inventory expiration date         | 8      |         |

&nbsp;

#### User

| Nom               | Type        | Description                       | Taille | Cle     |
|-------------------|-------------|-----------------------------------|--------|---------|
| User_ID           | Int         | Unique ID of user                 | 10     | PRIMARY |
| Name              | Text        | Name of user                      | 80     |         |
| First_name        | Text        | First name of user                | 50     |         |
| Mail              | Text        | Mail of user                      | 120    |         |
| Passsword         | Text        | Password of user                  | 250    |         |

&nbsp;

#### Rôles

| Nom               | Type        | Description                       | Taille | Cle     |
|-------------------|-------------|-----------------------------------|--------|---------|
| Role_ID         | Int           | Unique ID of role                 | 10     | PRIMARY |
| Role_name         | Text        | Role name                         | 100    |         |

&nbsp;

#### Permissions

| Nom               | Type        | Description                       | Taille | Cle     |
|-------------------|-------------|-----------------------------------|--------|---------|
| Permission_ID     | Int         | Unique ID of a permission         | 10     |PRIMARY  |
| Permission_code   | Text        | Unique name of a permission       | 10     |         |
| En_name           | Text        | English name                      | 200    |         |
| Fr_name           | Text        | French name                       | 200    |         |
| It_name           | Text        | Italian name                      | 200    |         |

&nbsp;

#### Role and Permission

| Nom               | Type        | Description                       | Taille | Cle                  |
|-------------------|-------------|-----------------------------------|--------|----------------------|
| Role_ID           | Int         | Unique ID of a role               | 10     | PRIMARY and FOREIGN  |
| Permission_ID     | Int         | Unique ID of a permission         | 10     | PRIMARY and FOREIGN  |

&nbsp;

#### Collection and Users

| Nom               | Type        | Description                       | Taille | Cle                  |
|-------------------|-------------|-----------------------------------|--------|----------------------|
| Inventory_code    | Int         | Unique ID of a inventory          | 10     | PRIMARY and FOREIGN  |
| User_ID           | Int         | Unique ID of a user               | 10     | PRIMARY and FOREIGN  |

&nbsp;

#### Users and Roles

| Nom               | Type        | Description                       | Taille | Cle                  |
|-------------------|-------------|-----------------------------------|--------|----------------------|
| User_ID           | Int         | Unique ID of a user               | 10     | PRIMARY and FOREIGN  |
| Role_ID           | Int         | Unique ID of a role               | 10     | PRIMARY and FOREIGN  |
