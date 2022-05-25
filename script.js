

function showModal(messageText, buttonText) {
    //alert('Sorry, not ready yet!\nИзвините, еще не готово!');
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity ='1';
    modal.style.top ='200px';
    modal.style.transform = 'scale(1.5)';

    // let message = modal.getElementsByClassName('message')[0];
    message.innerHTML = messageText;
    let button = modal.getElementsByTagName('button')[0];
    button.innerHTML = buttonText;

    document.body.style.overflow = 'hidden';
    let overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.visibility = 'visible';
    overlay.style.opacity ='1';
    overlay.style.backgroundColor ='rgba(0, 0, 0, 0.3)';
}
function hideModal() {
    let modal = document.getElementsByClassName('modal')[0];
    setTimeout(function() {
        modal.style.visibility = 'hidden';
        modal.style.transform = 'scale(0)';
    }, 700)
    modal.style.opacity ='0';
    modal.style.top ='100%';
    modal.style.transform = 'scale(5)';

    document.body.style.overflow = 'auto';
    let overlay = document.getElementsByClassName('overlay')[0];
    setTimeout(function() {
        overlay.style.visibility = 'hidden';
    }, 400)
    overlay.style.opacity ='0';
    overlay.style.backgroundColor ='rgba(235, 140, 195, 0.548)';
}
function notReadyAlert(event) {
    showModal('Sorry, not ready yet!<br>Извините, еще не готово!', 'Эх, жаль');
    event.preventDefault();
    return false;
}
function F1() {
    showModal('Entrance from the courtyard, first floor.\nВход со внутреннего двора, первый этаж.', 'Окей!');
    return false;
}

function F2() {
    showModal('The best auto goods store in Novosibirsk. The catalog contains more than 2000 items\nЛучший магазин автотоваров в Новосибирске. В каталоге представлено более 2000 позиций', 'Верю!');
    return false;
}

function F3() {
    showModal('We always work! Without lunch, weekends and holidays!\nРаботаем всегда! Без обеда, выходных и праздников!', 'Отлично!');
    return false;
}

function search() {
    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name == 'Колесо переднее') {
        productNumber = 0;
    } else if (name == 'Дворники') {
        productNumber = 1;
    } else if (name == 'Магнитола') {
        productNumber = 2;
    } else if (name == 'Елочка-вонючка') {
        productNumber = 3;
    } else if (name == 'Стильные наклеечки') {
        productNumber = 4;
    } else {
        showModal('Товар не найден', 'Грустно(');
    }
    
    let cards = document.getElementsByClassName('card');
    let card = cards[productNumber];
    card.style.border = '2px dashed pink';
    card.style.backgroundColor = 'PaleVioletRed';

    setTimeout (function () {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 2000);
}

function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';

    let items = [
        {href: 'index.html', text: 'Товары'},
        {href: '', text: 'Контакты'},
        {href: '', text: 'Доставка'},
        {href: '', text: 'Акции'},
        {href: '', text: 'О нас'},
    ];

    for(let i = 0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innerText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == '') {
           link.addEventListener('click', notReadyAlert);
    }

        let menuItem = document.createElement('li');
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if (key.key == 'Enter'     )
             search();
    });

    generateMenu();
}