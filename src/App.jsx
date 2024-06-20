import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Component/input'
import RadioGroup from './Component/RadioGroup'

function App() {
  const [selectedOption, setSelectedOption] =
    useState("");
  const [subject, setSubject] = useState({
    english: true,
    maths: false,
    physics: false,
  });

  const [formData,setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact:"",
    gender: "",
    subject: {english: false, maths: false,physics: false},
    resume: "",
    url: "",
    option: "",
    About: ""
  })

  const handleSubjectChange = (e) => {
    const { id, name, value } = e.target;
    const key = id || name;  // Use id if available, otherwise fallback to name for radio buttons
    setFormData((prevData) => ({
      ...prevData,
      [key]: value
    }));
  };

  const handleReset = () =>{
    // Reset all state variables here
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      gender: "",
      subject: { english: true, maths: false, physics: false },
      resume: "",
      url: "",
      option: "",
      About: ""
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstname,
      lastname,
      email,
      contact,
      gender,
      selectedOption,
      subject,
      resume,
      url,
      about
    );
    // Add your form submission logic here
  };

  return (
    <div className="body shadow-lg rounded-lg bg-gray-600 min-w-96 h-auto py-6">
      <form action="#" method='get' className=' w-[80%] overflow-hidden mx-auto'>
        {/* <label htmlFor="fname">First Name</label><br />
        <input type="text" id='fname' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} className='py-1 px-3 rounded-sm w-full' placeholder='Enter First Name'/><br /> */}
        <Input type={'text'} label={'First Name'} id={"firstname"} value={formData.firstname} onChange={handleSubjectChange} placeholder='Enter first name'></Input>
        <Input type={'text'} label={'Last Name'} id={'lastname'} value={formData.lastname} onChange={handleSubjectChange} placeholder='Enter Last Name'></Input>
        <Input type={'email'} label={'Enter Email'} id={'email'} value={formData.email} onChange={handleSubjectChange} placeholder='Enter email'></Input>
        <Input type={'tel'} label={'Contact'} id={'contact'} value={formData.contact} onChange={handleSubjectChange} placeholder='Enter contact'></Input>
        

        <label htmlFor="gender">gender</label><br />
        <RadioGroup
          name="gender"
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' }
          ]}
          selectedValue={formData.gender}
          onChange={handleSubjectChange}
        />


        <label htmlFor="subject">Your best Subject</label><br />
        <div className='flex gap-x-6 w-full justify-center'>
          <div><input type="checkbox" name='english' id='English' checked={formData.subject.english === true} onChange={handleSubjectChange}/> English</div>
          <div><input type="checkbox" name='math' id='Math' checked={formData.subject.maths === true} onChange={handleSubjectChange} /> Maths</div>
          <div><input type="checkbox" name='physics' id='physics' checked={formData.subject.physics === true} onChange={handleSubjectChange} /> physics</div>
        </div>

        <label htmlFor="resumeupload">Upload Resume</label><br />
        <input type="file" id='resumeupload' /><br />

        <label htmlFor="url">Enter URL</label><br />
        <input type="url" id='url' /><br />

        <label htmlFor="choice">Select your choice</label><br />
        <select name="select" id="select" value={selectedOption} onChange={(e)=>{
          setSelectedOption(e.target.value)
        }}>
          <option value="" disabled selected={selectedOption===""}>Select your Ans</option>
          <optgroup label='Beginners'>
            <option value="1">HTML</option>
            <option value="2">Css</option>
            <option value="3">Javascript</option>
          </optgroup>
          
          <optgroup label='Advance'>
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">Express</option>
          </optgroup>
        </select>

        <label htmlFor="about"></label>
        <textarea name="about" id="about" className=' w-full h-28' placeholder='About your self' required></textarea><br />
      
        <label htmlFor="submit">Submit OR Reset</label>
        <div className='flex gap-x-4 mt-3'>
          <div><button type='reset' value="reset" className='px-9 py-2' onClick={(e)=> handleReset(e)}>Reset</button></div>
          <div><button type='submit' value="Submit" className='px-9 py-2' onClick={(e)=> handleSubmit(e)}>Submit</button></div>
        </div>
      </form>
    </div>
  )
}

export default App
