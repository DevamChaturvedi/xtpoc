import {putqty} from './service'
let x=0;
let cost=0;
export default(items) => {
	 x = items.price*items.qty;
	 cost = cost + x;
	let tBody = document.getElementById('tBody');
	let html = `<tr style="border-bottom: solid; border-color: #e7eaec; border-width:1px;">
                                <td width="90">
                                    <div>
                                        <img src="${items.img}" height="100" width="100">
                                    </div>
                                </td>
                                <td class="desc">
                                    <h3>
                                    <a href="#" class="text-navy">
                                        ${items.title}
                                    </a>
                                    </h3>
                                    <p class="small">
                                        <p>Style:${items.style}</p>
                                        <p>Color:${items.colour}</p>
                                    </p>
                                    <dl class="small m-b-none">
                                        <dt></dt>
                                        <dd></dd>
                                    </dl>

                                    <div class="m-t-sm">
                                        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#modal1" >Edit</button>
                                        |
                                        <a href="#" class="text-muted"><i class="fa fa-trash"></i> Remove item</a>
                                    </div>
                                </td>

                                
                                <td width="65">
                                    <input type="text" class="form-control" placeholder="${items.qty}">
                                </td>
                                <td>
                                    <h4>
                                        $${x}
                                    </h4>
                                </td>
                                <hr>
                            </tr>
                             `;


                            let row = createHTMLElement(html);
                            row.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.onclick = () =>{
                            		
                            let removeData = {
                            	method : "DELETE",
                            }	
                            let deleteUrl = `http://localhost:3000/items/${items.id}`;
    						
    						fetch(deleteUrl, removeData)
    						.then(  
    							
    						);
    						}

    						row.firstElementChild.nextElementSibling.lastElementChild.firstElementChild.onclick = () => {
    							const mod1 = document.getElementById('modal-body');
mod1.innerHTML = "";
let htm=` <div class="row">
          <div class="col-lg-5">
            Carousel Wrapper
            <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
              
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="${items.img}"
                    alt="First slide">
                </div>
               
              </div>
              
              <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
              
            </div>
            
          </div>
          <div class="col-lg-7">
            <h6 class="h2-responsive product-name text-center">
              ${items.title}
            </h6>
            <h6 class="h4-responsive text-center">
                ${items.price}
             </h6>


           


            <div class="card-body">
              <div class="row">
                
                <div class="col-md-6">

                  <select class="md-form mdb-select colorful-select dropdown-primary text-center" name="qty">
                    <option value="" disabled selected>${items.qty}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  

                </div>
              </div>
              <br>
              <div class="text-center">

                <button type="button" class="btn btn-info btn-lg" data-toggle="modal">Edit</button>
              </div>
            </div>
         
          </div>
        </div>`;

            let createModal =  createHTMLElement(htm);
             mod1.appendChild(createModal);
             createModal.lastElementChild.lastElementChild.lastElementChild.onclick = () => {
          
             	let q = document.getElementsByName('qty')[0];
				let qty = q.options[q.selectedIndex].value;
				console.log(`qty = ${qty}`)
             	putqty(items.id,qty);
             }
/*const mod2 = createHTMLElement(html);
let finaledit = mod2.lastElementChild.lastElementChild;
console.log(finaledit);
finaledit.onclick = () => {


let q = document.getElementsByName('qty')[0];
let qty = q.options[q.selectedIndex].value;
console.log(`qty = ${qty}`)
putsizeqty(items.id,qty,size);
}
mod1.appendChild(mod2);
html = `<div class="col-lg-5">
                  <img class="d-block w-100" src="${items.img}"
                    alt="First slide">
              </div>`
const mod3 = createHTMLElement(html);
mod1.appendChild(mod3);*/

    							}



                            tBody.appendChild(row); 
                            document.getElementById('abc').innerHTML=cost;
                            document.getElementById('xyz').innerHTML=cost-500;
}

function createHTMLElement(html){
	const template = document.createElement('template');
	template.innerHTML = html;
	return template.content.firstElementChild;
}
