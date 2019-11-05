function ModalController() {

    let _modal = document.getElementById('modal-container');
    let _btnShowDetails = document.querySelectorAll('.button--primary');
    let _btnCloseDetails = document.getElementById('btnClose');

   function openModal() {
       _modal.classList.add('show');
   }

   function closeModal() {
    _modal.classList.remove('show');
   }

   function init() {
        _btnShowDetails.forEach(item => item.addEventListener('click', openModal));

        _btnCloseDetails.addEventListener('click', closeModal);
   }
   
   return {
       init
   }
}

const modal = new ModalController();
modal.init();




