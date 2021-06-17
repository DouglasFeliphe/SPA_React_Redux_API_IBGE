import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function InputSelect({ label, onChange }) {


    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Município</InputLabel>
                <Select
                    defaultValue=""
                    onChange={handleMunicipioChange}
                >
                    {municipios.map(renderMunicipios)}
                </Select>
            </FormControl>
        </>
    )
}

export default InputSelect;