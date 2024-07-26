document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Error submitting the form.');
        }
    }).catch(error => {
        alert('Error submitting the form.');
    });
});
