import React from "react";

const Adress = () => {
    const text ="In den Buchen,7 \n 51645, Gummersbach \n zouerimouhamed@gmail.com  ";
    let newText = text.split('\n').map(i => {
         return <p className="text-muted mb-0">{i}</p>});
 return newText ;
};
export default Adress;