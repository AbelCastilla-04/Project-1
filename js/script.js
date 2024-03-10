document.addEventListener("JSfeature", function() {
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const fstname = document.getElementById("firstName").value;
		const lstname = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        console.log("First Name:", fstname);
		console.log("Last Name:", lstname);
        console.log("Email:", email);
    });
});