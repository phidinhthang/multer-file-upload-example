const form = document.getElementById('form');
const inputFile = document.getElementById('file');

const formData = new FormData();

const handleSubmit = (event) => {
  event.preventDefault();

  for (const file of inputFile.files) {
    formData.append('files', file);
  }

  fetch('/files', {
    method: 'post',
    body: formData,
  }).catch((error) => console.log(error));
};

form.addEventListener('submit', handleSubmit);
