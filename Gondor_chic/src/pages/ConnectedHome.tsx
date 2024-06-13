import React from "react";
import productImage from '../assets/images/product.jpg';
import CustomHeader from "../components/accueil/CustomHeader";
import CustomHome from "./CustomHome";
import connectedUser from "../data/userData";

const ConnectedHome: React.FC = () => {
    return (
        <>
            <CustomHeader />
            <CustomHome
                productName="Cape gondorienne"
                description="Notre produit du jour est la “Cape gondorienne”. Une cape confectionnée à partir des tissus magiques de la Lórien, utilisée par les hobbits pour se fondre dans leur environnement. Cette cape, imprégnée de la magie elfique, permet à son porteur de devenir presque invisible aux yeux des ennemis. Elle est légère, confortable et d'une teinte gris-argent qui se confond avec les paysages naturels."
                stock={25}
                price={100}
                imageUrl={productImage}
                user={connectedUser}
            />
        </>
    );
};

export default ConnectedHome;
