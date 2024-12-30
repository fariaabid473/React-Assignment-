import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Login =()=>{
  return (
    <div>
      <Navbar />
    <main className="container w-50 my-5">
    <div className="text-center  m-5">
        <p className="fs-6">
            Nisi etiam lacus lectus ultrices nostra nulla efficitur id. Ultricies condimentum
            hendrerit vitae nec nibh consectetur. Potenti sed in mi convallis felis conubia.
            Etiam sit porta blandit porta ridiculus aenean. Posuere mattis dui.
        </p>
        <p>
            Lorem ipsum odor amet, consectetur adipiscing elit. Sit habitasse proin
            vulputate quisque ornare nulla.
        </p>
        <div className="d-flex justify-content-center">
            <span className="badge bg-secondary me-2">Author</span>
            <span className="badge bg-secondary me-2">📖 Book</span>
            <span className="badge bg-secondary me-2">Category</span>
            <span className="badge bg-secondary me-2">🏷️ Label</span>
        </div>
    </div>

    {/* Login Form */}
    <h3 className="card-title text-left mb-4">Login</h3>
    <div className="card mt-5 me-auto" style={{ maxWidth: '800px' }}>
        
        <div className="card-body">
          
            <form>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-3">
                   
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder=" Password"
                    />
                </div>
                <div className="mb-3">
                    <a href="#" className="text-decoration-none">Forget Password ??</a>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="button " className="btn btn-secondary me-5 w-45">Cancel</button>
                    <button type="submit " className="btn btn-success w-45">Login</button>
                </div>
            </form>
            
        </div>
    </div>
    <div className="text-center mt-3" 
    style={{ border: "1px solid #ccc",
    padding:"15px",
    margin:"25px",
    maxWidth: "800px"}}>
                Not Have Account Yet? <a href="#" className="text-decoration-none">Signup Now</a>
            </div>

    <div className=" col-12 mb-4 d-flex justify-content-center align-items-center bg-light text-dark" 
         style={{
           width: "100%", 
           height: "100px", 
           backgroundColor: "#D9D9D9", 
           border: "1px solid #ccc",
           margin:"25px",
          marginRight:"25%",
          marginTop:"10%"
         }}>
      <p className="m-0 fw-bold">Advertisement</p>
    </div>
</main>
<Footer />
</div>
  );
};
export default Login;