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
    
    

    let membershipType = "";
    if (company.membershipType === "gold") {
        membershipType = "Gold Member";
    } else if (company.membershipType === "silver") {
        membershipType = "Silver Member";
    } else if (company.membershipType === "bronze") {
        membershipType = "Bronze Member";
    } else {
        membershipType = "Standard Member";
    }
    card.innerHTML = `
    <h3 class="${membershipType}">${company.name}</h3>
    <p>${company.address}</p>
    <hr>
    <img src="${company.image}" alt="${company.name} Logo" width="400" height="200" class="company-logo">
    <p>Phone: ${company.phone}</p>
    <p>Email: ${company.email}</p>
    <a href="${company.website}" target="_blank">Visit Website</a>
    `;
    container.appendChild(card);

});

}

document.addEventListener("DOMContentLoaded", loadCompanies); 