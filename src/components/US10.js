import { useState } from "react";

function US10(){
    const [data,setdata] = useState({})
    function hc(event){
        const {name,value} = event.target 
        setdata({...data,[name]:value})
    }

    function hs(e){
        e.preventDefault()
        alert('You entered name:'+data.fname)
    }

    return (
    <>
        <form onSubmit={hs}> 
            <fieldset><legend>Customer Detail</legend>
                <table>
            <tbody><tr> 
            <th>  Name: </th>
            <td> <input type="text" placeholder="Enter your Name" maxlength="10" onChange={hc} name='fname' /> </td>	
            </tr>

            <tr> 
                <th> Number: </th>
                <td> <input type="tel" placeholder="Enter your Number" maxlength="10" onChange={hc} /> </td>	
            </tr>
            <tr> 
                <th>  Email: </th>
                <td> <input type="email" placeholder="Enter your Email" onChange={hc}/> </td>	
            </tr>
            <tr> 
                <th>  Pizza Name: </th>
                <td> <input type="checkbox" placeholder="Enter your Email" onChange={hc}/> Simple. veg <br/>
                    <input type="checkbox" placeholder="Enter your Email" onChange={hc}/> 7 Cheeze <br/>
                </td>	
            </tr>
            <tr> 
                <th> Outlet City: </th>
                <td> <select>	<option value="" selected="" disable="" hidden="">--List of Area-- </option>	
                                <option> Ahmedabad </option>
                                <option> Gandhinagar </option>
                                <option> Baroda </option>
                                </select> 
                </td>	
                </tr>
                <tr>
                    <th>Order date:</th>
                    <td><input type="date" onChange={hc}/></td>
                </tr>
                <tr>
                    <th>Comment:</th>
                    <td> <textarea cols="15" rows="2" onChange={hc}></textarea>
                    </td>
                </tr>
            </tbody></table>
            </fieldset>

            <fieldset><legend>Scale Ordered Pizza </legend>
            <table rules="all">
            <tbody><tr>
                <th>Scale</th>
                <th> Good </th>
                <th> Avg. </th>
                <th> Bad </th>
            </tr>
            <tr>
                <th>Quality</th>
                <th> <input type="radio" name="a1" checked="" onChange={hc}/> </th>
                <th> <input type="radio" name="a1" onChange={hc}/> </th>
                <th> <input type="radio" name="a1" onChange={hc}/> </th>
            </tr>
            <tr>
                <th>Quantity</th>
                <th> <input type="radio" name="a2" checked="" onChange={hc}/> </th>
                <th> <input type="radio" name="a2" onChange={hc}/> </th>
                <th> <input type="radio" name="a2" onChange={hc}/> </th>
            </tr>
            <tr>
                <th>Freshness</th>
                <th> <input type="radio" name="a3" onChange={hc}/> </th>
                <th> <input type="radio" name="a3" checked="" onChange={hc}/> </th>
                <th> <input type="radio" name="a3" onChange={hc}/> </th>
            </tr>
            <tr>
                <th>Overall <br/> Rating </th>
                <th colspan="3">0<input type="range" scale="1" onChange={hc}/> 10</th>
            </tr>
            <tr align="center">
                <td colspan="4"><input type="submit" onChange={hc}/></td>
            </tr>
            </tbody></table>
            </fieldset>
		</form>
    </>
  );
}

export default US10