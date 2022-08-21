$(function () {
    fetch('https://fakestoreapi.com/products/')
        .then((res) => res.json())
        .then((json) => render(json))

    function render(json) {
        let product = ''
        for (var i = 0; i < json.length; i++) {
            product += `<div class="col-sm-3 mb-3 product">
                        <div class="card">
                            <p id="id" style="display:none">${json[i].id}</p>
                            <img class="card-img-top" src="${json[i].image}" alt="Card image" style="width:100%; height:250px" >
                            <div class="card-body">
                                <h4 class="card-title">${json[i].title}</h4>
                                <p class="card-text">
                                    <i class="price">$${json[i].price}</i>
                                </p>
                                <p class ="des">${json[i].description}</p>
                                <button class="btn btn-primary detail">Xem thêm</button>
                            </div>
                        </div>
                    </div>`
        }
        $('#products').append(product)
        $('.detail').click(function () {
            var id = +$(this).parent().parent().find('#id').text()
            document.getElementById('product-detail').style.display = 'block'
            var txt = ''
            for (var i = 0; i < json.length; i++) {

                if (json[i].id === id) {
                    txt += `
                        <div class="product">
                            <div class="card ">
                                <p id="id" style="display:none">${json[i].id}</p>
                                <div class="row">
                                    <div class="col-6">
                                        <img class="card-img-top" src="${json[i].image}" alt="Card image" style="width:100%; height:250px" >
                                    </div>
                                    <div class="col-6">
                                        <p class="card-text">
                                            <h4 class="card-title" style="overflow: visible">${json[i].title}</h4>
                                            <i class="price">$${json[i].price}</i>
                                        </p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p>${json[i].description}</p>
                                </div>
                                <button type="button" class="btn btn-danger">Close</button>
                            </div>
                        </div> `;
                }
            }
            $('.show-detail').html(txt);
            $('.btn-danger').click(function() {
                $('#product-detail').hide();
                console.log('object');
            })
        })
   
    }
   

})