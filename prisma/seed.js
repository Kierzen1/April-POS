const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    console.log('Seeding products...')

    const products = [
        { barcode: '4800016601234', name: 'Chippy Mild Spicy', price: 25.50, stock: 100, category: 'Snacks' },
        { barcode: '4800016604567', name: 'Piattos Cheese', price: 32.00, stock: 80, category: 'Snacks' },
        { barcode: '4800011107890', name: 'C2 Green Tea 500ml', price: 28.00, stock: 120, category: 'Beverages' },
        { barcode: '4800011101112', name: 'Coca-Cola 1.5L', price: 75.00, stock: 50, category: 'Beverages' },
        { barcode: '4800022203334', name: 'Safeguard White 130g', price: 62.00, stock: 40, category: 'Personal Care' },
        { barcode: '4800022204445', name: 'Bear Brand Powder 320g', price: 155.00, stock: 30, category: 'Dairy' },
        { barcode: '4800033305556', name: 'Lucky Me Instant Mami Chicken', price: 15.00, stock: 200, category: 'Noodles' },
        { barcode: '4800033306667', name: 'Pancit Canton Extra Hot', price: 18.50, stock: 150, category: 'Noodles' },
    ]

    for (const product of products) {
        await prisma.product.upsert({
            where: { barcode: product.barcode },
            update: {},
            create: product,
        })
    }

    console.log('Seeding complete!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
