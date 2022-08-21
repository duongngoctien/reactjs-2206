$(function () {
    let products = $('.product');

    $('#search').keyup(function () {
        let keyword = $(this).val().trim().toLowerCase();
        searchProduct(keyword);
    });

    function searchProduct(keyword) {
        let products = $('.product');
        products.hide();
        products.each(function () {
            let productInfo = $(this).text().toLowerCase();
            if (productInfo.indexOf(keyword) >= 0) {
                $(this).show();
            }
            $(".page").hide();
        })
    }


    if (products.length % 4 == 0) {
        totalPage = (products.length / 4);
    }
    else {
        totalPage = (products.length / 4) + 1;
    }


    function chiaPage() {
        var text = "";
        for (let i = 1; i <= totalPage; i++) {
            text += `<div class="page page${i}">
            ${i}
        </div>`;
        }
        $('#page').html(text);

    }

    chiaPage();

    function hienthiPage() {
        products.hide();
        for (let i = 0; i < 4; i++) {
            products.eq(i).show();
            $('.page1').css("background-color", "aqua");
        }

        // === switch case :> làm web tĩnh cho dzui ====

        // for (let i = 1; i <= totalPage; i++) {
        //     $('.page' + i).click(function () {
        //         switch (i) {
        //             case 1:
        //                 products.hide();
        //                 $('.page').css("background-color", "white");
        //                 $('.page1').css("background-color", "aqua");
        //                 for (let i = 0; i < 4; i++) {
        //                     products.eq(i).show();
        //                 }
        //                 break;
        //             case 2:
        //                 products.hide();
        //                 $('.page').css("background-color", "white");
        //                 $('.page2').css("background-color", "aqua");
        //                 for (let i = 4; i < 8; i++) {
        //                     products.eq(i).show();
        //                 }
        //                 break;
        //             case 3:
        //                 products.hide();
        //                 $('.page').css("background-color", "white");
        //                 $('.page3').css("background-color", "aqua");
        //                 for (let i = 8; i < 12; i++) {
        //                     products.eq(i).show();
        //                 }
        //                 break;
        //             case 4:
        //                 products.hide();
        //                 $('.page').css("background-color", "white");
        //                 $('.page4').css("background-color", "aqua");
        //                 for (let i = 12; i < 16; i++) {
        //                     products.eq(i).show();
        //                 }
        //                 break;
        //             case 5:
        //                 products.hide();
        //                 $('.page').css("background-color", "white");
        //                 $('.page5').css("background-color", "aqua");
        //                 for (let i = 16; i < 20; i++) {
        //                     products.eq(i).show();
        //                 }
        //                 break;
        //         }
        //     });
        // }

        for (let i = 0; i < totalPage; i++) {
            $('.page' + (i + 1)).click(function () {
                $('.page').css("background-color", "white");
                $(this).css("background-color", "aqua");
                products.hide();
                let x = i * 4;
                let y = x + 4;
                //x, y là 2 số để duyệt mảng và in mảng
                for (let z = x; z < y; z++) {
                    products.eq(z).show();
                }
            });
        }
    }

    hienthiPage();

    // $('.sort').change(function () {
    //     let sortType = $(this).val();
    //     // products.hide();

    //     listPrice = [];
    //     products.each(function () {
    //         let price = $(this).find('i:not(.sale-off)').text().replace('$', '');
    //         $(this).addClass(price);
    //         listPrice.push(parseInt(price));

    //     })

    //     if (sortType == 'Decrease') {
    //         listPrice.sort(function (a, b) { return b - a });
    //     }
    //     else {
    //         listPrice.sort(function (a, b) { return a - b });
    //     }
    //     let productListSorted = [];
    //     listPrice.forEach(function (price) {
    //         productListSorted.push($('#products').find('.' + price));
    //     });
    //     // console.log(productListSorted);
    //     $('.product').remove();
    //     // console.log($('.product').length);
    //     // for ( let i =0; i< productListSorted.length; i++){
    //     //     $('#products').append(productListSorted[i]);
    //     //     $('.product').show();
    //     // }

    //         $('#products').append(productListSorted);
    //         $('.product').remove();


    //     // hienthiPage();

    // })




    
    // === Save Cart====


    $('.numCart').html(localStorage.clickcount);
    function clickCounter() {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }   
        $('.numCart').html(localStorage.clickcount);
    }
    let listProduct = [];
    $('.btn').click(function (event) {
        event.preventDefault();
        clickCounter();
        let nameProduct = $(this).parent().find('.card-title').text();
        let img =   $(this).parent().parent().find('.card-img-top').attr('src');
        let price = $(this).parent().find('i:not(.sale-off)').text();

        let product = {
            nameProduct : nameProduct,
            img: img,
            price: price,
            quantity: 1
        }
        if(checkArr(product,listProduct)) {
            product.quantity++;
        }
        else {
            listProduct.push(product);
        }
        var productJs = JSON.stringify(listProduct);
        localStorage.setItem("listProduct",productJs);

        renderCart();   
    })
    renderCart();

    function renderCart() {
        let list = localStorage.getItem('listProduct');
        let listt = JSON.parse(list)
        console.log(listt);
        for(let i = 0; i < listt.length; i++){
            var txt = '';
            txt +=`<tr>
            <td class="text-center font-weight-bold" style = "width: 200px ">
                <img class="card-img-top" src="${listt[i].img}" alt="Card image" style="width:50%;" >
                </td>
            <td class="text-center font-weight-bold">
                ${listt[i].nameProduct}
                </td>
            <td class="text-center font-weight-bold">${listt[i].quantity}</td>
            <td class="text-center font-weight-bold">${listt[i].price}</td>
            <td class="text-center font-weight-bold">Total</td></tr>`;
            
        $('.table-body').append(txt);

        }
        
    }
    
    function checkArr( element , arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i ++){
            if (arr[i] === element)  {
                count ++;
                break
            }
        }
        return (count >0) ? true : false
    }

})