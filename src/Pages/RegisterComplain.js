import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../component/Home/Header";
import Footer from "../component/Home/footer"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function RegisterComplain() {
  // const userId=JSON.parse(window.localStorage.getItem('user'))
  const[complain, setComplain] =useState({
    userId:`643bfe15b0d5afb55234a9ea`,
    name:"",
    phone:0,
    email:'',
    designation:"",
    contactno:0,
    adhaar:"",
    orgnisationname:'',
    organisationphone:0,
    organisationemail:'',
    oraginsationhead:'',
    oragnisationstate:'',
    organisationdistrict:'',
    organisationaddress:'',
    offendersname:"",
    offendersdesignation:'',
    offendersworkingrelationship:'',
    description:''
  })

// console.log(userId._id);
// setComplain({...complain,userId})
  const handleChange = (e) => {
		e.preventDefault();
		const { value, name } = e.target;
    console.log(value,name);
		setComplain(() => {
			return {
				...complain,
				[name]: value,
			};
		});
	};
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
		e.preventDefault();
			await axios.post("https://hershield-backend-production.up.railway.app/api/complaint/register",complain).then((res) => {
				alert(res.data.message);
				console.log(res)
				Navigate("/Home");
			});
	};
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(45deg, rgb(251, 87, 141, 0.3), rgb(248, 109, 105, 0.3))",
            width: "30%",
            borderRadius: " 30px 0 30px 0",
            m:'30px 0 30px 0'
          }}
        >
          <Typography
            variant="h6"
            sx={{ margin: "16px", display: "flex", justifyContent: "center" }}
            color="#800080"
          >
            <strong> Register Your Complain</strong>
          </Typography>
        </Box>
        <Box sx={{width:'70%'}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "10px",
              borderLeft:3,
              borderColor:'#800080'
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Complainant Details:</strong>
            </Typography>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="name" label="Name" variant="outlined" color='secondary' size="small" />
          <TextField onChange={handleChange} name="phone" label="Mobile Number" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="designation" label="Designation" variant="outlined" color='secondary' size= "small"/>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="email" label="Email" variant="outlined" color='secondary' size="small" />
          <TextField onChange={handleChange} name="contactno" label="Adhaar Mobile Number" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="adhaar" label="Adhaar Number" variant="outlined" color='secondary' size= "small"/>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "10px",
              borderLeft:3,
              borderColor:'#800080'
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Organization Details:</strong>
            </Typography>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="organisationname" label="Name" variant="outlined" color='secondary' size="small" />
          <TextField onChange={handleChange} name="organisationphone" label="Mobile Number" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="organisationemail" id="fullwidth" label="Email" variant="outlined" color='secondary' size="small" />
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="organisationhead" label="Head Of The Organization" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="organisationstate" label="State" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="organisationdistrict" label="District" variant="outlined" color='secondary' size= "small"/>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="organisationaddress" multiline rows={3} label="Full Address" variant="outlined" color='secondary' size= "small"/>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "10px",
              borderLeft:3,
              borderColor:'#800080'
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Offender's Details:</strong>
            </Typography>
          </Box>
          <Box sx={{ margin:'20px', display:'flex','& > :not(style)': {m: 2, width:'30%'},}}>
          <TextField onChange={handleChange} name="offendersname" label="Name" variant="outlined" color='secondary' size="small" />
          <TextField onChange={handleChange} name="offendersdesignation" label="Designation" variant="outlined" color='secondary' size= "small"/>
          <TextField onChange={handleChange} name="offendersworkingrelationship" label="Working Relatioship" variant="outlined" color='secondary' size="small"/>
          </Box>
          
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "10px",
              borderLeft:3,
              borderColor:'#800080'
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "6px 8px",
              }}
            >
              <strong>Event Details:</strong>
            </Typography>
          </Box>
          <Box sx={{display:'flex', width:'100%', }}>
          <Box sx={{ margin:'20px',width:'60%', display:'flex','& > :not(style)': {m: 2, width:'100%'},}}>
          <TextField onChange={handleChange} name="description" multiline rows={3} label="Description About The Event" variant="outlined" color='secondary' size= "small"/>          </Box>
          <Box sx={{display:'flex', justifyContent:'center', width:'40%', alignItems:'center'}}>
          <Button
            variant="contained"
            component="label"
            color="secondary"
          >
            Upload Any Proof
            <input
              type="file"
              hidden
            />
          </Button>
          </Box>
          </Box>
          <Box sx={{display:'flex', justifyContent:'center', m:'40px'}}>
            <Button onClick={handleSubmit} variant="contained" color="secondary">Submit</Button>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
}

export default RegisterComplain;
