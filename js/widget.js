// widget.js

// Data for the cities
const data = {
  "Norge": { "Endring siste måned": -0.6, "Gjennomsnitt kvm. pris": "53 776", "Gjennomsnittspris": "4 795 936" },
  "Oslo": { "Endring siste måned": -0.7, "Gjennomsnitt kvm. pris": "95 066", "Gjennomsnittspris": "6 956 030" },
  "Bergen": { "Endring siste måned": -0.4, "Gjennomsnitt kvm. pris": "54 629", "Gjennomsnittspris": "4 588 084" },
  "Trondheim": { "Endring siste måned": -0.2, "Gjennomsnitt kvm. pris": "53 670", "Gjennomsnittspris": "4 531 763" },
  "Stavanger": { "Endring siste måned": 1.2, "Gjennomsnitt kvm. pris": "47 323", "Gjennomsnittspris": "4 876 680" },
  "Kristiansand": { "Endring siste måned": -0.3, "Gjennomsnitt kvm. pris": "40 802", "Gjennomsnittspris": "4 336 181" },
  "Tromsø": { "Endring siste måned": -0.3, "Gjennomsnitt kvm. pris": "56 118", "Gjennomsnittspris": "4 646 623" }
};
const widgetContainer = document.getElementById('widget-placeholder');
  const widget = document.createElement('div');

  // Create dropdown
  const dropdown = document.createElement('div');
  dropdown.className = 'dropdown';
  dropdown.style.display = 'flex';
  dropdown.style.flexDirection = 'column';
  dropdown.style.justifyContent = 'center';

  const label = document.createElement('label');
  label.htmlFor = 'location';
  label.style.fontSize = '28px';
  label.style.marginBottom = '10px';
  label.textContent = 'Velg sted:';
  dropdown.appendChild(label);

  const select = document.createElement('select');
  select.id = 'location';
  select.style.width = '100%';
  Object.keys(data).forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    select.appendChild(option);
  });
  dropdown.appendChild(select);

  // Create fact box
  const factBox = document.createElement('div');
  factBox.className = 'fact-box';

  const place = document.createElement('div');
  place.className = 'place';

  const img = document.createElement('img');
  img.src = 'img/map.jpg';
  img.alt = 'map pin';
  img.style.width = '30px';
  img.style.height = '30px';
  img.style.marginLeft = '10px';
  place.appendChild(img);

  const cityName = document.createElement('h3');
  cityName.id = 'city-name';
  cityName.style.fontSize = '22px';
  place.appendChild(cityName);

  factBox.appendChild(place);

  const cards = document.createElement('div');
  cards.className = 'cards';

  const card1 = document.createElement('div');
  card1.className = 'card';
  const label1 = document.createElement('label');
  label1.className = 'cardLabel';
  label1.htmlFor = 'last-month-change';
  label1.textContent = 'Endring siste måned:';
  const lastMonthChange = document.createElement('p');
  lastMonthChange.id = 'last-month-change';
  card1.appendChild(label1);
  card1.appendChild(lastMonthChange);

  const card2 = document.createElement('div');
  card2.className = 'card';
  const label2 = document.createElement('label');
  label2.className = 'cardLabel';
  label2.htmlFor = 'avg-price-per-m2';
  label2.textContent = 'Gjennomsnitt kvm. pris:';
  const avgPricePerM2 = document.createElement('p');
  avgPricePerM2.id = 'avg-price-per-m2';
  card2.appendChild(label2);
  card2.appendChild(avgPricePerM2);

  const card3 = document.createElement('div');
  card3.className = 'card';
  const label3 = document.createElement('label');
  label3.className = 'cardLabel';
  label3.htmlFor = 'avg-total-price';
  label3.textContent = 'Gjennomsnittspris:';
  const avgTotalPrice = document.createElement('p');
  avgTotalPrice.id = 'avg-total-price';
  card3.appendChild(label3);
  card3.appendChild(avgTotalPrice);

  cards.appendChild(card1);
  cards.appendChild(card2);
  cards.appendChild(card3);

  factBox.appendChild(cards);

  widget.appendChild(dropdown);
  widget.appendChild(factBox);
  widgetContainer.appendChild(widget);


  function updateCityInfo(city) {
    const cityData = data[city];
    cityName.textContent = `By: ${city}`;
    const lastMonthChangeValue = cityData["Endring siste måned"];
    lastMonthChange.textContent = `${lastMonthChangeValue}%`;
    avgPricePerM2.textContent = `${cityData["Gjennomsnitt kvm. pris"]} NOK`;
    avgTotalPrice.textContent = `${cityData["Gjennomsnittspris"]} NOK`;

    // Apply trend classes
    if (lastMonthChangeValue > 0) {
      lastMonthChange.classList.add('trend-positive');
      lastMonthChange.classList.remove('trend-negative');
    } else {
      lastMonthChange.classList.add('trend-negative');
      lastMonthChange.classList.remove('trend-positive');
    }
}


select.addEventListener('change', (e) => updateCityInfo(e.target.value));

  // Set default to "Norge"
  select.value = "Norge";
  updateCityInfo("Norge");
