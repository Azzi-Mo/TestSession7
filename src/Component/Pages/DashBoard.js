import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Dashboard() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  let DeletProd = (PID) =>
  {
    fetch(`http://localhost:9000/Products/${PID}`,{
      method:'DELETE'
    })
    .then((res)=> {res.json()})
    .then((data)=> console.log(data))
    // console.log(PID);
  }
  return (
    <>
      <section>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((Prod) => {
              return (
                <>
                  <tr key={Prod.id}>
                    <th scope="row">{Prod.id}</th>
                    <td>{Prod.title}</td>
                    <td>{Prod.price}</td>
                    <td>
                      <Link to={`/CardProducts/${Prod.id}`} className="btn btn-primary"> view </Link>
                      <Link  className="btn btn-danger" onClick={()=>{ DeletProd(Prod.id) }}> delete </Link>

                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
export default Dashboard;
