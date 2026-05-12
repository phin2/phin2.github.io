document.readyState === 'complete' ? init() : window.addEventListener('load', init);


function init() {
    let about_popup = new Popup();

    document.querySelector('#about_btn').addEventListener('click', () => {
        about_popup.open();
    });
}