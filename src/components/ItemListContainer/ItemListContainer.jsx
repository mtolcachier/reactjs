import React from "react";
import "./ItemListContainer.css";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import Carousel from "../Carousel/Carousel";

const ItemListContainer = () => {
    const items = [
        {
            id: 1,
            name: `Nike Air Force 1 '07`,
            brand: "nike",
            src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-shoe-Dz225W.png",
            price: 95,
            category: "lifestyle",
            women: true,
            men: true,
            details: `
                    LEGENDARY STYLE REFINED.
                    The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.
                    Benefits
                    The stitched leather overlays on the upper add heritage style, durability and support.
                    Originally designed for hoops, Nike Air cushioning adds lightweight, all-day comfort.
                    The low-cut silhouette adds a clean, streamlined look.
                    The padded collar feels soft and comfortable.
                    Product Details
                    Foam midsole
                    Perforations on the toe
                    Colour Shown: White/White/White/White
                    Style: DD8959-100
                    Country/Region of Origin: Vietnam,Indonesia,China
                    Air Force 1 Origins
                    Debuting in 1982, the AF-1 was the first basketball shoe to house Nike Air, revolutionising the game while rapidly gaining traction around the world. Today, the Air Force 1 stays true to its roots with the same soft and springy cushioning that changed sneaker history.
                    `
        },
        {
            id: 2,
            name: "FORUM 84 HOME ALONE 2",
            brand: "adidas",
            src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee5a2188befc444389e3aef600e5413f_9366/Forum_84_Home_Alone_2_Grey_ID4328_01_standard.jpg",
            price: 115,
            category: "lifestyle",
            women: false,
            men: true,
            details: `
                    The sequel is here. Based on the iconic '90s movie "Home Alone 2," these adidas Forum trainers are done up in a tribute to Kevin's misadventures in New York City. From shades of gray leather resembling pigeons to lace jewels quoting the pigeon lady herself, the colors and details revive the touching scene where Kevin befriends a pigeon lady in the park. It's all finished with small details, from the tongue label to graphic sockliners.
                    Lace closure with hook-and-loop strap
                    Leather upper
                    Textile lining
                    Rubber outsole
                    Imported
                    Product color: Charcoal Solid Grey / Crystal White / Grey Four
                    Product code: ID4328
                    `
        },
        {
            id: 3,
            name: `Chuck Taylor All Star Wide High Top`,
            brand: "converse",
            src: "https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/m/9/m9160_a_107x1_1_2.jpg",
            price: 85,
            category: "lifestyle",
            women: true,
            men: false,
            details: `
                The Converse Chuck Taylor All Star is the one that started it all for Converse. When it comes to sneakers, there’s nothing more pure than a canvas upper and a vulcanized rubber sole. This is the sneaker that spawned countless imitators, with its rubber toe cap, toe bumper and striping. Now in a wider fit.
                WHY YOU SHOULD BE DOWN
                Canvas upper for lightweight, flexible comfort
                Rubber outsole for durable traction
                Medial eyelets enhance airflow
                Now in a wider fit
                `
        },
        {
            id: 4,
            name: `Street Fighter Zig Kinetica 2.5 Shoes`,
            brand: "reebok",
            src: "https://assets.reebok.com/images/w_600,f_auto,q_auto/089855eb2e34478dbca1aeeb0103b599_9366/Street_Fighter_Zig_Kinetica_2.5_Shoes_Brown_GZ9539_01_standard.jpg",
            price: 130,
            category: "sports",
            women: true,
            men: true,
            details:`
            STYLISH SHOES INSPIRED BY DHALSIM FROM STREET FIGHTER
            Reebok and Street Fighter join forces to equip you with the kick-ass gear you need to become champion. Inspired by Dhalsim's fighting style, these shoes are for the yoga master. A natural upper that consists of distressed canvas, aged textiles, and reinforced stitching. Metallic eyelets take inspiration from his bracelets and a skull dubrae to resemble his necklace. These shoes are on fire.
            Textile upper
            Street Fighter collection
            Lace closure
            Floatride Energy Foam cushioning
            Zig Energy Shell surrounds the foam midsole
            Zig Energy Bands outsole
            Imported
            Product color: Cinnamon Stick / Parched Earth / Weathered Yellow
            Product code: GZ9539
            `
        },
        {
            id: 5,
            name: `Sportswear by PUMA RS-Simul8 Sneakers`,
            brand:"puma",
            src:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/390337/01/sv01/fnd/PNA/fmt/png/Sportswear-by-PUMA-RS-Simul8-Sneakers",
            price: 125,
            category: "lifestyle",
            women: false,
            men: false,
            details: `
            PRODUCT STORY
            The RS-Simul8 is the latest model to get the SWxP treatment taking cues from the archive and being mainly inspired by the original Puma’s RS-350. It features the iconic RS cushioning technology and an upper that blends archive and futuristic details. The shoe takes inspiration from the fashion utilitarian. A mix of rich nubucks and leathers with original embroidery graphic, lace hardware and finishing with speckle treatments.
            
            DETAILS
            RS technology on midsole
            Perforated Nubuck upper
            Light Sand nubuck smooth overlays
            Heavy embroidered pattern on top a leather formstrip
            Suede accents
            Lace closure
            `,
        }
    ];

    const { category } = useParams();
    const filtered = category ? items.filter((item) => item.brand === category) : items;

    return (
    <div className="container-fluid text-center">
        <div className="row">
            <Carousel/>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 my-5 justify-content-between">
            {filtered.map(({ id, name, brand, src, price, category, women, men, details }) => (
                    <Item
                    key={id}
                    id={id}
                    brand={brand}
                    name={name}
                    src={src}
                    price={price}
                    category={category}
                    women={women}
                    men={men}
                    details={details}
                    />
                )
            )}
        </div>
    </div>
    );
};

export default ItemListContainer;
