const container = document.querySelector(".container");

async function init() {
  const data = await fetch("https://dummyjson.com/users?limit=208").then(
    (response) => response.json()
  );
  renderUser(data.users);
}
init();
function renderUser(users) {
  for (const user of users) {
    
    container.innerHTML += `
        <div data-userage=${user.age} class="user-container">
        <img src="${user.image}" alt="">
            <p>KULLANICI ADI: ${user.username}</p>
            <p>AD-SOYAD: ${user.firstName} <span>${user.lastName}</span></p>
            <p>YAŞ: ${user.age}</p>
            <p>E-POSTA: ${user.email}</p>
            <p>TELEFON NUMARASI: ${user.phone}</p>
            <p>ŞİRKET ADI: ${user.company.name}</p>
            <p>BÖLÜM: ${user.company.department}</p>
            <p>ADRES: ${user.address.address}, ${user.address.city}, ${user.address.state})</p>
        </div> 
        `;
        
   
  }
  const userContainers = document.querySelectorAll(".user-container");
  for (const userContainer of userContainers) {
   const userAge = userContainer.dataset.userage;
   if(userAge >=18 &&  userAge <= 25) {
    userContainer.classList.add("genc");
   }else if(userAge >=26 &&  userAge <= 40) {
    userContainer.classList.add("orta");
   }else{
    userContainer.classList.add("yasli");
    
   }
  }
}
