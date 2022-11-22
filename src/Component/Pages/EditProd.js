import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditProd() {
  let { Params } = useParams();

  console.log(Params);

  const [edTitle, setEdTitle] = useState([]);
  const [edPrice, setEdPrice] = useState([]);

  const Sumb = (e) => {
    e.preventDefault();

    useEffect(() => {
      fetch(`http://localhost:9000/Products/${Params}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: edTitle,
          price: edPrice,
        }),
      })
        .then((res) => res.json)
        .then((data) => {
          // console.log(data)
        });
    }, []);
  };

  return (
    <>
      <form onSubmit={Sumb}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">edite title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="type new title "
            onChange={(e) => {
              setEdTitle(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">edite price</label>
          <input
            type="type new price"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="type new price"
            onChange={(e) => {
              setEdPrice(e.target.value);
            }}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default EditProd;
