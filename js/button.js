// Catch Donation Button in home page
document.getElementById('donationBtn').addEventListener('click', function () {
    const cardContainer = document.getElementById('cardContainerId');
    cardContainer.classList.remove('hidden');
    document.getElementById('donationBtn').classList.add('bg-[#B4F461]')
    document.getElementById('historyBtn').classList.remove('bg-[#B4F461]')


});

// Catch History Button in home page
document.getElementById('historyBtn').addEventListener('click', function () {
    document.getElementById('cardContainerId').classList.add('hidden')

    document.getElementById('donationBtn').classList.remove('bg-[#B4F461]')
    document.getElementById('historyBtn').classList.add('bg-[#B4F461]')
})

