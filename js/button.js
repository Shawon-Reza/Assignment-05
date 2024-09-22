// Catch Donation Button in home page
document.getElementById('donationBtn').addEventListener('click', function () {
    const cardContainer = document.getElementById('cardContainerId');
    cardContainer.classList.remove('hidden');
    document.getElementById('historyContainerId').classList.add('hidden')
    document.getElementById('donationBtn').classList.add('bg-[#B4F461]')
    document.getElementById('historyBtn').classList.remove('bg-[#B4F461]')


});

// Catch History Button in home page
document.getElementById('historyBtn').addEventListener('click', function () {
    document.getElementById('cardContainerId').classList.add('hidden')
    document.getElementById('historyContainerId').classList.remove('hidden')

    document.getElementById('donationBtn').classList.remove('bg-[#B4F461]')
    document.getElementById('historyBtn').classList.add('bg-[#B4F461]')
})



// Donate Process
document.getElementById('donateProcessBtn1').addEventListener('click', function () {
    //validation and Total money Update 
    const money = inputValidation('c1InputId');
    // Donated Money update in specefic field
    const noakhaliDonateMoney = ammountDonatedValidation('card1DonationId', money)
    // 
    const updatedHistory=updateHistory('headingForNoakhali',money)



    console.log("Noakhali", typeof money)
})
