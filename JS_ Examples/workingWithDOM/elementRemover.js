function initRemover() {
  let selectedElement;
  let oldBorder;

  function cancelSelection() {
    if (!selectedElement) {
      return;
    }

    selectedElement.style.border = oldBorder;
    selectedElement = null;
  }

  function selectElement(el) {
    oldBorder = el.style.border;
    selectedElement = el;
    selectedElement.style.border = '1px solid red';
  }

  document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    cancelSelection();
    selectElement(event.target);
  });

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Delete' && selectedElement) {
      selectedElement.remove();
    }

    if (event.key === 'Escape') {
      cancelSelection();
    }
  });
}
