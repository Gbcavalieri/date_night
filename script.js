document.addEventListener('DOMContentLoaded', function() {
    // Você pode alterar a data do casamento aqui
    const weddingDate = new Date('2024-12-18'); // Changed to ISO format
    const today = new Date();
    
    const months = (today.getFullYear() - weddingDate.getFullYear()) * 12 + 
                  (today.getMonth() - weddingDate.getMonth());
    
    document.getElementById('years').textContent = Math.abs(months);
});