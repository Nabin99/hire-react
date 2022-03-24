
const PageLayout = ({heading,children}) =>{
    return(
            <header>
            <div
                className="p-5 text-center bg-image"
                style={{
                backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
                backgroundPosition:"center",
                backgroundSize:"cover",
                height:"100vh"
                }
                }
            >
                <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="text-white">
                    <h1 className="mb-3">{heading}</h1>
                   {children}
                  
                    </div>
                </div>
                </div>
            </div>
            </header>
        )
    }

export default PageLayout;