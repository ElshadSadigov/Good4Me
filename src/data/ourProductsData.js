import ourProducts1 from '../imgs/ourProducts1.png'
import ourProducts2 from '../imgs/ourProducts2.png'
import multiVitamin from '../imgs/multi-vitamin.png'
import ourProducts4 from '../imgs/ourProducts4.png'

const ourProductsData = [
    {
        id: 1,
        title: "MULTI-VITAMIN (3 MONTH SUPPLY)",
        onSale: false,
        newPrice: "39.95",
        price: "199.75",
        img: ourProducts1
    },
    {
        id: 2,
        title: "VITAMIN C: IMMUNITY SUPPORT",
        onSale: true,
        newPrice: "39.95",
        price: "199.75",
        img: ourProducts2
    },
    {
        id: 3,
        title: "MULTI-VITAMIN (3 MONTH SUPPLY)",
        onSale: true,
        newPrice: "39.95",
        price: "199.75",
        img: multiVitamin
    },
    {
        id: 4,
        title: "APPLE CIDER VINEGAR (3 MONTH SUPPLY)",
        onSale: true,
        newPrice: "94.95",
        price: "199.75",
        img: ourProducts4
    }
]

export default ourProductsData