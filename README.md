# MShoppy API

## Diagramme UML

```mermaid
classDiagram
    class User {
        +ObjectId _id
        +String name
        +String email
        +String password
        +Enum role
        +Boolean active
        +String gender
    }

    class Product {
        +ObjectId _id
        +String title
        +Number price
        +Number quantity
        +ObjectId category
        +ObjectId subCategory
        +ObjectId brand
    }

    class Category {
        +ObjectId _id
        +String name
        +String image
    }

    class SubCategory {
        +ObjectId _id
        +String name
        +ObjectId category
    }

    class Brand {
        +ObjectId _id
        +String name
        +String image
    }

    class Review {
        +ObjectId _id
        +String reviewText
        +Number rating
        +ObjectId user
        +ObjectId product
    }

    class Cart {
        +ObjectId _id
        +Array items
        +Number totalPrice
        +ObjectId user
    }

    class Order {
        +ObjectId _id
        +ObjectId user
        +Array cartItems
        +Number totalOrderPrice
        +Enum paymentMethodType
        +Boolean isPaid
    }

    class Coupon {
        +ObjectId _id
        +String name
        +Date expiryDate
        +Number discount
    }

    User "1" -- "0..*" Review : écrit
    User "1" -- "1" Cart : possède
    User "1" -- "0..*" Order : passe
    User "1" -- "0..*" RequestProduct : soumet

    Product "1" -- "0..*" Review : reçoit
    Product "0..*" -- "1" Category : appartient
    Product "0..*" -- "1" SubCategory : appartient
    Product "0..*" -- "1" Brand : fabrique

    Category "1" -- "0..*" SubCategory : contient

    Cart "0..*" -- "0..*" Product : contient
    Cart "0..*" -- "0..*" Coupon : utilise

    Order "1" -- "1" User : appartient
```



## 🛠️ Guide de Création du Projet
### 1. Installation du CLI NestJS
Si ce n'est pas déjà fait, installez l'outil en ligne de commande de NestJS :
```bash
npm i -g @nestjs/cli
```
### 2. Initialisation du projet (Scaffolding)
Création de la structure de base du projet :
```bash
nest new mshoppy-api
```
Cela génère la structure standard (`src/`, `test/`, `node_modules/`, etc.).
### 3. Installation de MongoDB (Mongoose)
Pour connecter l'API à une base de données MongoDB, nous utilisons Mongoose :
```bash
npm install @nestjs/mongoose mongoose
```
### 4. Gestion de la Configuration (.env)
Pour sécuriser les identifiants de connexion, installation du module de configuration :
```bash
npm install @nestjs/config
```
---
*Note : Une fois ces étapes réalisées, le module `MongooseModule` a été configuré dans `app.module.ts` pour utiliser la variable `MONGO_URL` définie dans le fichier `.env`.*

## Génération de Ressources
Pour générer une nouvelle ressource complète (Module, Controller, Service, DTO, Entity/Schema) dans ce projet NestJS, vous pouvez utiliser la commande CLI suivante :

```bash
nest g res nom_ressource
```


