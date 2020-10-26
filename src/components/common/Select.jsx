// import React from 'react'

// const Select = ({ name, label, data, error, ...rest }) => (
//   <div className="form-group">
//     <label htmlFor={name}>{label}</label>
//     <select name={name} className="custom-select" id={name}>
//       <option selected></option>
//       {data.genre.map((g) => (
//         <option key={g._id} value={g.name}>
//           {g.name}
//         </option>
//       ))}
//     </select>
//     {error && <div className="alert alert-danger">{error}</div>}
//   </div>
// );

// export default Select;

import React from "react";

const Select = ({ name, label, error, options, ...rest }) => (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="custom-select">
        <option value="" />
        {options.map((option) => (
          <option key={Option._id} value={option._id}>{option.name}</option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );

export default Select;
