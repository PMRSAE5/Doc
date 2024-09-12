## Specie

&nbsp;

### Create

```sql
CREATE TABLE Class
(
    Class_ID INTEGER NOT NULL,
    Class_name VARCHAR(100),
    Vernacular_class_name VARCHAR(100),
    PRIMARY KEY (Class_ID)
);

CREATE TABLE OrderS
(
    Order_ID INTEGER NOT NULL,
    Order_name VARCHAR(100),
    Vernacular_order_name VARCHAR(100),
    PRIMARY KEY (Order_ID)
);

CREATE TABLE Family
(
    Family_ID INTEGER NOT NULL,
    Family_name VARCHAR(100),
    Vernacular_Family_name VARCHAR(100),
    PRIMARY KEY (Family_ID)
);

CREATE TABLE Genus
(
    Genus_ID INTEGER NOT NULL,
    Genus_name VARCHAR(100),
    Vernacular_genus_name VARCHAR(100),
    PRIMARY KEY (Genus_ID)
);

CREATE TABLE Kingdom
(
    Kingdom_ID INTEGER NOT NULL,
    Kingdom_name VARCHAR(100),
    Vernaculr_kingdom_name VARCHAR(100),
    PRIMARY KEY (Kingdom_ID)
);

CREATE TABLE Status 
(
    Status_ID INTEGER NOT NULL,
    Status_Name VARCHAR(100),
    PRIMARY KEY (Status_ID)
);

CREATE TABLE Type
(
    Type_ID INTEGER NOT NULL,
    Type_Name VARCHAR(100),
    PRIMARY KEY(Type_ID)
);

CREATE TABLE Specie
(
    Id INTEGER PRIMARY KEY NOT NULL,
    Specie_ID INTEGER,
    Scientific_name VARCHAR(200),
    French_vernacular_name VARCHAR(100),
    English_vernacular_name VARCHAR(100),
    Italian_vernacular_name VARCHAR(100),
    Romania_vernacular_name VARCHAR(100),
    Genus INTEGER,
    Class INTEGER,
    OrderS INTEGER,
    Family INTEGER,
    Kingdom INTEGER,
    Status INTEGER,
    Type INTEGER,
    FOREIGN KEY (Genus) REFERENCES Genus(Genus_ID),
    FOREIGN KEY (Class) REFERENCES Class(Class_ID),
    FOREIGN KEY (OrderS) REFERENCES OrderS(Order_ID),
    FOREIGN KEY (Family) REFERENCES Family(Family_ID),
    FOREIGN KEY (Kingdom) REFERENCES Kingdom (Kingdom_ID),
    FOREIGN KEY (Status) REFERENCES Status(Status_ID),
    FOREIGN KEY (Type) REFERENCES Type(Type_ID)
);

CREATE TABLE Airport
(
    Airport_ID INTEGER PRIMARY KEY NOT NULL,
    Airport_fullname Varchar(100),
    Airport_shortname Varchar(100)
);

CREATE TABLE SpecieAirport
(
    Airport_ID INTEGER,
    Specie_ID INTEGER,
    PRIMARY KEY(Airport_ID,Specie_ID),
    FOREIGN KEY (Airport_ID) REFERENCES Airport(Airport_ID),
    FOREIGN KEY (Specie_ID) REFERENCES Specie (Specie_ID)
);
```

&nbsp;

### Insert

```SQL
INSERT INTO Status (Status_ID, Status_name) VALUES
    (1,"Protege"),
    (2, "Invasive"),
    (3, "Insect");

INSERT INTO Type (Type_ID, Type_name) VALUES
    (1, "Faune"),
    (2, "Flore"),
    (3, "Insects");
```

&nbsp;

## Collections

&nbsp;

### Create

```sql
CREATE TABLE Collections 
(
    Invetory_code INT PRIMARY KEY NOT NULL,
    Start_date DATE,
    Expiration_date DATE
);

CREATE TABLE Users
(
    User_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Name Varchar(80),
    First_Name Varchar(50),
    Mail Varchar(120),
    Password Varchar(250)
);

CREATE TABLE Roles
(
    Role_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Role_name Varchar(100)
);

CREATE TABLE Permissions
(
    Permission_ID Int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Permission_code Text,
    En_name VARCHAR(200),
    Fr_name VARCHAR(200),
    It_name VARCHAR(200)
);

CREATE TABLE Role_Permissions
(
    Role_ID INT,
    Permission_ID INT,
    PRIMARY KEY (Role_ID, Permission_ID),
    FOREIGN KEY (Role_ID) REFERENCES Roles(Role_ID),
    FOREIGN KEY (Permission_ID) REFERENCES Permissions(Permission_ID)
);

CREATE TABLE User_Role
(
    User_ID INT,
    Role_ID INT,
    PRIMARY KEY (User_ID, Role_ID),
    FOREIGN KEY (User_ID) REFERENCES Users(User_ID),
    FOREIGN KEY (Role_ID) REFERENCES Roles(Role_ID)
);

CREATE TABLE Collection_Users
(
    Invetory_code INT,
    User_ID INT,
    PRIMARY KEY (Invetory_code, User_ID),
    FOREIGN KEY (Invetory_code) REFERENCES Collections(Invetory_code),
    FOREIGN KEY (User_ID) REFERENCES Users(User_ID)
);
```

&nbsp;

### Insert

&nbsp;
