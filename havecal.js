'use strict';


$("#have_price").keyup(function (event) {
  // skip for arrow keys
  if (event.which >= 37 && event.which <= 40) return;
  
  // format number
  $(this).val(function (index, value) {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
});
            
$("#have_much").keyup(function (event) {
  // skip for arrow keys
  if (event.which >= 37 && event.which <= 40) return;
  
  // format number
  $(this).val(function (index, value) {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
});

            
function have_result(){
  
  let have_p = document.getElementById("have_price").value;
  have_p = have_p.replace(/,/g,"");
  
  let have_m = document.getElementById("have_much").value;
  have_m = have_m.replace(/,/g,"");

  document.getElementById("have_money").value = parseInt(have_p) * parseInt(have_m);
  have_money.value = have_money.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  
};

// 추가 매수 콤마 표기 구간

$("#add_price").keyup(function (event) {
  // skip for arrow keys
  if (event.which >= 37 && event.which <= 40) return;
  
  // format number
  $(this).val(function (index, value) {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
});
            
$("#add_much").keyup(function (event) {
  // skip for arrow keys
  if (event.which >= 37 && event.which <= 40) return;
  
  // format number
  $(this).val(function (index, value) {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
});


            
function add_result(){
  let add_p = document.getElementById("add_price").value;
  add_p = add_p.replace(/,/g,"");
  let add_m = document.getElementById("add_much").value;
  add_m = add_m.replace(/,/g,"");
  document.getElementById("add_money").value = parseInt(add_p) * parseInt(add_m);
  add_money.value = add_money.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}




function final_result(){
  
  let have_m = document.getElementById("have_much").value;
  have_m = have_m.replace(/,/g,"");
  let add_m = document.getElementById("add_much").value;
  add_m = add_m.replace(/,/g,"");
  document.getElementById("final_much").value = parseInt(have_m) + parseInt(add_m);
  final_much.value = final_much.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  
  
  let have_total = document.getElementById("have_money").value;
  have_total = have_total.replace(/,/g,"");
  let add_total = document.getElementById("add_money").value;
  add_total = add_total.replace(/,/g,"");
  document.getElementById("final_money").value = parseInt(have_total) + parseInt(add_total);
  final_money.value = final_money.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  
  let final_my = document.getElementById("final_money").value;
  final_my = final_my.replace(/,/g,"");
  let final_mu = document.getElementById("final_much").value;
  final_mu = final_mu.replace(/,/g,"");
  document.getElementById("final_price").value = final_my / final_mu;
  final_price.value = final_price.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  // document.getElementById("final_price").value = document.getElementById("final_money").value / document.getElementById("final_much").value;
  // let final_price = document.getElementById("final_price").value;
  // // final_price = final_price.replace(/,/g,"");
  // // final_price.value = final_price.value.replace(/^0+|\D+/g, '').replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  // final_price.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
}
