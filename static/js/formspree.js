const contactForm = document.getElementById("contact-form");
const contactFormStatus = document.getElementById("contact-form-status");

async function handleSubmit(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    fetch(event.target.action, {
        method: contactForm.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            window.location.replace("https://kovert.no/takk-for-din-interesse/");
            contactFormStatus.innerHTML = "Thanks for your submission, you will hear back from us shortly!";
            contactForm.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    contactFormStatus.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    contactFormStatus.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        contactFormStatus.innerHTML = "Oops! There was a problem submitting your form"
    });
}
contactForm.addEventListener("submit", handleSubmit)