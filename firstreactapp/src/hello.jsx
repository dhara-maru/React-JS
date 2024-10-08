export default function Hello(){
   let name = "Hetvi"
   let n = 345987;
   let greet=()=>{
    return 'Main toh thak gayi bhaishaab!!!';
   }
   return <h3>
      {greet()} <br /> {n}
<br />
        <button>
            whatever
        </button>
    </h3>
}
