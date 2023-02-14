import err from "./error.js"
document.getElementById("formdata").addEventListener('submit', getformdata);

function getformdata(e) {
    e.preventDefault();
    let moviename = document.getElementById('inputdata').value;
    let key = "9a169ad3";
    getmoviedata(key,moviename)
}
async function getmoviedata(k,m) {

    try {
        let data=await fetch(`http://www.omdbapi.com/?apikey=${k}&s=${m}`);
        let result= await data.json();
        displaydata(result.Search) ;
        document.getElementById('inputdata').value=null;
    }
    catch (err) {
        errdisplay();
        // console.log(err)
    }
}

function displaydata(data){
    console.log(data);
    document.getElementById("banner").innerHTML=null;
    data.map((ele,index)=>{

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src=ele.Poster;

        let title = document.createElement("h3");
        title.innerText=ele.Title;

        let year = document.createElement("h5");
        year.innerText=ele.Year;

        div.append(image,title,year);
        document.getElementById("banner").append(div);



        
    })    

}
function errdisplay(){

    document.getElementById("errdis").innerHTML=err();

}

function defaultHome(){
    let moviename = "Avatar";
    let key = "9a169ad3";

    getmoviedata(key,moviename)

}

defaultHome();