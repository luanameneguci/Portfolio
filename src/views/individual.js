import SecNav from "./nav";
import works from "./work";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";

const filteredGroup = works.filter(work => work.description === "Individual");

function ListAllNav(){
    return(
        <div>
        <SecNav></SecNav>
        <div class="container gallery col-12 mt-0 d-flex flex-row d-inline-block">
          <div class="row">
            <ListAll></ListAll>
          </div>
        </div>
      </div>
    )
}
function ListAll(){
    return filteredGroup.map((work, index) => {
        return (
           
          <div class="col-4 my-2 d-flex flex-column align-items-center">
            
            <a href={work.link}>
            <div class="card" style={{ height: 53 + "vh", width: 58 + "vh" }}>
            
              <img
                src={work.imgSrc}
                class="object-fit-cover"
                style={{ height: 55 + "vh" }}
                alt="..."
              ></img>
              
                <div class="card-img-overlay justify-content-center d-flex flex-column align-items-center">
                <div class="bg-white shadow-sm justify-content-center d-flex flex-column align-items-center rounded col-8 py-2">
                  <h5 class="card-title text">{work.title}</h5>              
                    <p
                      class="card-text"
                      style={{ height: 3 + "vh", textAlign: "left" }}
                    >
                      <b class="text">{work.description}</b>
                    </p>
                  </div>
                </div>
              </div>
              </a>
            </div>
        );
      });
}

export default ListAllNav;