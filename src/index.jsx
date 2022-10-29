import React from "react";
import  ReactDOM  from "react-dom";
import './index.css'



function Hi(){



return <div id="main">


<form onSubmit= "postInfo(); return false ">

<div id="innerform">
<b> First Name:</b> <br />
<input type="text"  placeholder="Enter First Name" id="first" />
<br />

<b>Last Name:</b> <br />
<input type="text" name="" id="last" placeholder="Enter Last Name"/>
<br />
<b>Enter Age:</b> <br />
<input type="text"  placeholder="Enter Age" id="age" />
<br />
<b>Qualification:</b> <br />
<input type="text" name="" id="qualification" placeholder="Enter Qualification"/>

<br/>

<b>Enter Current Address:</b> <br />
<input type="text"  placeholder="Enter Current Address" id="Current-Address" />
<br/>

<b>Enter Postal Address:</b> <br />
<input type="text" name="" id="Postal-Address" placeholder="Enter Postal Address"/>
<br/>

<b>Enter Email:</b> <br />
<input type="email" name="" id="email" placeholder="example@gmail.com"/>
<br/>

<b>Enter Phone No: </b><br />
<input type="number" name="" id="Number" placeholder="Enter Contact No"/>
<br />

Male<input type="radio" name="" id="" placeholder="" /> Female<input type="radio" />
<br /><br />
<button type="submit">Submit</button>

</div>
</form>


</div>



}
ReactDOM.render(<Hi/>,document.querySelector('#root'));