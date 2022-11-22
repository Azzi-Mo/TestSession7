import './Main.scss'
import SideBar from '../Pages/SideBar'
import AllProd from '../Pages/AllProd'
import Dashboard from '../Pages/DashBoard'
import CardProduct from '../Pages/CardProduct'
import AddProd from '../Pages/AddProd'
import EditProd from '../Pages/EditProd'
import { Routes , Route } from 'react-router-dom'
function MainApp()
{return(
    <>
        <section className="cont" style={{'height':window.innerHeight}}>
            <div className='dv1'>
            <SideBar/>
            </div>
            <div className='dv2'>
             <Routes>
                <Route path='Products' element={<AllProd/>}/>
                 <Route path='Dashboard' element={<Dashboard/>}/>   
                 <Route path='CardProducts/:Params' element={<CardProduct/>}/>   
                 <Route path='AddProd' element={<AddProd/>}/> 
                 <Route path='EditProd/:Params' element={<EditProd/>}/>        
             </Routes>
            </div>

        </section>
    </>
)}
export default MainApp