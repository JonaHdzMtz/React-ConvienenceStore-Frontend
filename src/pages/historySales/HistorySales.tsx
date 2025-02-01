import React from 'react'
import styles from "./HistorySales.module.css"
import { Topbar } from '../../components/topBar/Topbar'
import { useNavigate } from 'react-router-dom'
export  const HistorySales=()=> {
  const navigate = useNavigate()
  return (
    <>
     <Topbar/>

     <button onClick={()=>{navigate("/historial/procesoventa")}}>registrar venta</button>
     <div style={{background:"#191919", height:"100vh" }}>
        <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>total</th>
              <th>productos Vendidos</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
        </div>
     </div>
    </>
       
  )
}
