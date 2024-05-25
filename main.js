(()=>{const e=document.getElementById("links"),n=document.getElementById("social"),a=document.querySelector("h1"),t=document.querySelector("h2"),r=document.getElementById("description"),o=document.getElementById("avatar"),i={name:"Katherin Guerrero 💻 🎮",nickname:"sarkastherin",description:"Me apasiona la tecnología y el desarrollo web. Aunque no cuento con experiencia laboral previa como programadora, he estado dedicando tiempo y esfuerzo en adquirir habilidades en HTML, CSS, y JavaScript, además de estar incursionando en el mundo de React. Mi enfoque principal se centra en aprender constantemente y enfrentar desafíos de manera proactiva.",avatar:"https://i.postimg.cc/0QSNn7Nc/Profile.jpg",social:[{name:"x-twitter",url:"https://twitter.com/sarkastherin",username:"sarkastherin",icon:"fa-brands fa-square-x-twitter"},{name:"linkedin",url:"https://www.linkedin.com/in/katherin-guerrero/",icon:"fa-brands fa-linkedin"},{name:"instagram",url:"https://www.instagram.com/sarkastherin/",icon:"fa-brands fa-square-instagram"}],links:[{name:"blog",url:"https://example.com/",color:"red",emoji:"📖"},{name:"podcast",url:"https://example.com/",color:"yellow",emoji:"💬"}],footer:"Made with Love on Argentina"};a.innerText=i.name,r.innerText=i.description,t.innerText="@"+i.nickname,o.setAttribute("src",i.avatar),o.setAttribute("alt",i.name),i.social.map((e=>{n.innerHTML+=`\n    <a href="${e.url}" target="_blank" style="font-size: 30px; color: #d9b2d0">\n      <i class="${e.icon}"></i>\n    </a\n    `})),i.links.map((n=>{e.innerHTML+=`\n    <div class="bg-${n.color}-200 px-4 py-5 w-full flex justify-between">\n      <a class="text-sm font-bold text-${n.color}-600 text-center hover:text-${n.color}-800 cursor-pointer"\n        href="${n.url}" target="_blank">\n        ${n.name}\n      </a>\n      <span>${n.emoji}</span>\n    </div>\n    `}))})();