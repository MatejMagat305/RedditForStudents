import React, { useState, useEffect } from 'react';
import Allert from './Allert';
function D3 () {
    const [fetchDataBackend, setfetchDataBackend] = useState([{}]);
    const [counter, setcounter] = useState(1);

   // vyhradene pre error pokial moze nastat
   const [isError, setisError] = useState(false);
   const [istype, setistype] = useState("");
   const [isTitleError, setisTitleError] = useState("");
   const [iscontext, setiscontext] = useState("");


    useEffect(() => {
        if(counter === 1){
            return;
        }
        const req = fetch("./apidb2",{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body: JSON.stringify({"maximum":counter}) 
        });
        req.then(res => res.json()).then(data => {
            if (counter > 5 ){
                throw new Error("Maximal couter has been reacht");
            }
            setfetchDataBackend(data);
            setisError(true);
            setistype('succes');
            setisTitleError("Data has been retrived");
            setiscontext("data has been retreved");
        
        }).catch(err => {
            setisError(true);
            setistype('error');
            setisTitleError("Something want WRONG!");
            setiscontext(`${err}`);
            console.log(`ERRROR ${err}`)
        })
    }, [counter]);

    return ( 
        
        <div className="pokus">
            {isError && <Allert type={istype} title={isTitleError} context={iscontext}/>}

            {(typeof fetchDataBackend === "undefined" )?
            (<p>click the button to obtain data</p>):
            (fetchDataBackend.map((data,i) => (<p key={i}>{data.id} {data.name}</p>)))
            }
            
            <button onClick={() => setcounter(counter+1)} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                load up :{counter}
            </button>
        </div>
    );
}

export default D3;