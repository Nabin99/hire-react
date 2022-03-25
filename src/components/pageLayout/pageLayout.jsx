
const PageLayout = ({heading,children}) =>{
    return(
            <div className="h-auto overflow-auto">
            <div
                className="p-5 text-center bg-image overflow-auto"
                style={{
                backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
                backgroundPosition:"center",
                backgroundSize:"cover",
                backgroundAttachment:'fixed',
                height:"100vh"
                }
                }
            >
                <div className="mask d-flex justify-content-center align-items-center h-auto overflow-auto" style={{backgroundColor: "rgba(0, 0, 0, 0.6)",minHeight:"80vh"}}>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="text-white">
                    <h1 className="mb-3">{heading}</h1>
                   {children}
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }

export default PageLayout;