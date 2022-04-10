$.ajax({
  type: "GET",
  dataType: "json",
  url: "https://api.relove.id/products",
  data: "products",
  success: function(data) {
    let products = '';
    $.each(data.response  , function(index, item){
      products += `
          <div class="col-xs-12 col-sm-6">
            <div class="card">
              <div class="card-body">
                <div class="prod-img">
                  <img class="card-img-top" src="${item.image}" alt="Product Image">
                </div>
                <div class="prod-title card-title">
                  <h6 class="font-weight-bold">
                    ${item.name}
                  </h6>
                </div>
                <div class="prod-category-title card-subtitle mb-2 text-muted">
                  <p class="product-category mb-2 bg-success px-2 py-1 w-75 rounded text-light">
                  <span>
                    <i class="fa-solid fa-tag"></i>
                  </span>
                  ${item.category.name}
                  </p>
                </div>
                <div class="prod-desc card-text">
                  ${item.short_description}
                </div>
                <div class="prod-price mt-1">
                  <h6 style="color: #2A7FFD;">
                    Rp.${item.price}
                  </h6>
                </div>
              </div>
            </div>
          </div>
      `
    });
    $('#items').append(products)
  }
});