const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('name');
const $blog = document.querySelector('#blog');
const $location = document.querySelector('.location');

async function displayUser(username) {
  $name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $name.textContent = '${data.name}';
  $blog.textContent = '${data.blog}';
  $location.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);