/* 
<div class="bg-green-200 px-4 py-5 w-full flex justify-between">
  <a class="text-sm font-bold text-green-600 text-center hover:text-green-800 cursor-pointer"
    href="https://platzi.com/gndx/" target="_blank">
    💸 Ahorra en tu suscripción a Platzi, con el precio de Especial
  </a>
  <span>💻</span>
</div>
<div class="bg-fuchsia-200 px-4 py-5 w-full flex justify-between">
  <a class="text-sm font-bold text-fuchsia-600 text-center hover:text-fuchsia-800 cursor-pointer"
    href="https://gndx.dev/mentoria" target="_blank">
    Mentorías
  </a>
  <span>💻</span>
</div>
<div class="bg-yellow-200 px-4 py-5 w-full flex justify-between">
  <a class="text-sm font-bold text-yellow-600 text-center hover:text-yellow-800 cursor-pointer"
    href="https://gndx.dev/" target="_blank">
    BLOG
  </a>
  <span>📖</span>
</div>
<div class="bg-blue-200 px-4 py-5 w-full flex justify-between">
  <a class="text-sm font-bold text-blue-600 text-center hover:text-blue-800 cursor-pointer"
    href="https://gndx.dev/podcast/" target="_blank">
    PODCAST
  </a>
  <span>🎙️</span>
</div>
<div class="bg-lime-200 px-4 py-5 w-full flex justify-between">
  <a class="text-sm font-bold text-lime-600 text-center hover:text-lime-800 cursor-pointer"
    href="https://gndx.dev/cursos" target="_blank">
    CURSOS
  </a>
  <span>🎒</span>
</div>
<div class="bg-rose-200 px-4 py-5 w-full flex justify-between">
  <a class="text-sm font-bold text-rose-600 text-center hover:text-rose-800 cursor-pointer"
    href="https://gndx.dev/mediakit/" target="_blank">
    SPONSORS (Media Kit)
  </a>
  <span>🚀</span>
</div>
*/

const links = document.getElementById('links');
const social = document.getElementById('social')
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const description = document.getElementById('description')
const avatar = document.getElementById('avatar')

const data = {
  name: "Katherin Guerrero 💻 🎮",
  nickname: "sarkastherin",
  description: "Me apasiona la tecnología y el desarrollo web. Aunque no cuento con experiencia laboral previa como programadora, he estado dedicando tiempo y esfuerzo en adquirir habilidades en HTML, CSS, y JavaScript, además de estar incursionando en el mundo de React. Mi enfoque principal se centra en aprender constantemente y enfrentar desafíos de manera proactiva.",
  avatar: "https://i.postimg.cc/0QSNn7Nc/Profile.jpg",
  social: [
    {
      name: "x-twitter",
      url: "https://twitter.com/sarkastherin",
      username: "sarkastherin",
      icon: "fa-brands fa-square-x-twitter"
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/katherin-guerrero/",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/sarkastherin/",
      icon: "fa-brands fa-square-instagram",
    },
  ],
  links: [
    {
      name: "blog",
      url: "https://example.com/",
      color: "red",
      emoji: "📖",
    },
    {
      name: "podcast",
      url: "https://example.com/",
      color: "yellow",
      emoji: "💬",
    },
  ],
  footer: "Made with Love on Argentina",
};
const main = () => {
  h1.innerText = data.name;
  description.innerText = data.description;
  h2.innerText = '@'+data.nickname;
  avatar.setAttribute('src', data.avatar);
  avatar.setAttribute('alt', data.name);
  data.social.map(item => {
    social.innerHTML += `
    <a href="${item.url}" target="_blank" style="font-size: 30px; color: #d9b2d0">
      <i class="${item.icon}"></i>
    </a
    `
  })
  data.links.map(item => {
    links.innerHTML += `
    <div class="bg-${item.color}-200 px-4 py-5 w-full flex justify-between">
      <a class="text-sm font-bold text-${item.color}-600 text-center hover:text-${item.color}-800 cursor-pointer"
        href="${item.url}" target="_blank">
        ${item.name}
      </a>
      <span>${item.emoji}</span>
    </div>
    `
  })

}
main()