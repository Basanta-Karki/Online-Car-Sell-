// Form Validation Functions
function validateRegistrationForm(event) {
  event.preventDefault()
  let isValid = true

  // Get form elements
  const fullName = document.getElementById("fullName")
  const address = document.getElementById("address")
  const phone = document.getElementById("phone")
  const email = document.getElementById("email")
  const username = document.getElementById("username")
  const password = document.getElementById("password")
  const confirmPassword = document.getElementById("confirmPassword")

  // Clear previous error messages
  document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""))

  // Validate Full Name
  if (fullName && fullName.value.trim() === "") {
    document.getElementById("fullNameError").textContent = "Full name is required"
    isValid = false
  }

  // Validate Address
  if (address && address.value.trim() === "") {
    document.getElementById("addressError").textContent = "Address is required"
    isValid = false
  }

  // Validate Phone
  if (phone) {
    const phoneRegex = /^\d{10}$/
    if (phone.value.trim() === "") {
      document.getElementById("phoneError").textContent = "Phone number is required"
      isValid = false
    } else if (!phoneRegex.test(phone.value.trim())) {
      document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number"
      isValid = false
    }
  }

  // Validate Email
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email.value.trim() === "") {
      document.getElementById("emailError").textContent = "Email is required"
      isValid = false
    } else if (!emailRegex.test(email.value.trim())) {
      document.getElementById("emailError").textContent = "Please enter a valid email address"
      isValid = false
    }
  }

  // Validate Username - only alphabets allowed
  if (username) {
    const usernameRegex = /^[a-zA-Z]+$/
    if (username.value.trim() === "") {
      document.getElementById("usernameError").textContent = "Username is required"
      isValid = false
    } else if (!usernameRegex.test(username.value.trim())) {
      document.getElementById("usernameError").textContent =
        "Username should only contain alphabets (no numbers or special characters)"
      isValid = false
    } else if (email && username.value.trim() === email.value.trim()) {
      document.getElementById("usernameError").textContent = "Username should not be the same as your email"
      isValid = false
    }
  }

  // Validate Password - 6-10 chars with alphabets, numbers, and specific special chars
  if (password) {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[?$#@])[a-zA-Z\d?$#@]{6,10}$/
    if (password.value.trim() === "") {
      document.getElementById("passwordError").textContent = "Password is required"
      isValid = false
    } else if (!passwordRegex.test(password.value)) {
      document.getElementById("passwordError").textContent =
        "Password must be 6-10 characters and include alphabets, numbers, and at least one special character (?, $, #, @)"
      isValid = false
    }
  }

  // Validate Confirm Password
  if (confirmPassword && password) {
    if (confirmPassword.value.trim() === "") {
      document.getElementById("confirmPasswordError").textContent = "Please confirm your password"
      isValid = false
    } else if (confirmPassword.value !== password.value) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match"
      isValid = false
    }
  }

  if (isValid) {
    alert("Registration successful! You can now log in.")
    window.location.href = "seller-login.html"
  }

  return isValid
}

function validateLoginForm(event) {
  event.preventDefault()
  let isValid = true

  // Get form elements
  const username = document.getElementById("loginUsername")
  const password = document.getElementById("loginPassword")

  // Clear previous error messages
  document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""))

  // Validate Username - only alphabets allowed
  if (username) {
    const usernameRegex = /^[a-zA-Z]+$/
    if (username.value.trim() === "") {
      document.getElementById("loginUsernameError").textContent = "Username is required"
      isValid = false
    } else if (!usernameRegex.test(username.value.trim())) {
      document.getElementById("loginUsernameError").textContent =
        "Username should only contain alphabets (no numbers or special characters)"
      isValid = false
    }
  }

  // Validate Password - 6-10 chars with alphabets, numbers, and specific special chars
  if (password) {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[?$#@])[a-zA-Z\d?$#@]{6,10}$/
    if (password.value.trim() === "") {
      document.getElementById("loginPasswordError").textContent = "Password is required"
      isValid = false
    } else if (!passwordRegex.test(password.value)) {
      document.getElementById("loginPasswordError").textContent =
        "Password must be 6-10 characters and include alphabets, numbers, and at least one special character (?, $, #, @)"
      isValid = false
    }
  }

  if (isValid) {
    alert("Login successful!")
    window.location.href = "add-car.html"
  }

  return isValid
}

function validateAddCarForm(event) {
  event.preventDefault()
  let isValid = true

  // Get form elements
  const make = document.getElementById("make")
  const model = document.getElementById("model")
  const year = document.getElementById("year")
  const mileage = document.getElementById("mileage")
  const location = document.getElementById("location")
  const price = document.getElementById("price")

  // Clear previous error messages
  document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""))

  // Validate Make
  if (make && make.value.trim() === "") {
    document.getElementById("makeError").textContent = "Make is required"
    isValid = false
  }

  // Validate Model
  if (model && model.value.trim() === "") {
    document.getElementById("modelError").textContent = "Model is required"
    isValid = false
  }

  // Validate Year
  if (year) {
    const currentYear = new Date().getFullYear()
    if (year.value.trim() === "") {
      document.getElementById("yearError").textContent = "Year is required"
      isValid = false
    } else if (year.value < 1900 || year.value > currentYear) {
      document.getElementById("yearError").textContent = `Year must be between 1900 and ${currentYear}`
      isValid = false
    }
  }

  // Validate Mileage
  if (mileage && mileage.value.trim() === "") {
    document.getElementById("mileageError").textContent = "Mileage is required"
    isValid = false
  }

  // Validate Location
  if (location && location.value.trim() === "") {
    document.getElementById("locationError").textContent = "Location is required"
    isValid = false
  }

  // Validate Price
  if (price && price.value.trim() === "") {
    document.getElementById("priceError").textContent = "Price is required"
    isValid = false
  }

  if (isValid) {
    alert("Car listed successfully!")
    window.location.href = "index.html"
  }

  return isValid
}

function handleSearch(event) {
  event.preventDefault()

  const model = document.getElementById("searchModel").value.trim().toLowerCase()
  const location = document.getElementById("searchLocation").value.trim().toLowerCase()

  // In a real application, this would be an API call
  // For this demo, we'll filter the hardcoded results

  // Get all car cards
  const carCards = document.querySelectorAll(".car-card")
  let resultsFound = false

  carCards.forEach((card) => {
    const cardModel = card.querySelector("h3").textContent.toLowerCase()
    const cardLocation = card.querySelector("p").textContent.toLowerCase()

    // Check if the card matches the search criteria
    const modelMatch = model === "" || cardModel.includes(model)
    const locationMatch = location === "" || cardLocation.includes(location)

    if (modelMatch && locationMatch) {
      card.style.display = "block"
      resultsFound = true
    } else {
      card.style.display = "none"
    }
  })

  // Show a message if no results found
  const resultsGrid = document.getElementById("resultsGrid")
  if (!resultsFound) {
    resultsGrid.innerHTML =
      '<p class="no-results">No cars found matching your criteria. Please try a different search.</p>'
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Registration Form
  const registrationForm = document.getElementById("registrationForm")
  if (registrationForm) {
    registrationForm.addEventListener("submit", validateRegistrationForm)
  }

  // Login Form
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", validateLoginForm)
  }

  // Add Car Form
  const addCarForm = document.getElementById("addCarForm")
  if (addCarForm) {
    addCarForm.addEventListener("submit", validateAddCarForm)
  }

  // Search Form
  const searchForm = document.getElementById("searchForm")
  if (searchForm) {
    searchForm.addEventListener("submit", handleSearch)
  }
})
