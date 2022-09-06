const input = require('sync-input')

console.log('WELCOME TO THE CARNIVAL GIFT SHOP!\n' +
    'Hello friend! Thank you for visiting the carnival!')

let gifts = {
    1: ["Teddy Bear", 10], 2: ["Big Red Ball", 5], 3: ["Huge Bear", 50], 4: ["Candy", 8],
    5: ["Stuffed Tiger", 15], 6: ["Stuffed Dragon", 30],
    7: ["Skateboard", 100], 8: ["Toy Car", 25], 9: ["Basketball", 20], 10: ['Scary Mask', 75],
}

function showGifts(giftsList) {
    console.log(`Here\'s the list of gifts:\n`)
    if (Object.keys(giftsList).length === 0) {
        console.log('Wow! There are no gifts to buy.')
    } else {
        for (let gift of Object.entries(giftsList)) {
            console.log(`${gift[0]}- ${gift[1][0]}, Cost: ${gift[1][1]} tickets`)
        }
    }
}

showGifts(gifts)
let tickets = 0
let active = true

while (active) {
    let userIntention = input('\nWhat do you want to do?\n1-Buy a gift' +
        ' 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n')
    if (Object.keys(gifts).length === 0) {
        switch (userIntention) {
            case '4':
                console.log('Here\'s the list of gifts:\n\nWow! There are no gifts to buy.')
                break
            case '5':
                console.log('Have a nice day!')
                active = false
                break
            default:
                console.log('Wow! There are no gifts to buy.')
                break
        }
    } else {
        switch (userIntention) {
            case '1':
                let demandedGift = input('Enter the number of the gift you want to get: ')
                if (isNaN(parseInt(demandedGift))) {
                    console.log('Please enter a valid number!')
                    break
                } else if (!gifts.hasOwnProperty(parseInt(demandedGift))) {
                    console.log('There is no gift with that number!')
                    break
                } else if (tickets - gifts[parseInt(demandedGift)][1] < 0) {
                    console.log(`You don\'t have enough tickets to buy this gift.\nTotal tickets: ${tickets}`)
                    break
                } else {
                    tickets -= gifts[parseInt(demandedGift)][1]
                    console.log(`Here you go, one ${gifts[parseInt(demandedGift)][0]}!\nTotal tickets: ${tickets}`)
                    delete gifts[demandedGift]
                    break
                }
            case '2':
                let addedTickets = input('Enter the ticket amount: ')
                if (!isNaN(parseInt(addedTickets)) && parseInt(addedTickets) >= 0 && (parseInt(addedTickets)) <= 1000) {
                    tickets += parseInt(addedTickets)
                    console.log(`Total tickets: ${tickets}`)
                    break
                } else {
                    console.log('Please enter a valid number between 0 and 1000.')
                    break
                }
            case '3':
                console.log(`Total tickets: ${tickets}`)
                break
            case '4':
                showGifts(gifts)
                break
            case '5':
                console.log('Have a nice day!')
                active = false
                break
            default:
                console.log('Please enter a valid number!')
                break
        }
    }
}
