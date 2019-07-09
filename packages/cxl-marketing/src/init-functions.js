export const _initDialogButtons = () => {
  const dialogButtons = document.querySelectorAll('[open-download-dialog], [open-contact-dialog]');
  const caseStudiesDialog = document.querySelector('vaadin-dialog#caseStudies');
  const contactDialog = document.querySelector('vaadin-dialog#contact');

  dialogButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (e.target.hasAttribute('open-contact-dialog')) {
        contactDialog.opened = true;
      } else if (e.target.hasAttribute('open-download-dialog')) {
        caseStudiesDialog.opened = true;
      }
    });
  });
};
