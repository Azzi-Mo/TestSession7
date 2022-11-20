import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

function Dashboard() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    AllData();
  }, []);

  const AllData = () => {
    fetch("http://localhost:9000/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  let DeletProd = (PID) => {
    Swal.fire({
      title: `u will delet id ${PID}`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/Products/${PID}`, { method: "DELETE" })
          .then((res) => {
            res.json();
          })
          .then(() => {
            AllData();
          });
      }
    });
  };
  return (
    <>
      <section>
      <div>
        <Link to={`/AddProd`} className="btn btn-success">Add Product</Link> 
      </div>
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
                      <Link
                        to={`/CardProducts/${Prod.id}`}
                        className="btn btn-primary"
                      >
                        {" "}
                        view{" "}
                      </Link>
                      <Link
                        className="btn btn-danger"
                        onClick={() => {
                          DeletProd(Prod.id);
                        }}
                      >
                        {" "}
                        delete{" "}
                      </Link>
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
