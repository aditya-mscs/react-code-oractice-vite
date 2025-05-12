import React, { useEffect, useState } from "react";
import GoBackToHome from "./GoBacktoHome";

const ethnicities = {
  "asian": "Asian",
  "black": "Black",
  "white": "White",
  "brown": "Brown"
}

export const FormInputs = () => {
  const [ethnicity, setEthnicity] = useState('');
  const [veteran, setVeteran] = useState('no');
  const [agree, setAgree] = useState(true);
  const [slider, setSlider] = useState(25);

  const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //When using FormData, only inputs with a name attribute are included.
    const formData = new FormData(e.target as HTMLFormElement); //___________ NAME field is IMPORTANT
    const data = Object.fromEntries(formData.entries());

    console.log('handleFormChange', data);
    console.log(formData.get('file')); // Returns File object or null
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEthnicity(e.target.value);
    console.log('handleRadioChange', e?.target?.value)
  }

  useEffect(() => {
    setEthnicity('asian');
  }, [])

  console.log('ethnicity: ', ethnicity)
  return (
    <div>
      <GoBackToHome />
      <form onSubmit={handleFormChange} >
        {/* Text input */}
        <div>
          <label htmlFor="name">Name</label>
          {/* The name attribute is important for FormData */}
          <input type="text" placeholder="Enter your name" id="name" name="name" />
        </div>

        {/* Radio buttons */}
        <p>
          Radio selected: {ethnicity}
        </p>
        {Object.keys(ethnicities).map(key => (
          <div key={key}>
            <label htmlFor={key}>{ethnicities[key]}</label>
            <input
              type="radio"
              id={key}
              name="ethnicity"
              value={key}
              checked={key === ethnicity}
              onChange={handleRadioChange}></input>
          </div>
        ))
        }
        {/* Dropdown for veteran or not */}
        <div>
          <label htmlFor="veteran">Veteran</label>
          <select id="veteran" name="veteran" required value={veteran} onChange={(e) => setVeteran(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Checkbox for I agree */}
        <div>
          <label htmlFor="agree">I agree</label>
          <input type="checkbox" id="agree" name="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)}  ></input>
        </div>

        {/* Textarea */}
        <div>
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" name="comments" rows={4} cols={50} placeholder="Enter your comments here"></textarea>
        </div>
        {/* File upload */}
        <div>
          <input type="file" id="file" name="file" />
        </div>
        {/* Date and time inputs */}
        <div>
          <input type="time" name="time" />
          <input type="date" name="date" />
          <input type="datetime-local" name="datetime" /><br />
          <input type="month" name="month" />
          <input type="week" name="week" />
        </div>

        {/* Color, number, range, search, tel, url, email, password inputs */}
        <div>
          <input type="color" name="color" />
          <input type="number" name="number" placeholder="Number" />
          <p>Value: {slider}</p>
          <input type="range" name="range" min="0" max="100" value={slider} onChange={(e) => setSlider(Number(e.target.value))} /> <br />

          <input type="search" name="search" placeholder="Search" />
          <input type="tel" name="tel" placeholder="Telephone" />
          <input type="url" name="url" placeholder="URL" /><br />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="hidden" name="hidden" value="hidden" />
        </div>

        {/* Submit button */}
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </div>

      </form>
    </div >
  )
}