import React, { useState, useEffect } from 'react';

function D3 () {
    const [fetchDataBackend, setfetchDataBackend] = useState([{}]);
    const [counter, setcounter] = useState(1);
   
    useEffect(() => {
        if(counter === 1){
            return;
        }
        const req = fetch("./apidb2",{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body: JSON.stringify({"maximum":counter}) 
        });
        req.then(res => res.json()).then(data => setfetchDataBackend(data)).catch(err => console.log(`ERRROR ${err}`))
    }, [counter]);

    return ( 
        <div className="pokus">
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