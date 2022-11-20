import { useEffect, useState } from "react"

function AllProd()
{
    const [Products , setProducts] = useState([])
    useEffect(()=>{

     fetch('http://localhost:9000/Products')
     .then((res)=> res.json())
     .then((data)=> setProducts(data) )

    },[]);   

    return(
        <>
            {Products.map( (Prod)=> {
                return(
                    <>
                        <h6>{Prod.title}</h6>
                    </>
                )
            } )}
        </>
    )

}
export default AllProd