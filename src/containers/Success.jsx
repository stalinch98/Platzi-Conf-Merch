import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map'
import '../styles/components/Success.css';

const Success = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;
    return (
        <div className="Succes">
            <div className="Success-content">
                <h2>{`${buyer}, Gracias por tu compra`}</h2>
                <span>Tu pedido llegara en 3 dias a tu dirección:</span>
                <Map />
            </div>
        </div>
    );
}

export default Success;