const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('.name');
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');

/* Tal vez le falta el response y error en los parametros */
async function displayUser(username) {
  $name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  data = response;
  console.log(data);
  $name.textContent = `${data.name}`;
  $blog.textContent = `${data.blog}`;
  $location.textContent = `${data.location}`;
}
/* El manejador de error  */
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $name.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').then(response).catch(handleError);