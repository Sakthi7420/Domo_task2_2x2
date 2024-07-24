
domo.get('/data/v1/task_two?fields=customer_state,price&groupby=customer_state').then(function(data){
    data = data.sort((a,b) => a.price - b.price);

    const abc = document.getElementById('mychart').getContext('2d');
    new Chart(abc, {
        type: 'bar',
        data: {
        labels: [data[0].customer_state,data[1].customer_state,data[2].customer_state,data[3].customer_state,data[4].customer_state,
        data[5].customer_state,data[6].customer_state,data[7].customer_state,data[8].customer_state,data[9].customer_state],
        datasets: [{
            label: 'Least Ten State by Price',
            data: [data[0].price,data[1].price,data[2].price,data[3].price,data[4].price,data[0].price,
            data[1].price,data[2].price,data[3].price,data[4].price],
            backgroundColor: [
                'rgba(120, 59, 91)',
                'rgba(128, 77, 75)',
                'rgba(61, 17, 15)',
                'rgba(219, 106, 20 )',
                'rgba(217, 13, 78)',
                'rgba(86, 184, 122)',
                'rgba(217, 135, 13)',
                'rgba(219, 106, 20 )',
                'rgba(219, 106, 20 )',

              ],
        }]
        },
            beginAtZero: true

    });

});

domo.get('/data/v1/task_two?fields=order_status,order_item_id&groupby=order_status').then(function(data1){

    const chart = document.getElementById('mychart1').getContext('2d');
    new Chart(chart, {
        type: 'pie',
        data: {
        labels: [data1[0].order_status,data1[1].order_status,data1[2].order_status,data1[3].order_status,data1[4].order_status],
        datasets: [{
            data: [data1[0].order_item_id,data1[1].order_item_id,data1[2].order_item_id,data1[3].order_item_id,data1[4].order_item_id],
            backgroundColor: [
                'rgba(120, 59, 91)',
                'rgba(128, 77, 75)',
                'rgba(61, 17, 15)',
                'rgba(219, 106, 20 )',
                'rgba(217, 13, 78)',
                'rgba(86, 184, 122)',

              ],
        }]
        },
            beginAtZero: true

    });

});




domo.get('/data/v1/task_two?fields=customer_state,seller_id&groupby=customer_state').then(function(data3){
    // console.log(data1)
    const chart = document.getElementById('mychart2').getContext('2d');
    new Chart(chart, {
        type: 'radar',
        data: {
        labels: [data3[0].customer_state,data3[1].customer_state,data3[2].customer_state,data3[3].customer_state,data3[4].customer_state],
        datasets: [{
            label: 'Seller Id group by Each city',
            data: [data3[0].seller_id,data3[1].seller_id,data3[2].seller_id,data3[3].seller_id,data3[4].seller_id],
            backgroundColor: [
                'rgb(38, 146, 132)',
                'rgb(38, 146, 132)',


              ],
        }]
        },
            beginAtZero: true

    });

});

// domo.get('/data/v1/task_two?fields=product_phots_qty,order_item_id&groupby=product_phots_qty').then(function(data2){

//     const chart = document.getElementById('mychart2').getContext('2d');
//     new Chart(chart, {
//         type: 'bar',
//         data: {
//         labels: [data2[0].order_item_id,data2[1].order_item_id,data2[2].order_item_id,data2[3].order_item_id,data2[4].order_item_id],
//         datasets: [{
//             data: [data2[0].product_phots_qty,data2[1].product_phots_qty,data2[2].product_phots_qty,data2[3].product_phots_qty,data2[4].product_phots_qty],
//             backgroundColor: [
//                 'rgba(120, 59, 91)',
//                 'rgba(128, 77, 75)',
//                 'rgba(61, 17, 15)',
//                 'rgba(219, 106, 20 )',
//                 'rgba(217, 13, 78)',
//                 'rgba(86, 184, 122)',

//               ],
//         }]
//         },
//             beginAtZero: true

//     });

// });


domo.get('/data/v1/task_two?fields=customer_city,order_id&groupby=customer_city').then(function(data4){
    // console.log(data1)
    const chart = document.getElementById('mychart3').getContext('2d');
    new Chart(chart, {
        type: 'line',
        data: {
        labels: [data4[0].customer_city,data4[1].customer_city,data4[2].customer_city,data4[3].customer_city,data4[4].customer_city],
        datasets: [{
            label: 'Total Orders by each City',
            data: [data4[0].order_id,data4[1].order_id,data4[2].order_id,data4[3].order_id,data4[4].order_id],
            backgroundColor: [
                
                'rgba(217, 135, 13)',
                'rgba(219, 106, 20 )',
                'rgba(219, 106, 20 )',

              ],
        }]
        },
            beginAtZero: true

    });

});

