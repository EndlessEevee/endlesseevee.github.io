// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51PBMFWCZYaFRUYezJHsiqgp6BHarFfhZjlNkDT8MNnxSOpCe3pDR427dyqYJMmEIF5JRe6aQc16KxHK3euoMZ9de00r03MbmAR');
(async () => {
    const product = await stripe.products.create({
    name: 'Team Hoodie',
    description: "Team Paradise's team hoodie for the FRC Crescendo Season.",
    active: "true",
    shippable: false,
    statement_descriptor: 'Team Paradise',
    default_price_data: {
        currency: 'usd',
        unit_amount: 4500, 
    },
    });
    
    console.log(product);
})()
