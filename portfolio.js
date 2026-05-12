document.readyState === 'complete'


function init() {
    let about_popup = new Popup();

    document.querySelector('#about_btn').addEventListener('click', () => {
        about_popup.open();
    });
}