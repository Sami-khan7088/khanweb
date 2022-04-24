import Data from "./array"
function App() {
  return (
    <>
      <h3 className="heading_style">Top 20 Movies in 2021</h3>
      <div className="cards">
      {
        Data.map((c) => {
          return (
            <>
              
                <div className="card">
                <a href={c.link}>
                  <img src={c.src} alt="myPic" className="img" />
                  </a>
                  <div className="card_info">
                    <span className="card_category">{c.span}</span>
                    <div className="heading">
                    <div>
                    <h3 className="card_title">{c.title}</h3>
                    </div>
                    <div style={{backgroundColor:"#fff"}}>
                    <a href={c.link} >
                      <button>watch Now</button>
                    </a>
                    </div>
                    </div>
                  </div>
                </div>
            </>
          )
        })
      }
      </div>
    </>
  )
}
export default App;