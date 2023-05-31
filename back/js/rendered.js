// Permet de créer toutes les foncitons de rendu de mon application


/**
 * Permet d'afficher les produits dans la page index.html
 * @param {Array} products Tableau de produits
 * @param {HtmlElement} elementHtml Elément Html 
 */
function renderProducts(products, elementHtml) {
    for (let i = 0; i < products.length; i++) {
        elementHtml.innerHTML += `
        <a href="./product.html?id=${products[i]._id}">
            <article>
            <img src="${products[i].imageUrl}" alt="${products[i].altTxt}">
            <h3 class="productName">${products[i].name}</h3>
            <p class="productDescription">${products[i].description}</p>
            </article>
        </a>
        `;
    }
}


export {
    renderProducts
}