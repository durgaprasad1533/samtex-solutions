// Update date and time every second
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const dateTimeString = now.toLocaleDateString('en-US', options);
  document.getElementById('current-date-time').textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display date and time immediately on load



// Get all list item elements
const listItems = document.querySelectorAll('.sidebar ul li');

// Add event listener to each list item
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove selected class from all list items
    listItems.forEach((i) => i.classList.remove('selected'));
    
    // Add selected class to the clicked list item
    item.classList.add('selected');
  });
});


// user-icon dropdown
const userIcon = document.querySelector('.user-icon');
const userDropdown = document.querySelector('.user-dropdown');

const handleUserIconClick = () => {
  userDropdown.classList.toggle('show');
  document.addEventListener('click', handleOutsideClick);
};

const handleOutsideClick = (e) => {
  if (e.target !== userIcon && e.target !== userDropdown) {
    userDropdown.classList.remove('show');
    document.removeEventListener('click', handleOutsideClick);
  }
};

userIcon.addEventListener('click', handleUserIconClick);


// my function toggle links
function myFunction() {
  const x = document.getElementById("myLinks");
  if (x !== null) { // Add null check
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}