function imageModifier() {

  const request = () => {
    return fetch('https://random-word-api.herokuapp.com/word?number=1')
      .then(response => response.json())
      .then(word => word);
  }

  const images = [...document.querySelectorAll('img')];

  const altSetter = async () => {
    for (let image of images) {
      let res = await request();

      image.setAttribute('alt', res.join(''));
      image.style.border = '4px solid yellow';
    }
  }
  
  document.addEventListener('click', (event) => {

    const selectedElement = event.target;

    if (selectedElement.tagName === 'IMG') {
      
      selectedElement.insertAdjacentHTML('afterend', `
        <input type="text" placeholder="enter new alt value">
      `);

      const input = selectedElement.nextElementSibling;
      input.oninput = function () {
        selectedElement.alt = input.value;
      }

    }
  })

  return altSetter();
}

imageModifier();
