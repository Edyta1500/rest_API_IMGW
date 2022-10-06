'use strict';

const baseUrl = 'https://danepubliczne.imgw.pl/api/data/synop';

const getAllStation = async () => {
    try {

        const response = await fetch(baseUrl);

        const data = await response.json();

        return data;

    } catch (err) {

        console.error('error');
    }
};

getAllStation().then(data => {

    data.forEach((element) => {

        let opt = document.createElement('option');

        opt.innerHTML = `${element.stacja}`;

        document.querySelector('#stacja').appendChild(opt);

    });
});

getAllStation().then(data => {

    const selectStation = document.querySelector('#stacja');

    selectStation.addEventListener('change', () => {

        const index = selectStation.selectedIndex - 1;

        let item = document.createElement('tr');

        item.innerHTML =

            `<td>${data[index].id_stacji}</td>
       
        <td>${data[index].stacja}</td>
        
        <td>${data[index].data_pomiaru}</td>
       
        <td>${data[index].godzina_pomiaru}</td>
        
        <td>${data[index].temperatura} °C</td>
       
        <td>${data[index].predkosc_wiatru} km/h</td>
       
        <td>${data[index].kierunek_wiatru}</td>
       
        <td>${data[index].wilgotnosc_wzgledna} %</td>
        
        <td>${data[index].suma_opadu} mm</td>  
      
        <td>${data[index].cisnienie} mmHg</td>`;

        document.querySelector('table tbody').appendChild(item);

        document.querySelector('.option__default').selected = true;

    });
}).catch(err => console.log(err));

const clear = document.querySelector('.clear');

const table = document.querySelector('table tbody');

clear.addEventListener('click', () => {

    table.innerHTML = '';

})













