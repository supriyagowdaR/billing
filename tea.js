$(document).ready(function(){
//   let teacount = 0;
//   let coffeecount = 0;
//   let lemonteacount =0;

//   let tearate = 15;
//   let coffeerate = 10;
//   let lemontearate = 10;

    $("#addbtn").click(function(){

    const selectedDrink =$('input[name="drink"]:checked').val();
    if(selectedDrink === 'tea'){
        teacount++;
        $("teacount").text(teacount);
    } 
    else if(selectedDrink === 'coffee'){ 
        coffeecount++;
        $("coffeecount").text(coffeecount);
    }
    else if(selectedDrink === 'lemontea'){
        lemonteacount++;
       $("lemonteacount").text(lemonteacount);
    }
})
})

    $("totalbtn").click(function()
    {
        let total=0;
        total += parseInt($('teacount').text())*tearate;
        total += parseInt($('coffeecount').text())*coffeerate;
        total += parseInt($('lemonteacount').text())*lemontearate;

        $('bill').text(total);
    })

