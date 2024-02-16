import {ref} from 'vue'

export const topMenu = ref(
    {
        leftMenu:[
            {
                "id":"1",
                "name":"Daily Deals"
            },
            {
                "id":"2",
                "name":"Help & Contact"
            }
        ],
        rightMenu:[
            {
                "id":"1",
                "name":"Ship to"
            },
            {
                "id":"2",
                "name":"Sell"
            },
            {
                "id":"3",
                "name":"Watch List"
            },
            {
                "id":"4",
                "name":"My eBay"
            }
        ]
    }
)
export const allCategory = ref(
    {
        categories:[
            {
                "id":"1",
                "name":"Antiques",
                "value":"1",
            },
            {
                "id":"2",
                "name":"Art",
                "value":"2",
            },
            {
                "id":"3",
                "name":"Baby",
                "value":"3",
            },
            {
                "id":"4",
                "name":"Books & Magazines",
                "value":"4",
            },
            {
                "id":"5",
                "name":"Business & Industrial",
                "value":"5",
            },
            {
                "id":"6",
                "name":"Cameras & Photo",
                "value":"6",
            },
            {
                "id":"7",
                "name":" Cell Phones & Accessories",
                "value":"7",
            },
            {
                "id":"8",
                "name":" Clothing, Shoes & Accessories",
                "value":"8",
            },
            {
                "id":"9",
                "name":"Coins & Paper Money",
                "value":"9",
            },
            {
                "id":"10",
                "name":"Collectibles",
                "value":"10",
            },
            {
                "id":"11",
                "name":"Computers/Tablets & Networking",
                "value":"11",
            },
            {
                "id":"12",
                "name":"Consumer Electronics",
                "value":"12",
            },
            {
                "id":"13",
                "name":"Crafts",
                "value":"13",
            },
            {
                "id":"14",
                "name":"Dolls & Bears",
                "value":"14",
            },
            {
                "id":"15",
                "name":"Movies & TV",
                "value":"15",
            },
            {
                "id":"16",
                "name":"Entertainment Memorabilia",
                "value":"16",
            },
            {
                "id":"17",
                "name":"Gift Cards & Coupons",
                "value":"17",
            },
            {
                "id":"18",
                "name":"Health & Beauty",
                "value":"18",
            },
            {
                "id":"19",
                "name":"Home & Garden",
                "value":"19",
            },
            {
                "id":"20",
                "name":"Jewelry & Watches",
                "value":"20",
            },
            {
                "id":"21",
                "name":"Music",
                "value":"21",
            },
            {
                "id":"22",
                "name":"Musical Instruments & Gear",
                "value":"22",
            },
            {
                "id":"23",
                "name":"Pet Supplies",
                "value":"23",
            },
            {
                "id":"24",
                "name":"Pottery & Glass",
                "value":"24",
            },
            {
                "id":"25",
                "name":"Real Estate",
                "value":"25",
            },
            {
                "id":"26",
                "name":"Specialty Services",
                "value":"26",
            },
            {
                "id":"27",
                "name":"Sporting Goods",
                "value":"27",
            },
            {
                "id":"28",
                "name":"Sports Mem, Cards & Fan Shop",
                "value":"28",
            },
            {
                "id":"29",
                "name":"Stamps",
                "value":"29",
            },
            {
                "id":"30",
                "name":"Tickets & Experiences",
                "value":"30",
            },
            {
                "id":"31",
                "name":"Toys & Hobbies",
                "value":"31",
            },
            {
                "id":"32",
                "name":"Travel",
                "value":"32",
            },
            {
                "id":"33",
                "name":"Video Games & Consoles",
                "value":"33",
            },
            {
                "id":"34",
                "name":"Everything Else",
                "value":"34",
            },
        ]
    }
)
export const shopByCategory = ref(
    {
        category:[
            {
                "id":"1",
                "name":"Cameras & Photo"
            },
            {
                "id":"2",
                "name":"Vehicle Electronics & GPS"
            },
            {
                "id":"3",
                "name":"Home Surveillance Systems"
            },
            {
                "id":"4",
                "name":"Surveillance & Smart Home Electronics"
            },
            {
                "id":"5",
                "name":"Major Appliances, Parts & Accessories"
            },
            {
                "id":"6",
                "name":"Video Games & Consoles"
            },
            {
                "id":"7",
                "name":"Virtual Reality Headsets, Parts & Accessories"
            },
            {
                "id":"8",
                "name":"Cell Phones, Smart Watches & Accessories"
            },
            {
                "id":"9",
                "name":"Computers, Tablets & Network Hardware"
            },
            {
                "id":"10",
                "name":"TV, Video & Home Audio Electronics"
            },
            {
                "id":"11",
                "name":"Portable Audio & Headphones"
            },
        ]
    }
)
export const favoriteBrands = ref(
    {
        brands:[
            {
                "id":"1",
                "name":"Alienware",
                "isActive":false,
                "img":"/src/assets/img/branch_img/top_brand_3.webp",
            },
            {
                "id":"2",
                "name":"Apple",
                "isActive":true,
                "img":"/src/assets/img/branch_img/apple.webp"            },
            {
                "id":"3",
                "name":"ASUS",
                "isActive":false,
                "img":"/src/assets/img/branch_img/top_brand_3.webp"
            },
            {
                "id":"4",
                "name":"Beats by Dr. Dre",
                "isActive":false,
                "img":"/src/assets/img/branch_img/top_brand_3.webp"
            },
            {
                "id":"5",
                "name":"Bose",
                "isActive":false,
                "img":"/src/assets/img/branch_img/top_brand_3.webp"
            },
            {
                "id":"6",
                "name":"Canon",
                "isActive":true,
                "img":"/src/assets/img/branch_img/canon.webp"            },
            {
                "id":"7",
                "name":"Dell",
                "isActive":true,
                "img":"/src/assets/img/branch_img/dell.webp"            },
            {
                "id":"8",
                "name":"DJL",
                "isActive":false,
                "img":"/src/assets/img/branch_img/top_brand_3.webp"
            },
            {
                "id":"9",
                "name":"Google",
                "isActive":false,
                "img":"/src/assets/img/branch_img/top_brand_3.webp"
            },
            {
                "id":"10",
                "name":"GoPro",
                "isActive":true,
                "img":"/src/assets/img/branch_img/gopro.webp"            },
            {
                "id":"11",
                "name":"HP",
                "isActive":true,
                "img":"/src/assets/img/branch_img/hp.webp"            },
            {
                "id":"12",
                "name":"Lenovo",
                "isActive":true,
                "img":"/src/assets/img/branch_img/lenovo.webp"            },
            {
                "id":"13",
                "name":"LG",
                "isActive":true,
                "img":"/src/assets/img/branch_img/lg.webp"            },
            {
                "id":"14",
                "name":"Microsoft",
                "isActive":true,
                "img":"/src/assets/img/branch_img/microsoft.webp"            },
            {
                "id":"15",
                "name":"Nest",
                "isActive":false,
                "img":"/src/assets/img/branch_img/top_brand_3.webp"
            },
            {
                "id":"16",
                "name":"Nikon",
                "isActive":true,
                "img":"/src/assets/img/branch_img/nikon.webp"            },
            {
                "id":"17",
                "name":"Samsung",
                "isActive":true,
                "img":"/src/assets/img/branch_img/samsung.webp"            },
            {
                "id":"18",
                "name":"Sonos",
                "isActive":false,
                "img":"/src/assets/img/branch_img/top_brand_3.webp"
            },
            {
                "id":"19",
                "name":"Sony",
                "isActive":false,
                "img":"/src/assets/img/branch_img/top_brand_3.webp"
            },
        ]
    }
) 
export const shopByInterest = ref(
    {
        byInterest:[
            {
                "id":"1",
                "name":"Gadgets"
            },
            {
                "id":"2",
                "name":"Hi End Audio"
            },
            {
                "id":"3",
                "name":"Home Theater"
            },
            {
                "id":"4",
                "name":"PC Gaming"
            },
            {
                "id":"5",
                "name":"Photography"
            },
            {
                "id":"6",
                "name":"Robotics and Drones"
            },
            {
                "id":"7",
                "name":"Smart Home"
            },
            {
                "id":"8",
                "name":"Virtual Reality"
            },
        ]
    }
)
export const footerBar = ref(
    {
        footer:[
            {
                "id":"1",
                "name":"About eBay"
            },
            {
                "id":"2",
                "name":"Announcements"
            },
            {
                "id":"3",
                "name":"Community"
            },
            {
                "id":"4",
                "name":"Security Center"
            },
            {
                "id":"5",
                "name":"Seller Information Center"
            },
            {
                "id":"6",
                "name":"Policies"
            },
            {
                "id":"7",
                "name":"Affiliates"
            },
            {
                "id":"8",
                "name":"Help & Contact"
            },
            {
                "id":"9",
                "name":"Site Map"
            },
        ],
        copy:[
            {
                "id":"1",
                "copy":"Copyright © 1995-2024 eBay Inc. All Rights Reserved."
            }
        ],
        // footer:[
        //     {

        //     }
        // ]
    }
)

export const sportMenu = ref(
    {
        leftMenu:[
            {
                "id":"1",
                "name":"Adidas",
                "subMenu":[
                    {
                        "id":"1",
                        "name":"Adicolor",
                    },
                    {
                        "id":"2",
                        "name":"Campus",
                    },
                    {
                        "id":"3",
                        "name":"EQT",
                    },
                    {
                        "id":"4",
                        "name":"Gazelle",
                    },
                    {
                        "id":"5",
                        "name":"Jeremy Scott",
                    },
                    {
                        "id":"6",
                        "name":"NMD",
                    },
                    {
                        "id":"7",
                        "name":"Originals",
                    },
                    {
                        "id":"8",
                        "name":"Stan Smith",
                    },
                    {
                        "id":"9",
                        "name":"Superstar",
                    },
                    {
                        "id":"10",
                        "name":"Tubular",
                    },
                    {
                        "id":"11",
                        "name":"UltraBoost",
                    },
                ],
                "subActive":false,
            },
            {
                "id":"2",
                "name":"Nike",
                "subMenu":[
                    {
                        "id":"1",
                        "name":"Air Force One",
                    },
                    {
                        "id":"2",
                        "name":"Air Max",
                    },
                    {
                        "id":"3",
                        "name":"Air Penny",
                    },
                    {
                        "id":"4",
                        "name":"Dunk",
                    },
                    {
                        "id":"5",
                        "name":"Flyknit",
                    },
                    {
                        "id":"6",
                        "name":"Huarache",
                    },
                    {
                        "id":"7",
                        "name":"Kobe Bryant",
                    },
                    {
                        "id":"8",
                        "name":"LeBron James",
                    },
                    {
                        "id":"9",
                        "name":"Nike SB",
                    },
                    {
                        "id":"10",
                        "name":"React",
                    },
                    {
                        "id":"11",
                        "name":"VaporMax",
                    },
                ],
                "subActive":false,
            },
            {
                "id":"3",
                "name":"Jordan",
                "subMenu":[
                    {
                        "id":"1",
                        "name":"Air Jordan 1",
                    },
                    {
                        "id":"2",
                        "name":"Air Jordan 2",
                    },
                    {
                        "id":"3",
                        "name":"Air Jordan 3",
                    },
                    {
                        "id":"4",
                        "name":"Air Jordan 4",
                    },
                    {
                        "id":"5",
                        "name":"Air Jordan 5",
                    },
                    {
                        "id":"6",
                        "name":"Air Jordan 6",
                    },
                    {
                        "id":"7",
                        "name":"Air Jordan 7",
                    },
                    {
                        "id":"8",
                        "name":"Air Jordan 8",
                    },
                    {
                        "id":"9",
                        "name":"Air Jordan 9",
                    },
                    {
                        "id":"10",
                        "name":"Air Jordan 10",
                    },
                    {
                        "id":"11",
                        "name":"Air Jordan 11",
                    },
                    {
                        "id":"12",
                        "name":"Air Jordan 12",
                    },
                    {
                        "id":"13",
                        "name":"Air Jordan 13",
                    },
                    {
                        "id":"14",
                        "name":"Air Jordan 14",
                    },
                    {
                        "id":"15",
                        "name":"Air Jordan 15",
                    },
                    {
                        "id":"16",
                        "name":"Air Jordan 16",
                    },
                    {
                        "id":"17",
                        "name":"Air Jordan 17",
                    },
                    {
                        "id":"18",
                        "name":"Air Jordan 18",
                    },
                    {
                        "id":"19",
                        "name":"Air Jordan 19",
                    },
                    {
                        "id":"20",
                        "name":"Air Jordan 20",
                    },
                    {
                        "id":"21",
                        "name":"Air Jordan 21",
                    },
                    {
                        "id":"22",
                        "name":"Air Jordan 22",
                    },
                    {
                        "id":"23",
                        "name":"Air Jordan 23",
                    },
                    {
                        "id":"24",
                        "name":"Air Jordan 2009",
                    },
                    {
                        "id":"25",
                        "name":"Air Jordan 2010",
                    },
                    {
                        "id":"26",
                        "name":"Air Jordan 2012",
                    },
                    {
                        "id":"27",
                        "name":"Jordan Melo",
                    },
                ],
                "subActive":false,
            },
            {
                "id":"4",
                "name":"New Balance",
                "subMenu":[
                    {
                        "id":"1",
                        "name":"New Balance",
                    },
                ],
                "subActive":false,
            },
            {
                "id":"5",
                "name":"PUMA",
                "subMenu":[
                    {
                        "id":"1",
                        "name":"Suede",
                    },
                ],
                "subActive":false,
            },
            {
                "id":"6",
                "name":"Reebok",
                "subMenu":[
                    {
                        "id":"1",
                        "name":"Kamikaze",
                    },
                    {
                        "id":"2",
                        "name":"Pump",
                    },
                    {
                        "id":"3",
                        "name":"Question ",
                    },
                    {
                        "id":"4",
                        "name":"Ventilator",
                    },
                ],
                "subActive":false,
            },
            {
                "id":"7",
                "name":"Converse",
                "subMenu":[
                    {
                        "id":"1",
                        "name":"Converse",
                    },
                ],
                "subActive":false,
            },
            {
                "id":"8",
                "name":"VANS",
                "subMenu":[
                    {
                        "id":"1",
                        "name":"VANS",
                    },
                ],
                "subActive":false,
            },
            {
                "id":"9",
                "name":"FILA",
                "subMenu":[
                    {
                        "id":"1",
                        "name":"FILA",
                    },
                ],
                "subActive":false,
            },
        ],
        shopByManSize:[
            {
                "id":"1",
                "name":"Less than 6.0"
            },
            {
                "id":"2",
                "name":"6.5"
            },
            {
                "id":"3",
                "name":"7.0"
            },
            {
                "id":"4",
                "name":"8.0"
            },
            {
                "id":"5",
                "name":"8.5"
            },
            {
                "id":"6",
                "name":"9.0"
            },
            {
                "id":"7",
                "name":"9.5"
            },
            {
                "id":"8",
                "name":"10.0"
            },
            {
                "id":"9",
                "name":"10.5"
            },
            {
                "id":"10",
                "name":"11.0"
            },
            {
                "id":"11",
                "name":"11.5"
            },
            {
                "id":"12",
                "name":"12.0"
            },
            {
                "id":"13",
                "name":"12.5"
            },
            {
                "id":"14",
                "name":"13.0"
            },
            {
                "id":"15",
                "name":"13.5"
            },
            {
                "id":"16",
                "name":"14.0"
            },
            {
                "id":"17",
                "name":"14.5"
            },
            {
                "id":"18",
                "name":"15.0"
            },
            {
                "id":"19",
                "name":"15.5"
            },
            {
                "id":"20",
                "name":"16 <"
            },
        ],
        shopByWomanSize:[
            {
                "id":"1",
                "name":"Less than 5.0"
            },
            {
                "id":"2",
                "name":"5.0"
            },
            {
                "id":"3",
                "name":"5.5"
            },
            {
                "id":"4",
                "name":"6.0"
            },
            {
                "id":"5",
                "name":"6.5"
            },
            {
                "id":"6",
                "name":"7.0"
            },
            {
                "id":"7",
                "name":"7.5"
            },
            {
                "id":"8",
                "name":"8.0"
            },
            {
                "id":"9",
                "name":"8.5"
            },
            {
                "id":"10",
                "name":"9.0"
            },
            {
                "id":"11",
                "name":"9.5"
            },
            {
                "id":"12",
                "name":"10.0"
            },
            {
                "id":"13",
                "name":"10.5"
            },
            {
                "id":"14",
                "name":"11 <"
            },
        ],
        sportByCategory:[
            {
                "id":"1",
                "name":"Athletic Vintage Shoes for Men"
            },
            {
                "id":"2",
                "name":"Leather Athletic Vintage Shoes for Men"
            },
            {
                "id":"3",
                "name":"Canvas Athletic Vintage Shoes for Men"
            },
            {
                "id":"4",
                "name":"Suede Athletic Vintage Shoes for Men"
            },
            {
                "id":"5",
                "name":"Athletic 1940s Vintage Shoes for Men"
            },
        ]
    }
)