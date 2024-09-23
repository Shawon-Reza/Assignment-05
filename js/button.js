// Catch Donation Button in home page  [toggle]
document.getElementById('donationBtn').addEventListener('click', function () {
    const cardContainer = document.getElementById('cardContainerId');
    cardContainer.classList.remove('hidden');
    document.getElementById('historyContainerId').classList.add('hidden')
    document.getElementById('donationBtn').classList.add('bg-[#B4F461]')
    document.getElementById('historyBtn').classList.remove('bg-[#B4F461]')


});

// Catch History Button in home page   [toggle]
document.getElementById('historyBtn').addEventListener('click', function () {
    document.getElementById('cardContainerId').classList.add('hidden')
    document.getElementById('historyContainerId').classList.remove('hidden')

    document.getElementById('donationBtn').classList.remove('bg-[#B4F461]')
    document.getElementById('historyBtn').classList.add('bg-[#B4F461]')
})
// Home page to Blog Page
document.getElementById('blogPageBtn').addEventListener('click',function(){
    window.location.href="blog.html"
})



// Donate Process for card -->o1
document.getElementById('donateProcessBtn1').addEventListener('click', function () {
    //validation and Total money Update 
    const money = inputValidation('c1InputId');
    // Donated Money update in specefic field
    const noakhaliDonateMoney = ammountDonatedValidation('card1DonationId', money)
    // 
    const updatedHistory=updateHistory('headingForNoakhali',money)
})

// Donate Process for card -->o2
document.getElementById('donateProcessBtn2').addEventListener('click', function () {
    //validation and Total money Update 
    const money = inputValidation('c2InputId');
    // Donated Money update in specefic field
    const noakhaliDonateMoney = ammountDonatedValidation('card2DonationId', money)
    // 
    const updatedHistory=updateHistory('headingForfeni',money)
})

// Donate Process for card -->o3
document.getElementById('donateProcessBtn3').addEventListener('click', function () {
    //validation and Total money Update 
    const money = inputValidation('c3InputId');
    // Donated Money update in specefic field
    const noakhaliDonateMoney = ammountDonatedValidation('card3DonationId', money)
    // 
    const updatedHistory=updateHistory('headingForQuota',money)
})



// Navber Scroll 
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    
    // Check if the scroll position is greater than a set value (e.g., 50 pixels)
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Semi-transparent background
    } else {
      navbar.style.backgroundColor = 'transparent'; // Transparent background
    }
  });
  
