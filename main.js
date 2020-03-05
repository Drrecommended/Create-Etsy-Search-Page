const results = items.results

const gridItemList = results.map((item) => {
    return {
        title: item.title,
        image: item.Images[0].url_fullxfull,
        shopName: item.Shop.shop_name,
    }
});

const gridItems = gridItemList.map((item) => {
    return (
      `<div class="product" title="${item.title}">
         <div class="product-img" style="background-image: url(${item.image});"></div>
         <h3 class="product-header">${item.title}</h3>
         <span>${item.shopName}</span>
       </div>`
    )
}).join('')


document.querySelector('#grid').innerHTML = gridItems