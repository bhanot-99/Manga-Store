fetch('manga-data.json')
  .then(response => response.json())
  .then(data => {
    const mangaGrid = document.querySelector('.manga-grid');
    data.forEach(manga => {
      const mangaCard = document.createElement('div');
      mangaCard.className = 'manga-card';
      const img = document.createElement('img');
      img.src = manga.image;
      img.alt = manga.title;
      const h3 = document.createElement('h3');
      h3.textContent = manga.title;
      const buyBtn = document.createElement('a');
      buyBtn.href = '#';
      buyBtn.className = 'buy-btn';
      buyBtn.textContent = 'Buy Now';
      mangaCard.appendChild(img);
      mangaCard.appendChild(h3);
      mangaCard.appendChild(buyBtn);
      mangaGrid.appendChild(mangaCard);
    });
  });