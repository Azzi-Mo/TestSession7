import { Link } from "react-router-dom"

function SideBar()
{
    return(
        <>
            <section className="Sec_Side">
                <div>
                    <ul>
                        <Link to='Products'>All Products</Link>

                    </ul>
                </div>
                <div>
                    <ul>
                    <Link to='Dashboard'>Dashboard</Link>
                    </ul>
                </div>
            </section>
        </>
    )
}
export default SideBar