import { useState } from "react";

function AddProd() {
  const [NameProd, setNameProd] = useState([]);
  const [TitleProd, setTitleProd] = useState([]);

  const sumb = (e) => {

    // console.log(NameProd);
    // console.log(TitleProd);
    e.preventDefault();
    fetch(`http://localhost:9000/Products`,{
      method:'POST',
      headers:{'Content-Type':'Application/json'},
      body:JSON.stringify({
        title:NameProd,
        price:TitleProd
      })
    }).then( (res)=> res.json() )
    .then( (data)=> console.log(data)  )
  };

  return (
    <>
      <form onSubmit={sumb}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">title prod</label>

          <input
            onChange={(e) => setNameProd(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter title"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">price</label>
          <input
            onChange={(e) => setTitleProd(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter price"
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
export default AddProd;
