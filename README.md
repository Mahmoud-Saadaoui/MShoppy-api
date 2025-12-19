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

## Génération de Ressources

Pour générer une nouvelle ressource complète (Module, Controller, Service, DTO, Entity/Schema) dans ce projet NestJS, vous pouvez utiliser la commande CLI suivante :

```bash
nest g res nom_ressource
```


