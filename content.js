function toggleOutOfStock () {
    const selector = 'img[src="v8outofstock.gif"]';
        
    let count = 0;
    
    const list = document.querySelectorAll(selector)
    list.forEach(el => {
        const outerParent = el
                .parentNode
                .parentNode
                .parentNode
                .parentNode
                .parentNode
                .parentNode
                .parentNode
                .parentNode;
        if (!outerParent.style.display || outerParent.style.display === 'table-row') {
            outerParent.style.display = 'none';
        } else {
            outerParent.style.display = 'table-row';
        }
        count += 1;
    });

    console.log(count + ' out-of-stock entries affected.');
    if (count >= 1) {
        setNotificationText(count + ' out-of-stock entries affected.');
        showNotification();
        setTimeout(hideNotification, 3000);
    }
}

function setNotificationText(text) {
    getNotification().innerText = text;
}

function showNotification () {
    getNotification().classList.remove('ejd-note-hide');
    getNotification().classList.add('ejd-note-show');
}


function hideNotification () {
    getNotification().classList.remove('ejd-note-show');
    getNotification().classList.add('ejd-note-hide');
}  

function getNotification() {
    return document.getElementById('ejd-note');
}

function createNotification () {
    const note = document.createElement('div');
    note.id = 'ejd-note';
    note.classList.add('ejd-note');
    document.body.appendChild(note);
}

createNotification();
toggleOutOfStock();
