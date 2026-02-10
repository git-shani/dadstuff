document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('.card-button');
    
    whatsappButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const cardTitle = this.closest('.card-content').querySelector('.card-title').textContent;
            const phoneNumber = '1234567890'; // Replace with your WhatsApp number
            const message = `Hi! I'm interested in ${cardTitle}. Can you provide more details?`;
            
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        });
    });
});
