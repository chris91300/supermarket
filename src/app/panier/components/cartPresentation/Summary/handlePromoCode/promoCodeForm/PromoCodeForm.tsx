'use client'

import { test } from 'ramda';
import React, { useState } from 'react'
import checkThisPromoCode from '../../../../../../_utils/checkThisPromoCode';
import usePromoCodeIsValide from '@/app/_hooks/forPromoCode/usePromoCodeIsValide';


function PromoCodeForm() {
    const [ inputValue, setInputValue ] = useState("");
    const [loading, setLoading] = useState(false);
    const [ codeInvalidated, setCodeInvalidated ] = useState(false);
    const promoCodeIsValide = usePromoCodeIsValide();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        if( test(/\w*/, newValue) ){
            setInputValue(newValue)
        }
    }

    const removeCodeInvalidatedError = () => {
      setCodeInvalidated(false);
    }

    const validateCode = async (e: React.SyntheticEvent) => {
      e.preventDefault();
      
      if(inputValue != ""){
        setLoading(true);
        const { codeIsValid } = await checkThisPromoCode(inputValue);
        codeIsValid ? promoCodeIsValide() : setCodeInvalidated(true);
        setInputValue("")
        setLoading(false);
      }
      
    }

  return (
    <form
      className='flex flex-col items-center gap-3 border-violet border-y-2 py-5'
      onSubmit={validateCode}
    >
        <label>Code promo</label>
        <input
          className='md:w-3/4 border border-black rounded-lg pl-2'
          type="text"
          placeholder='votre code'
          value={inputValue}
          onChange={handleChange}
          onFocus={removeCodeInvalidatedError}
        />
        <input
          type="submit"
          value={loading ? "Vérification" : "Valider"}
          className='text-violet border border-violet rounded-2xl px-4 py-1 hover:text-white hover:bg-violet duration-300 transition-all'
        />
        { codeInvalidated && <p className="text-red-500 text-sm">code invalide</p> }
    </form>
  )
}

export default PromoCodeForm