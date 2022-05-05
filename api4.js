// async function f1(){
//     var res=await fetch("https://www.fishwatch.gov/api/species")
//     var res2= await res.json();
//     const headers = {'Content-Type':'application/json',
//                     'Access-Control-Allow-Origin':'*',
//                     'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}
// const response = {
//     statusCode: 200,
//     headers:headers,
//     body: JSON.stringify(X),
// };
// return response;

//     console.log(res2)
//     // console.log(res)
// }
// f1();
// https://www.fishwatch.gov/api/species

// https://api.jikan.moe/v4/anime
// async function
// async function fetchAsync () {
//     // await response of fetch call
//     let response = await fetch('https://api.exchangerate.host/latest)');
//     // only proceed once promise is resolved
//     let data = await response.json();
//     // only proceed once second promise is resolved
//     console.log(data)
let lable3=document.createElement("lable")
lable3.innerHTML="<h1>given input datas</h1><br><h5>rates-success-date-base</h5>"
let inp=document.createElement("input")
inp.style.backgroundColor="green"
inp.style.margin="50px"
inp.style.marginRight="30px"
inp.setAttribute("id","input")


    let btn=document.createElement("button")
    btn.style.backgroundColor="purple"
    btn.style.marginRight="10px"
  btn.textContent="clickme"
  btn.addEventListener("click",f2)
  document.body.append(lable3,inp,btn)

async function f2(){
  let response = await fetch('https://api.exchangerate.host/latest');
  let data = await response.json();
  console.log(data)
  // return data,motd
  // .then((data)=>{
  //   console.log(data)

  let div1=document.createElement("div")
div1.classList.add("row")

  let get=document.getElementById("input").value
  console.log(get)
    // for(i=0;i<data.length;i++){
      for(let i in data){
      let div2=document.createElement("div")
      if(get==i){
        if(get=="rates"){
          const entries = Object.entries(data.rates);

           console.log(entries);
           for(let i=0;i<entries.length;i++ ){
             let entriesdata=entries[i]
             let ratesdata=entriesdata.join("_")
            //  for(let j=0;j<entriesdata.length;j++){
            //     console.log(entriesdata[j])
                
            //  }
             var newlabel = document.createElement("Label");
newlabel.setAttribute("id","lable_"+ i);
newlabel.innerHTML = ratesdata;

div2.appendChild(newlabel);
           }

          // div2.innerHTML=JSON.stringify(data[i])
          div2.style.color="blue"
          div1.appendChild(div2)

                document.body.append(div1)
        }else{
          div2.innerHTML=`${get}----${data[get]}`
          div1.appendChild(div2)
                document.body.append(div1)
        }

      }
}
  // })
  }
    f2()
     
  // }
  
  // trigger async function
  // log response or catch error of fetch promise
                                               












                                                         












                        




















   
