import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {
  const [principle, setPrinciple] = useState('');
  const [intrest, setIntrest] = useState('');
  const [year, setYear] = useState('');
  const [totalIntrest, settotal] = useState(0)
  const[principleis,Setprincipleis]=useState(true)
  const[intrestis,setintrestis]=useState(true)
  const[yearis,setyearis]=useState(true)

  console.log(principle)
  console.log(year)
  console.log(intrest)
  const calculateintrest = (e) => {
    e.preventDefault();
    console.log()
    var p = principle
    var i = intrest
    var y = year
    var total = (p * i * y) / 100
    settotal(total)
    console.log(total)


  }
  const handileReset = () => {
    setIntrest('')
    setPrinciple('')
    setYear('')
    settotal(0)


  }
  const Validiteclick = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    if (name === 'principle') {
      setPrinciple(value)

      let isValid = value === '' || !!value.match(/^[0-9]+$/);
      console.log(isValid)
      if (isValid == true) {
        Setprincipleis(true)
      }
      else {
        Setprincipleis(false)
      }
    }
    else if(name==='intrest'){
      setIntrest(value)

      let isValid = value === '' || !!value.match(/^[0-9]+$/);

      if (isValid == true) {
        setintrestis(true)
      }
      else {
        setintrestis(false)
      }



    }
    else{
      setYear(value)
      let isValid = value === '' || !!value.match(/^[0-9]+$/);
      if (isValid == true) {
        setyearis(true)
      }
      else {
        setyearis(false)
      }

      

      
    }
  }


  return (
    <div>
      <div className="d-flex justify-content-center align-items-center w-100 mt-5" style={{ height: '90vh' }}>
        <div className="bg-light p-5 rounded" style={{ width: "500px" }}>
          <h1>simple intrest</h1>
          <p>calculate your simple intrest easily</p>
          <div style={{ height: '150px' }} className="bg-warning mt-3 rounded d-flex justify-content-center align-items-center flex-column">
            <h2>&#x20B9; {totalIntrest}</h2>
            <p>Total simple intrest</p>
          </div>
          <form action="" className='mt-3' onSubmit={calculateintrest}>
            <TextField name='principle' id="outlined-basic" label="&#x20B9; Principle amount" variant="outlined" className='w-100' onChange={(e) => Validiteclick(e)} value={principle}/>
            {principleis?'':<h5 style={{color:'red'}}>invald data</h5>}
            <TextField name='intrest' value={intrest} id="outlined-basic" label="Rate of interest(p.a)%" variant="outlined" className='w-100 mt-2 ' onChange={(e) => Validiteclick(e)} />
            {intrestis?'':<h5 style={{color:'red'}}>invald data</h5>}

            <TextField name='year' value={year} id="outlined-basic" label="Year(Yr)" variant="outlined" className='w-100 mt-2 ' onChange={(e) => Validiteclick(e)} />
            {yearis?'':<h5 style={{color:'red'}}>invald data</h5>}

            <Stack direction="row" spacing={2}>
              <Button variant="contained" disabled={principleis&&intrestis&&yearis?false:true} className='bg-success mt-3' style={{ height: '50px', width: '200px' }} type='submit'>calculate</Button>
              <Button variant="contained" href="#contained-buttons" className='mt-3 bg-light' style={{ height: '50px', width: '200px', color: 'blue' }} onClick={handileReset}>
                Reset
              </Button>            </Stack>



          </form>

        </div>


      </div>
    </div>
  );
}

export default App;
