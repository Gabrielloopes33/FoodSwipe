import { Category } from "./types";

export const CATEGORIES: Category[] = [
    // ============================================
    // LEVEL 1 - CATEGORIAS PRINCIPAIS
    // ============================================
    
    // HAMBÚRGUER
    {
        id: "l1-burger",
        name: "Hambúrguer",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        searchTerms: ["hambúrguer", "burger", "lanche"],
        description: "Hambúrgueres suculentos e saborosos",
    },
    
    // PIZZA
    {
        id: "l1-pizza",
        name: "Pizza",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
        searchTerms: ["pizza", "pizzaria"],
        description: "Pizzas tradicionais e especiais",
    },
    
    // JAPONESA
    {
        id: "l1-japanese",
        name: "Japonesa",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
        searchTerms: ["comida japonesa", "sushi", "sashimi"],
        description: "Sushi, sashimi e pratos quentes",
    },
    
    // ITALIANA
    {
        id: "l1-italian",
        name: "Italiana",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800&q=80",
        searchTerms: ["comida italiana", "massa", "macarrão"],
        description: "Massas e pratos tradicionais italianos",
    },
    
    // BRASILEIRA
    {
        id: "l1-brazilian",
        name: "Brasileira",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=800&q=80",
        searchTerms: ["comida brasileira", "prato feito", "comida caseira"],
        description: "Feijoada, PF e pratos típicos",
    },
    
    // MEXICANA
    {
        id: "l1-mexican",
        name: "Mexicana",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
        searchTerms: ["comida mexicana", "tacos", "burritos"],
        description: "Tacos, burritos e nachos",
    },
    
    // SAUDÁVEL
    {
        id: "l1-healthy",
        name: "Saudável",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        searchTerms: ["comida saudável", "salada", "fitness", "light"],
        description: "Opções leves e nutritivas",
    },
    
    // SOBREMESA
    {
        id: "l1-dessert",
        name: "Sobremesa",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
        searchTerms: ["sobremesa", "doces", "doce"],
        description: "Doces e sobremesas deliciosas",
    },
    
    // SALGADOS
    {
        id: "l1-salgados",
        name: "Salgados",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1619881590738-a111d176d936?w=800&q=80",
        searchTerms: ["salgados", "coxinha", "salgado"],
        description: "Salgados fritos e assados",
    },
    
    // PASTEL
    {
        id: "l1-pastel",
        name: "Pastel",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
        searchTerms: ["pastel", "pastelaria", "pastel frito"],
        description: "Pasteis crocantes e recheados",
    },
    
    // PADARIA
    {
        id: "l1-padaria",
        name: "Padaria",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
        searchTerms: ["padaria", "pão", "café da manhã"],
        description: "Pães, doces e lanches de padaria",
    },
    
    // CHURRASCO
    {
        id: "l1-churrasco",
        name: "Churrasco",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        searchTerms: ["churrasco", "churrascaria", "espetinho"],
        description: "Carnes grelhadas e espetinhos",
    },
    
    // LANCHES RÁPIDOS
    {
        id: "l1-lanches",
        name: "Lanches Rápidos",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&q=80",
        searchTerms: ["lanche rápido", "cachorro-quente", "wrap"],
        description: "Opções rápidas para matar a fome",
    },
    
    // SOPAS E CALDOS
    {
        id: "l1-sopas",
        name: "Sopas & Caldos",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
        searchTerms: ["sopa", "caldo", "caldos", "sopas"],
        description: "Sopas quentinhas e caldos nutritivos",
    },
    
    // BEBIDAS
    {
        id: "l1-bebidas",
        name: "Bebidas",
        level: 1,
        parentId: null,
        imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
        searchTerms: ["bebidas", "suco", "café", "drink"],
        description: "Sucos, cafés e drinks refrescantes",
    },

    // ============================================
    // LEVEL 2 - HAMBÚRGUER
    // ============================================
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
    {
        id: "l2-burger-gourmet",
        name: "Gourmet",
        level: 2,
        parentId: "l1-burger",
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        searchTerms: ["hambúrguer gourmet"],
    },
    {
        id: "l2-burger-veggie",
        name: "Vegetariano/Vegano",
        level: 2,
        parentId: "l1-burger",
        imageUrl: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&q=80",
        searchTerms: ["hambúrguer vegetariano", "hambúrguer vegano"],
    },

    // ============================================
    // LEVEL 2 - PIZZA
    // ============================================
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
        searchTerms: ["pizza tradicional", "pizza delivery"],
    },
    {
        id: "l2-pizza-thin",
        name: "Massa Fina",
        level: 2,
        parentId: "l1-pizza",
        imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
        searchTerms: ["pizza massa fina", "pizza thin crust"],
    },
    {
        id: "l2-pizza-stuffed",
        name: "Borda Recheada",
        level: 2,
        parentId: "l1-pizza",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
        searchTerms: ["pizza borda recheada"],
    },
    {
        id: "l2-pizza-sweet",
        name: "Doce",
        level: 2,
        parentId: "l1-pizza",
        imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80",
        searchTerms: ["pizza doce", "pizza chocolate"],
    },

    // ============================================
    // LEVEL 2 - JAPONESA
    // ============================================
    {
        id: "l2-japanese-sushi",
        name: "Sushi & Sashimi",
        level: 2,
        parentId: "l1-japanese",
        imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
        searchTerms: ["sushi", "sashimi"],
    },
    {
        id: "l2-japanese-hot",
        name: "Pratos Quentes",
        level: 2,
        parentId: "l1-japanese",
        imageUrl: "https://images.unsplash.com/photo-1580822184713-fc54006efa4e?w=800&q=80",
        searchTerms: ["yakisoba", "teppanyaki", "pratos quentes japoneses"],
    },
    {
        id: "l2-japanese-temaki",
        name: "Temaki",
        level: 2,
        parentId: "l1-japanese",
        imageUrl: "https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?w=800&q=80",
        searchTerms: ["temaki", "hand roll"],
    },
    {
        id: "l2-japanese-ramen",
        name: "Ramen & Lamen",
        level: 2,
        parentId: "l1-japanese",
        imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
        searchTerms: ["ramen", "lamen", "sopa japonesa"],
    },

    // ============================================
    // LEVEL 2 - ITALIANA
    // ============================================
    {
        id: "l2-italian-pasta",
        name: "Massas",
        level: 2,
        parentId: "l1-italian",
        imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
        searchTerms: ["massa italiana", "macarrão", "pasta"],
    },
    {
        id: "l2-italian-risotto",
        name: "Risotos",
        level: 2,
        parentId: "l1-italian",
        imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
        searchTerms: ["risoto", "risotto"],
    },
    {
        id: "l2-italian-lasagna",
        name: "Lasanha",
        level: 2,
        parentId: "l1-italian",
        imageUrl: "https://images.unsplash.com/photo-1574868235872-97b6c3e2fced?w=800&q=80",
        searchTerms: ["lasanha", "lasagna"],
    },
    {
        id: "l2-italian-gnocchi",
        name: "Nhoque & Gnocchi",
        level: 2,
        parentId: "l1-italian",
        imageUrl: "https://images.unsplash.com/photo-1551183053-bf91b1d3116c?w=800&q=80",
        searchTerms: ["nhoque", "gnocchi"],
    },

    // ============================================
    // LEVEL 2 - BRASILEIRA
    // ============================================
    {
        id: "l2-brazilian-feijoada",
        name: "Feijoada & Cozidos",
        level: 2,
        parentId: "l1-brazilian",
        imageUrl: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=800&q=80",
        searchTerms: ["feijoada", "cozido", "comida caseira"],
    },
    {
        id: "l2-brazilian-pf",
        name: "Prato Feito",
        level: 2,
        parentId: "l1-brazilian",
        imageUrl: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&q=80",
        searchTerms: ["prato feito", "PF", "marmita"],
    },
    {
        id: "l2-brazilian-regional",
        name: "Pratos Regionais",
        level: 2,
        parentId: "l1-brazilian",
        imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
        searchTerms: ["moqueca", "acarajé", "vatapá", "comida baiana"],
    },
    {
        id: "l2-brazilian-stew",
        name: "Ensopados & Panelas",
        level: 2,
        parentId: "l1-brazilian",
        imageUrl: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80",
        searchTerms: ["ensopado", "galinhada", "sarapatel"],
    },

    // ============================================
    // LEVEL 2 - MEXICANA
    // ============================================
    {
        id: "l2-mexican-tacos",
        name: "Tacos",
        level: 2,
        parentId: "l1-mexican",
        imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80",
        searchTerms: ["tacos", "taco mexicano"],
    },
    {
        id: "l2-mexican-burritos",
        name: "Burritos",
        level: 2,
        parentId: "l1-mexican",
        imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
        searchTerms: ["burritos", "burrito mexicano"],
    },
    {
        id: "l2-mexican-nachos",
        name: "Nachos",
        level: 2,
        parentId: "l1-mexican",
        imageUrl: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80",
        searchTerms: ["nachos", "nachos com queijo"],
    },
    {
        id: "l2-mexican-quesadilla",
        name: "Quesadillas",
        level: 2,
        parentId: "l1-mexican",
        imageUrl: "https://images.unsplash.com/photo-1613514785814-8d1e9dd0322a?w=800&q=80",
        searchTerms: ["quesadilla", "quesadillas"],
    },

    // ============================================
    // LEVEL 2 - SAUDÁVEL
    // ============================================
    {
        id: "l2-healthy-salad",
        name: "Saladas",
        level: 2,
        parentId: "l1-healthy",
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        searchTerms: ["salada", "salada verde"],
    },
    {
        id: "l2-healthy-bowl",
        name: "Bowls & Poke",
        level: 2,
        parentId: "l1-healthy",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        searchTerms: ["poke bowl", "bowl saudável", "açaí bowl"],
    },
    {
        id: "l2-healthy-grilled",
        name: "Grelhados",
        level: 2,
        parentId: "l1-healthy",
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
        searchTerms: ["frango grelhado", "peixe grelhado", "carne grelhada"],
    },
    {
        id: "l2-healthy-vegan",
        name: "Vegano",
        level: 2,
        parentId: "l1-healthy",
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        searchTerms: ["comida vegana", "prato vegano"],
    },

    // ============================================
    // LEVEL 2 - SOBREMESA
    // ============================================
    {
        id: "l2-dessert-icecream",
        name: "Sorvete & Gelato",
        level: 2,
        parentId: "l1-dessert",
        imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
        searchTerms: ["sorvete", "gelato", "ice cream"],
    },
    {
        id: "l2-dessert-cake",
        name: "Bolos & Tortas",
        level: 2,
        parentId: "l1-dessert",
        imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
        searchTerms: ["bolo", "torta doce", "cake"],
    },
    {
        id: "l2-dessert-chocolate",
        name: "Chocolate",
        level: 2,
        parentId: "l1-dessert",
        imageUrl: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80",
        searchTerms: ["chocolate", "brownie", "mousse chocolate"],
    },
    {
        id: "l2-dessert-acai",
        name: "Açaí",
        level: 2,
        parentId: "l1-dessert",
        imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80",
        searchTerms: ["açaí", "açaí na tigela"],
    },

    // ============================================
    // LEVEL 2 - SALGADOS
    // ============================================
    {
        id: "l2-salgados-fritos",
        name: "Salgados Fritos",
        level: 2,
        parentId: "l1-salgados",
        imageUrl: "https://images.unsplash.com/photo-1619881590738-a111d176d936?w=800&q=80",
        searchTerms: ["coxinha", "risoles", "kibe", "bolinho de queijo"],
    },
    {
        id: "l2-salgados-assados",
        name: "Salgados Assados",
        level: 2,
        parentId: "l1-salgados",
        imageUrl: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800&q=80",
        searchTerms: ["esfirra", "enroladinho", "folhado"],
    },
    {
        id: "l2-salgados-arabes",
        name: "Árabes",
        level: 2,
        parentId: "l1-salgados",
        imageUrl: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&q=80",
        searchTerms: ["esfiha", "quibe", "kibbeh", "falafel"],
    },
    {
        id: "l2-salgados-brazilian",
        name: "Típicos Brasileiros",
        level: 2,
        parentId: "l1-salgados",
        imageUrl: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=800&q=80",
        searchTerms: ["empada", "pastel de forno", "torta salgada"],
    },

    // ============================================
    // LEVEL 2 - PASTEL
    // ============================================
    {
        id: "l2-pastel-frito",
        name: "Pastel Frito",
        level: 2,
        parentId: "l1-pastel",
        imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
        searchTerms: ["pastel frito", "pastel de feira"],
    },
    {
        id: "l2-pastel-forno",
        name: "Pastel de Forno",
        level: 2,
        parentId: "l1-pastel",
        imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
        searchTerms: ["pastel de forno", "pastel assado"],
    },
    {
        id: "l2-pastel-empada",
        name: "Empadas",
        level: 2,
        parentId: "l1-pastel",
        imageUrl: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=800&q=80",
        searchTerms: ["empada", "empadinha"],
    },
    {
        id: "l2-pastel-esfiha",
        name: "Esfihas",
        level: 2,
        parentId: "l1-pastel",
        imageUrl: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&q=80",
        searchTerms: ["esfiha", "esfirra"],
    },

    // ============================================
    // LEVEL 2 - PADARIA
    // ============================================
    {
        id: "l2-padaria-cafe",
        name: "Café da Manhã",
        level: 2,
        parentId: "l1-padaria",
        imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
        searchTerms: ["pão na chapa", "misto quente", "café da manhã"],
    },
    {
        id: "l2-padaria-sanduiche",
        name: "Sanduíches",
        level: 2,
        parentId: "l1-padaria",
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
        searchTerms: ["sanduíche natural", "baguette", "ciabatta"],
    },
    {
        id: "l2-padaria-doces",
        name: "Doces",
        level: 2,
        parentId: "l1-padaria",
        imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
        searchTerms: ["sonho", "carolina", "pão doce", "croissant doce"],
    },
    {
        id: "l2-padaria-salgados",
        name: "Salgados de Padaria",
        level: 2,
        parentId: "l1-padaria",
        imageUrl: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800&q=80",
        searchTerms: ["joelho", "hamburgão", "pão de batata"],
    },

    // ============================================
    // LEVEL 2 - CHURRASCO
    // ============================================
    {
        id: "l2-churrasco-carnes",
        name: "Carnes",
        level: 2,
        parentId: "l1-churrasco",
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        searchTerms: ["picanha", "alcatra", "maminha", "costela"],
    },
    {
        id: "l2-churrasco-espetos",
        name: "Espetinhos",
        level: 2,
        parentId: "l1-churrasco",
        imageUrl: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80",
        searchTerms: ["espetinho", "espeto de carne", "espeto de frango"],
    },
    {
        id: "l2-churrasco-linguicas",
        name: "Linguiças",
        level: 2,
        parentId: "l1-churrasco",
        imageUrl: "https://images.unsplash.com/photo-1606655659364-9f056b7888ad?w=800&q=80",
        searchTerms: ["linguiça", "chorizo", "linguiça artesanal"],
    },
    {
        id: "l2-churrasco-acompanhamentos",
        name: "Acompanhamentos",
        level: 2,
        parentId: "l1-churrasco",
        imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
        searchTerms: ["pão de alho", "queijo coalho", "farofa"],
    },

    // ============================================
    // LEVEL 2 - LANCHES RÁPIDOS
    // ============================================
    {
        id: "l2-lanches-hotdog",
        name: "Cachorro-Quente",
        level: 2,
        parentId: "l1-lanches",
        imageUrl: "https://images.unsplash.com/photo-1612392062126-2f3db5023f3e?w=800&q=80",
        searchTerms: ["cachorro-quente", "hot dog"],
    },
    {
        id: "l2-lanches-wrap",
        name: "Wraps",
        level: 2,
        parentId: "l1-lanches",
        imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
        searchTerms: ["wrap", "wrap de frango", "wrap vegano"],
    },
    {
        id: "l2-lanches-xis",
        name: "Xis & Baguetes",
        level: 2,
        parentId: "l1-lanches",
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
        searchTerms: ["xis", "baguete", "sanduíche grande"],
    },
    {
        id: "l2-lanches-misto",
        name: "Misto & Tostas",
        level: 2,
        parentId: "l1-lanches",
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
        searchTerms: ["misto quente", "tosta", "tostex"],
    },

    // ============================================
    // LEVEL 2 - SOPAS E CALDOS
    // ============================================
    {
        id: "l2-sopas-sopas",
        name: "Sopas",
        level: 2,
        parentId: "l1-sopas",
        imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
        searchTerms: ["sopa de legumes", "creme de abóbora", "sopa de ervilha"],
    },
    {
        id: "l2-sopas-caldos",
        name: "Caldos",
        level: 2,
        parentId: "l1-sopas",
        imageUrl: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80",
        searchTerms: ["caldo de cana", "caldo de feijão", "caldinho"],
    },
    {
        id: "l2-sopas-massas",
        name: "Sopas com Massa",
        level: 2,
        parentId: "l1-sopas",
        imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
        searchTerms: ["minestrone", "sopa de macarrão", "canja"],
    },

    // ============================================
    // LEVEL 2 - BEBIDAS
    // ============================================
    {
        id: "l2-bebidas-sucos",
        name: "Sucos Naturais",
        level: 2,
        parentId: "l1-bebidas",
        imageUrl: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&q=80",
        searchTerms: ["suco natural", "suco de laranja", "suco de maracujá"],
    },
    {
        id: "l2-bebidas-cafe",
        name: "Cafés",
        level: 2,
        parentId: "l1-bebidas",
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
        searchTerms: ["café", "cappuccino", "latte", "espresso"],
    },
    {
        id: "l2-bebidas-drinks",
        name: "Drinks",
        level: 2,
        parentId: "l1-bebidas",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
        searchTerms: ["drink", "coquetel", "caipirinha", "mojito"],
    },
    {
        id: "l2-bebidas-smoothies",
        name: "Smoothies & Vitaminas",
        level: 2,
        parentId: "l1-bebidas",
        imageUrl: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&q=80",
        searchTerms: ["smoothie", "vitamina", "shake"],
    },

    // ============================================
    // LEVEL 3 - HAMBÚRGUER ARTESANAL
    // ============================================
    {
        id: "l3-burger-artisan-bacon",
        name: "Com Bacon",
        level: 3,
        parentId: "l2-burger-artisan",
        imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
        searchTerms: ["hambúrguer artesanal bacon"],
    },
    {
        id: "l3-burger-artisan-cheese",
        name: "Com Cheddar",
        level: 3,
        parentId: "l2-burger-artisan",
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        searchTerms: ["hambúrguer artesanal cheddar"],
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
    {
        id: "l3-burger-smash-triple",
        name: "Triplo Smash",
        level: 3,
        parentId: "l2-burger-smash",
        imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&q=80",
        searchTerms: ["smash burger triplo"],
    },
    {
        id: "l3-burger-fastfood-classic",
        name: "Clássico",
        level: 3,
        parentId: "l2-burger-fastfood",
        imageUrl: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80",
        searchTerms: ["hambúrguer tradicional"],
    },

    // ============================================
    // LEVEL 3 - PIZZA
    // ============================================
    {
        id: "l3-pizza-margherita",
        name: "Margherita",
        level: 3,
        parentId: "l2-pizza-napolitan",
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
        searchTerms: ["pizza margherita napolitana"],
    },
    {
        id: "l3-pizza-pepperoni",
        name: "Pepperoni",
        level: 3,
        parentId: "l2-pizza-napolitan",
        imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
        searchTerms: ["pizza pepperoni"],
    },
    {
        id: "l3-pizza-calabresa",
        name: "Calabresa",
        level: 3,
        parentId: "l2-pizza-brazilian",
        imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80",
        searchTerms: ["pizza calabresa"],
    },
    {
        id: "l3-pizza-portuguesa",
        name: "Portuguesa",
        level: 3,
        parentId: "l2-pizza-brazilian",
        imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80",
        searchTerms: ["pizza portuguesa"],
    },
    {
        id: "l3-pizza-chocolate",
        name: "Chocolate",
        level: 3,
        parentId: "l2-pizza-sweet",
        imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80",
        searchTerms: ["pizza doce chocolate"],
    },

    // ============================================
    // LEVEL 3 - JAPONESA
    // ============================================
    {
        id: "l3-japanese-combo",
        name: "Combinado Variado",
        level: 3,
        parentId: "l2-japanese-sushi",
        imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
        searchTerms: ["combinado sushi", "barca sushi"],
    },
    {
        id: "l3-japanese-temaki-salmon",
        name: "Temaki de Salmão",
        level: 3,
        parentId: "l2-japanese-temaki",
        imageUrl: "https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?w=800&q=80",
        searchTerms: ["temaki salmão"],
    },
    {
        id: "l3-japanese-ramen",
        name: "Ramen Tradicional",
        level: 3,
        parentId: "l2-japanese-ramen",
        imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
        searchTerms: ["ramen tradicional"],
    },
    {
        id: "l3-japanese-yakisoba",
        name: "Yakisoba",
        level: 3,
        parentId: "l2-japanese-hot",
        imageUrl: "https://images.unsplash.com/photo-1580822184713-fc54006efa4e?w=800&q=80",
        searchTerms: ["yakisoba"],
    },

    // ============================================
    // LEVEL 3 - ITALIANA
    // ============================================
    {
        id: "l3-italian-spaghetti",
        name: "Spaghetti à Bolonhesa",
        level: 3,
        parentId: "l2-italian-pasta",
        imageUrl: "https://images.unsplash.com/photo-1551183053-bf91b1d3116c?w=800&q=80",
        searchTerms: ["spaghetti", "macarrão à bolonhesa"],
    },
    {
        id: "l3-italian-carbonara",
        name: "Carbonara",
        level: 3,
        parentId: "l2-italian-pasta",
        imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
        searchTerms: ["carbonara", "macarrão carbonara"],
    },
    {
        id: "l3-italian-lasagna",
        name: "Lasanha à Bolonhesa",
        level: 3,
        parentId: "l2-italian-lasagna",
        imageUrl: "https://images.unsplash.com/photo-1574868235872-97b6c3e2fced?w=800&q=80",
        searchTerms: ["lasanha bolonhesa"],
    },
    {
        id: "l3-italian-risotto",
        name: "Risoto de Cogumelos",
        level: 3,
        parentId: "l2-italian-risotto",
        imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
        searchTerms: ["risoto cogumelos"],
    },

    // ============================================
    // LEVEL 3 - BRASILEIRA
    // ============================================
    {
        id: "l3-brazilian-feijoada",
        name: "Feijoada Completa",
        level: 3,
        parentId: "l2-brazilian-feijoada",
        imageUrl: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=800&q=80",
        searchTerms: ["feijoada completa"],
    },
    {
        id: "l3-brazilian-pf",
        name: "PF Completo",
        level: 3,
        parentId: "l2-brazilian-pf",
        imageUrl: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&q=80",
        searchTerms: ["prato feito completo"],
    },
    {
        id: "l3-brazilian-moqueca",
        name: "Moqueca de Peixe",
        level: 3,
        parentId: "l2-brazilian-regional",
        imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
        searchTerms: ["moqueca peixe"],
    },
    {
        id: "l3-brazilian-galinhada",
        name: "Galinhada",
        level: 3,
        parentId: "l2-brazilian-stew",
        imageUrl: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80",
        searchTerms: ["galinhada"],
    },

    // ============================================
    // LEVEL 3 - MEXICANA
    // ============================================
    {
        id: "l3-mexican-tacos-carne",
        name: "Tacos de Carne",
        level: 3,
        parentId: "l2-mexican-tacos",
        imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80",
        searchTerms: ["tacos carne"],
    },
    {
        id: "l3-mexican-burrito",
        name: "Burrito de Frango",
        level: 3,
        parentId: "l2-mexican-burritos",
        imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
        searchTerms: ["burrito frango"],
    },
    {
        id: "l3-mexican-nachos",
        name: "Nachos com Guacamole",
        level: 3,
        parentId: "l2-mexican-nachos",
        imageUrl: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80",
        searchTerms: ["nachos guacamole"],
    },
    {
        id: "l3-mexican-quesadilla",
        name: "Quesadilla de Queijo",
        level: 3,
        parentId: "l2-mexican-quesadilla",
        imageUrl: "https://images.unsplash.com/photo-1613514785814-8d1e9dd0322a?w=800&q=80",
        searchTerms: ["quesadilla queijo"],
    },

    // ============================================
    // LEVEL 3 - SAUDÁVEL
    // ============================================
    {
        id: "l3-healthy-salad-caesar",
        name: "Salada Caesar",
        level: 3,
        parentId: "l2-healthy-salad",
        imageUrl: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&q=80",
        searchTerms: ["salada caesar"],
    },
    {
        id: "l3-healthy-poke",
        name: "Poke Bowl",
        level: 3,
        parentId: "l2-healthy-bowl",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        searchTerms: ["poke bowl"],
    },
    {
        id: "l3-healthy-grilled",
        name: "Peixe Grelhado",
        level: 3,
        parentId: "l2-healthy-grilled",
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
        searchTerms: ["peixe grelhado"],
    },
    {
        id: "l3-healthy-vegan",
        name: "Prato Vegano Completo",
        level: 3,
        parentId: "l2-healthy-vegan",
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        searchTerms: ["prato vegano"],
    },

    // ============================================
    // LEVEL 3 - SOBREMESA
    // ============================================
    {
        id: "l3-dessert-acai",
        name: "Açaí na Tigela",
        level: 3,
        parentId: "l2-dessert-acai",
        imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80",
        searchTerms: ["açaí na tigela"],
    },
    {
        id: "l3-dessert-brownie",
        name: "Brownie com Sorvete",
        level: 3,
        parentId: "l2-dessert-chocolate",
        imageUrl: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80",
        searchTerms: ["brownie sorvete"],
    },
    {
        id: "l3-dessert-icecream",
        name: "Sorvete Artesanal",
        level: 3,
        parentId: "l2-dessert-icecream",
        imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
        searchTerms: ["sorvete artesanal"],
    },
    {
        id: "l3-dessert-cheesecake",
        name: "Cheesecake",
        level: 3,
        parentId: "l2-dessert-cake",
        imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
        searchTerms: ["cheesecake"],
    },

    // ============================================
    // LEVEL 3 - SALGADOS
    // ============================================
    {
        id: "l3-salgados-coxinha",
        name: "Coxinha de Frango",
        level: 3,
        parentId: "l2-salgados-fritos",
        imageUrl: "https://images.unsplash.com/photo-1619881590738-a111d176d936?w=800&q=80",
        searchTerms: ["coxinha frango"],
    },
    {
        id: "l3-salgados-esfirra",
        name: "Esfirra de Carne",
        level: 3,
        parentId: "l2-salgados-assados",
        imageUrl: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800&q=80",
        searchTerms: ["esfirra carne"],
    },
    {
        id: "l3-salgados-kibe",
        name: "Quibe Frito",
        level: 3,
        parentId: "l2-salgados-arabes",
        imageUrl: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&q=80",
        searchTerms: ["quibe frito"],
    },
    {
        id: "l3-salgados-empada",
        name: "Empada de Palmito",
        level: 3,
        parentId: "l2-salgados-brazilian",
        imageUrl: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=800&q=80",
        searchTerms: ["empada palmito"],
    },

    // ============================================
    // LEVEL 3 - PASTEL
    // ============================================
    {
        id: "l3-pastel-carne",
        name: "Pastel de Carne",
        level: 3,
        parentId: "l2-pastel-frito",
        imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
        searchTerms: ["pastel carne"],
    },
    {
        id: "l3-pastel-queijo",
        name: "Pastel de Queijo",
        level: 3,
        parentId: "l2-pastel-frito",
        imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
        searchTerms: ["pastel queijo"],
    },
    {
        id: "l3-pastel-frango",
        name: "Empada de Frango",
        level: 3,
        parentId: "l2-pastel-empada",
        imageUrl: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=800&q=80",
        searchTerms: ["empada frango"],
    },
    {
        id: "l3-pastel-esfiha",
        name: "Esfiha Fechada",
        level: 3,
        parentId: "l2-pastel-esfiha",
        imageUrl: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&q=80",
        searchTerms: ["esfiha fechada"],
    },

    // ============================================
    // LEVEL 3 - PADARIA
    // ============================================
    {
        id: "l3-padaria-pao-chapa",
        name: "Pão na Chapa",
        level: 3,
        parentId: "l2-padaria-cafe",
        imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
        searchTerms: ["pão na chapa"],
    },
    {
        id: "l3-padaria-misto",
        name: "Misto Quente",
        level: 3,
        parentId: "l2-padaria-sanduiche",
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
        searchTerms: ["misto quente"],
    },
    {
        id: "l3-padaria-sonho",
        name: "Sonho Recheado",
        level: 3,
        parentId: "l2-padaria-doces",
        imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
        searchTerms: ["sonho recheado"],
    },
    {
        id: "l3-padaria-joelho",
        name: "Joelho",
        level: 3,
        parentId: "l2-padaria-salgados",
        imageUrl: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800&q=80",
        searchTerms: ["joelho de presunto e queijo"],
    },

    // ============================================
    // LEVEL 3 - CHURRASCO
    // ============================================
    {
        id: "l3-churrasco-picanha",
        name: "Picanha",
        level: 3,
        parentId: "l2-churrasco-carnes",
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
        searchTerms: ["picanha grelhada"],
    },
    {
        id: "l3-churrasco-espeto",
        name: "Espetinho Misto",
        level: 3,
        parentId: "l2-churrasco-espetos",
        imageUrl: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80",
        searchTerms: ["espetinho misto"],
    },
    {
        id: "l3-churrasco-linguica",
        name: "Linguiça Toscana",
        level: 3,
        parentId: "l2-churrasco-linguicas",
        imageUrl: "https://images.unsplash.com/photo-1606655659364-9f056b7888ad?w=800&q=80",
        searchTerms: ["linguiça toscana"],
    },
    {
        id: "l3-churrasco-pao-alho",
        name: "Pão de Alho",
        level: 3,
        parentId: "l2-churrasco-acompanhamentos",
        imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
        searchTerms: ["pão de alho"],
    },

    // ============================================
    // LEVEL 3 - LANCHES RÁPIDOS
    // ============================================
    {
        id: "l3-lanches-hotdog",
        name: "Cachorro-Quente Completo",
        level: 3,
        parentId: "l2-lanches-hotdog",
        imageUrl: "https://images.unsplash.com/photo-1612392062126-2f3db5023f3e?w=800&q=80",
        searchTerms: ["cachorro-quente completo"],
    },
    {
        id: "l3-lanches-wrap",
        name: "Wrap de Frango",
        level: 3,
        parentId: "l2-lanches-wrap",
        imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
        searchTerms: ["wrap frango"],
    },
    {
        id: "l3-lanches-xis",
        name: "Xis Completo",
        level: 3,
        parentId: "l2-lanches-xis",
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
        searchTerms: ["xis completo"],
    },
    {
        id: "l3-lanches-tosta",
        name: "Misto Quente Tostado",
        level: 3,
        parentId: "l2-lanches-misto",
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
        searchTerms: ["misto quente tostado"],
    },

    // ============================================
    // LEVEL 3 - SOPAS E CALDOS
    // ============================================
    {
        id: "l3-sopas-legumes",
        name: "Sopa de Legumes",
        level: 3,
        parentId: "l2-sopas-sopas",
        imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
        searchTerms: ["sopa de legumes"],
    },
    {
        id: "l3-sopas-caldo",
        name: "Caldo de Cana",
        level: 3,
        parentId: "l2-sopas-caldos",
        imageUrl: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80",
        searchTerms: ["caldo de cana"],
    },
    {
        id: "l3-sopas-canja",
        name: "Canja de Galinha",
        level: 3,
        parentId: "l2-sopas-massas",
        imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
        searchTerms: ["canja galinha"],
    },

    // ============================================
    // LEVEL 3 - BEBIDAS
    // ============================================
    {
        id: "l3-bebidas-laranja",
        name: "Suco de Laranja Natural",
        level: 3,
        parentId: "l2-bebidas-sucos",
        imageUrl: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&q=80",
        searchTerms: ["suco de laranja natural"],
    },
    {
        id: "l3-bebidas-cappuccino",
        name: "Cappuccino",
        level: 3,
        parentId: "l2-bebidas-cafe",
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
        searchTerms: ["cappuccino"],
    },
    {
        id: "l3-bebidas-caipirinha",
        name: "Caipirinha",
        level: 3,
        parentId: "l2-bebidas-drinks",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
        searchTerms: ["caipirinha"],
    },
    {
        id: "l3-bebidas-smoothie",
        name: "Smoothie de Morango",
        level: 3,
        parentId: "l2-bebidas-smoothies",
        imageUrl: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&q=80",
        searchTerms: ["smoothie morango"],
    },
];
