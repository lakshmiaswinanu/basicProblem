const data = [
    {
        shopName: "shop1",
        items: [
            {
                name: "Carrot",
                price: 30,
            },
            {
                name: "Apple",
                price: 40,
            },
        ],
    },
    {
        shopName: "shop2",
        items: [
            {
                name: "Carrot",
                price: 20,
            },
            {
                name: "Apple",
                price: 35,
            },
            {
                name: "Guava",
                price: 50,
            },
        ]
    },
    {
        shopName: "shop3",
        items: [
            {
                name: "Guava",
                price: 10,
            },
            {
                name: "Apple",
                price: 30,
            },
            {
                name: "Papaya",
                price: 40,
            },
        ]
    },
];


const getItemName = (items) => items.map((item) => item.name);

const getItems = (shops) => {
    const nameItem = shops.map((shop) => getItemName(shop.items));
    const merge = nameItem.flat();
    const duplicates = merge.filter((item, index) => merge.indexOf(item) === index);
    return duplicates;

}
const getShopName = (shops) => shops.map((item) => item.shopName);

const main = (shops) => {
    const shopNames = getShopName(shops);
    const items = getItems(shops);

    return { shopNames, items };
}

console.log(main(data));

