document.addEventListener("DOMContentLoaded", function() {
    // Dark Mode Toggle
    const toggleDarkMode = document.getElementById("toggleDarkMode");

    if (toggleDarkMode) {
        toggleDarkMode.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");

            // Store user preference in localStorage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                toggleDarkMode.textContent = "Switch to Light Mode";
            } else {
                localStorage.setItem("theme", "light");
                toggleDarkMode.textContent = "Switch to Dark Mode";
            }
        });
    }

    // Load theme from localStorage (keeps theme after refresh)
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (toggleDarkMode) toggleDarkMode.textContent = "Switch to Light Mode";
    }

    // Greeting Alert on Load
    alert("Welcome to Mark Aidel Ray D. Olaco's Portfolio!");

    // Click Alert for Links
    const clickableLinks = document.querySelectorAll(".clickable-link");

    clickableLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            alert(`You clicked: ${this.innerText}`);
        });
    });
});

