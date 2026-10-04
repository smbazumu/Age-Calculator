const birthDay = document.getElementById("day")
const birthMonth = document.getElementById("month")
const birthYear = document.getElementById("year")

const resultYears = document.getElementById("yearsofage")
const resultMonths = document.getElementById("monthsfromdate")
const resultDays = document.getElementById("daysspan")

const result = document.getElementById("result")

const theme = document.getElementById("theme")
let themeStatus = false

function calculateAge() {
    const today = new Date()
    const day = birthDay.value
    const month = birthMonth.value - 1
    const year = birthYear.value

    let days = today.getDate() - day
    let months = today.getMonth() - month
    let years = today.getFullYear() - year

    if (days < 0) {
        months--

        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0)

        days += previousMonth.getDate()
    }

    console.log(days)

    if (months < 0) {
        years--
        months += 12
    }

    resultYears.textContent = `${years} `
    resultMonths.textContent = `${months} `
    resultDays.textContent = `${days} `
}

function themeChange() {
    if (themeStatus === false) {
        document.body.classList.add("dark")
        theme.src = "icon-sun.svg"
        themeStatus = true
    } else {
        document.body.classList.remove("dark")
        theme.src = "icon-moon.svg"
        themeStatus = false
    }
}

result.addEventListener('click', () => {
    calculateAge()
})

theme.addEventListener('click', () => {
    themeChange()
})

document.addEventListener('keydown', (event) => {
    const key = event.key

    if (key === 'Enter') {
        calculateAge()
    }

    if (key === 'T' || key === 't') {
        themeChange()
    }
})