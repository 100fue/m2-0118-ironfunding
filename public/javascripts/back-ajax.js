$(() =>{
    $(".back-it").on('click', (e) => {
        let bt = $(e.currentTarget);
        let price = parseInt($('.campaign-progress').attr('data-current-pledge'));
        let increment = parseInt(bt.attr('data-pledge'));
        e.preventDefault();
        price += increment;
        let id = bt.attr('data-id');
        $.ajax(`/campaign/${id}/pledge/${increment}`).then( r =>{
            let max_val = parseInt($('.campaign-progress progress').attr('max'));
            if(price > max_val){
                $('.campaign-total').text('Ya tienes tu Pony!!');
            }else{
                $('.campaign-total').text(`\$${price}`);
                $('.campaign-progress').attr('data-current-pledge',price)
                $('.campaign-progress progress').attr('value',price);
            }
        });
    })
})