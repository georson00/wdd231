async function loadCompanies() {
    try {
        const response = await fetch("./data/members.json");
        if(!response.ok){
            throw new Error("Failed to load data!");

        }
        const companies = await response.json();
        displayCompanies(companies);

    } catch (error){
        console.error("Error loading companies data:", error);

    }
}



function displayCompanies(companies){
    const container = document.getElementById("companiesContainer");
   

    companies.forEach(company =>{
        const card = document.createElement("div");
        card.classList.add("company-card");
    
    

    let membershipName = "";
    if (company.membershipType === "gold") {
        membershipName = "Gold Member";
    } else if (company.membershipType === "silver") {
        membershipName = "Silver Member";
    } else if (company.membershipType === "bronze") {
        membershipName = "Bronze Member";
    } else {
        membershipName = "Standard Member";
    }
    card.innerHTML = `
    <h3 class="company-card-item">${company.name}</h3>
    <p class="company-card-item ${company.membershipType}">${membershipName}</p>
    <p class="company-card-item">${company.address}</p>
    <img class="company-card-item" src="${company.image}" alt="${company.name} Logo" width="400" height="200" class="company-logo" object-fit="cover">
    <p class="company-card-item">Phone: ${company.phone}</p>
    <p class="company-card-item">Email: ${company.email}</p>
    <a class="company-card-item" href="${company.website}" target="_blank" rel="noopener">Visit Website &#8599;</a>
    `;
    container.appendChild(card);





});


}




document.addEventListener("DOMContentLoaded", loadCompanies); 


