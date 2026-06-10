(function () {
    var trigger = document.getElementById('how-it-works-btn');
    var modal = document.getElementById('how-it-works-modal');
    var iframe = document.getElementById('how-it-works-iframe');

    if (!trigger || !modal || !iframe) {
        return;
    }

    function openModal(event) {
        event.preventDefault();
        iframe.src = iframe.dataset.src;
        modal.classList.add('is-open');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        modal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
        iframe.src = '';
    }

    trigger.addEventListener('click', openModal);

    modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
})();
