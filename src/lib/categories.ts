import { Category } from "./types";

export const CATEGORIES: Category[] = [
    // Level 1
    {
        id: "l1-burger",
        name: "Hambúrguer",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        searchTerms: ["hambúrguer", "burger"],
    },
    {
        id: "l1-pizza",
        name: "Pizza",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
        searchTerms: ["pizza"],
    },
    {
        id: "l1-japanese",
        name: "Japonesa",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
        searchTerms: ["comida japonesa", "sushi"],
    },
    {
        id: "l1-italian",
        name: "Italiana",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800&q=80",
        searchTerms: ["comida italiana", "massa"],
    },
    {
        id: "l1-brazilian",
        name: "Brasileira",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=800&q=80", // Placeholder (feijoada/brazilian)
        searchTerms: ["comida brasileira", "prato feito"],
    },
    {
        id: "l1-mexican",
        name: "Mexicana",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
        searchTerms: ["comida mexicana", "tacos"],
    },
    {
        id: "l1-healthy",
        name: "Saudável",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        searchTerms: ["comida saudável", "salada"],
    },
    {
        id: "l1-dessert",
        name: "Sobremesa",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
        searchTerms: ["sobremesa", "doces"],
    },

    // Level 2 - Burger
    {
        id: "l2-burger-artisan",
        name: "Artesanal",
        level: 2,
        parentId: "l1-burger",
        imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
        searchTerms: ["hambúrguer artesanal"],
    },
    {
        id: "l2-burger-smash",
        name: "Smash Burger",
        level: 2,
        parentId: "l1-burger",
        imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&q=80",
        searchTerms: ["smash burger"],
    },
    {
        id: "l2-burger-fastfood",
        name: "Fast Food",
        level: 2,
        parentId: "l1-burger",
        imageUrl: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80",
        searchTerms: ["fast food burger"],
    },

    // Level 2 - Pizza
    {
        id: "l2-pizza-napolitan",
        name: "Napolitana",
        level: 2,
        parentId: "l1-pizza",
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
        searchTerms: ["pizza napolitana"],
    },
    {
        id: "l2-pizza-brazilian",
        name: "Tradicional",
        level: 2,
        parentId: "l1-pizza",
        imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80",
        searchTerms: ["pizza delivery"],
    },

    // Level 3 - Burger Artisan (Examples)
    {
        id: "l3-burger-artisan-bacon",
        name: "Com Bacon",
        level: 3,
        parentId: "l2-burger-artisan",
        imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
        searchTerms: ["hambúrguer artesanal bacon"],
    },
    {
        id: "l3-burger-artisan-salad",
        name: "Com Salada",
        level: 3,
        parentId: "l2-burger-artisan",
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        searchTerms: ["hambúrguer artesanal salada"],
    },
    {
        id: "l3-burger-smash-double",
        name: "Duplo Smash",
        level: 3,
        parentId: "l2-burger-smash",
        imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&q=80",
        searchTerms: ["smash burger duplo"],
    },

    // Level 3 - Pizza
    {
        id: "l3-pizza-margherita",
        name: "Margherita",
        level: 3,
        parentId: "l2-pizza-napolitan",
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
        searchTerms: ["pizza margherita napolitana"],
    },
    {
        id: "l3-pizza-calabresa",
        name: "Calabresa",
        level: 3,
        parentId: "l2-pizza-brazilian",
        imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80",
        searchTerms: ["pizza calabresa"],
    },

    // Level 2 - Japanese
    {
        id: "l2-japanese-sushi",
        name: "Sushi / Sashimi",
        level: 2,
        parentId: "l1-japanese",
        imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
        searchTerms: ["sushi sashimi"],
    },
    {
        id: "l2-japanese-hot",
        name: "Pratos Quentes",
        level: 2,
        parentId: "l1-japanese",
        imageUrl: "https://images.unsplash.com/photo-1580822184713-fc54006efa4e?w=800&q=80",
        searchTerms: ["yakisoba", "teppan"],
    },

    // Level 3 - Japanese
    {
        id: "l3-japanese-combo",
        name: "Combinado Variado",
        level: 3,
        parentId: "l2-japanese-sushi",
        imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
        searchTerms: ["combinado sushi", "barca sushi"],
    },
    {
        id: "l3-japanese-temaki",
        name: "Temaki",
        level: 3,
        parentId: "l2-japanese-sushi",
        imageUrl: "https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?w=800&q=80",
        searchTerms: ["temaki"],
    },
];
