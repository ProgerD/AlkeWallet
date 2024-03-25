
// Contactos simulados
const contactos = [
    "María Pérez",
    "Juan García",
    "Ana López",
    "Pedro Martínez",
    "María Rodríguez",
    "Luisa Sánchez",
    "Carlos Gómez"
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const filteredContacts = contactos.filter(contact => contact.toLowerCase().includes(searchText));
    
    if (searchText === '') {
        searchResults.style.display = 'none';
        searchResults.innerHTML = '';
    } else {
        searchResults.innerHTML = '';
        filteredContacts.forEach(contact => {
            const link = document.createElement('a');
            link.textContent = contact;
            link.href = 'deposit.html?contacto=' + encodeURIComponent(contact); // Pasar el nombre del contacto como parámetro en la URL
            searchResults.appendChild(link);
        });
        searchResults.style.display = 'block';
    }
});

