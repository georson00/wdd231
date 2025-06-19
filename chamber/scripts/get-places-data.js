

async function loadCards() {
  try {
    const response = await fetch('./data/places.json');
    if (!response.ok) throw new Error('Failed to fetch data.');

    const places = await response.json();
    const container = document.getElementById('placesContainer');

    places.forEach((place ) => {
      const card = document.createElement('div');
      card.classList.add('place-card');
      const photo = document.createElement('img');
      photo.setAttribute('src', place.image);
      photo.setAttribute('alt', place.name);  
      photo.setAttribute('loading', 'lazy');  

      card.appendChild(photo);

      const placeName = document.createElement('h2');
      placeName.textContent = place.name;
      card.appendChild(placeName);

      const address = document.createElement('address');
      address.textContent = place.address;  
      card.appendChild(address);

      const description = document.createElement('p');
      description.textContent = place.description;  
      card.appendChild(description);

      const link = document.createElement('a');
      link.textContent = 'Learn More';
      link.setAttribute('href', place.url);
      link.setAttribute('target', '_blank');

      link.setAttribute('rel', 'noopener');
      card.appendChild(link);


      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading cards:', error);
  }
}
// document.addEventListener("DOMContentLoaded", loadCards);
document.addEventListener('DOMContentLoaded', () => { loadCards(); });
