//rafce dá o pedaço pronto
import React from 'react'

const Pedido = () => {
  return (
    // colar a div pedido aqui 
    <div className="pedido border rounded p-3 mb-3">
      <div className="d-flex align-items-center">
        <div className="p-2">
          <i className="fa-solid fa-hdd fa-3x text-info"></i>
        </div>
        <div className="flex-grow-1 p-2">
          <h5 className="text-secondary mb-1">SSD</h5>
          <p className="text-muted mb-0">SSD Kingston A400 - SATA</p>
        </div>
      </div>
    </div>
  )
}

export default Pedido
