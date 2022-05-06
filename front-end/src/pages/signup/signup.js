import React,{useEffect} from 'react'
import '../../css/signupcss.css';
import tutorialService from '../../Api/tutorial.service';
import sellerServices from '../../Api/seller.services';
import history from '../../routes/history';

const SignUp=()=>{
    var bool=false;
    var username='';
    var password='';
    var email='';
    var phoneNo='';
    var address='';
    var user='';
    
    var Buyerdata={
        name:'',
        pass:'',
        phoneNo:'',
        email:'',
    }
    var sellerData={
        name:'',
        pass:'',
        phoneNo:'',
        email:'',
        address:'',
    }
    
    const getUsername=(e)=>{
         username = e.target.value;
         console.log(username);
    }
    const getPassword=(e)=>{
        password=e.target.value;
    }
    const getEmail=(e)=>{
        email=e.target.value;
    }
    const getPhone=(e)=>{
        phoneNo=e.target.value;
    }
    const getAddress=(e)=>{
        address=e.target.value
    }
    const getuser=(e)=>{
        user=e.target.value
        if(user==='seller'){
            bool=true
        }
        if(user==='buyer'){
            bool=false
        }
    }

    const getValues=(e)=>{
        e.preventDefault()
        Buyerdata={
            name:username,
            pass:password,
            phoneNo:phoneNo,
            email:email,
        }
        sellerData={
            name:username,
            password:password,
            phone:phoneNo,
            email:email,
            address:address,
        }

        if(!bool){
                
                console.log(' buyer data',Buyerdata);
                tutorialService.create(Buyerdata).then(res=>{
                    console.log(res);
                    if(res.status===200){
                        history.push('/')
                        window.location.reload();
                    }
                })

                }
        else{
            console.log('seller data',sellerData);
            sellerServices.create(sellerData)
        }
    }
    const goto=()=>{
        history.push('/')
        window.location.reload();
    }

return(
    <div>
        <div class="box">
        <div>

            <button onclick="window.location.href='login-signup.html'" onClick={goto}>Back</button>

            <p class="title-name">
                Create an account
            </p>
        </div>
        <div>
            <form onSubmit={getValues}>               
                <input id="username" type="text" placeholder="username" onChange={getUsername}/>                           
                <input id="password" type="text" placeholder="password" onChange={getPassword}/>                   
                <input id="email" type="text" placeholder="email" onChange={getEmail}/>               
                <input id="phone" type="text" placeholder="phone" onChange={getPhone}/>              
                <input id="address" type="text" placeholder="address" onChange={getAddress} />
                <input id="buyer-seller" type="text" placeholder="buyer or seller" onChange={getuser}/>
                <input type="submit" value="submit" 
                // onClick={submitForm}
                /> 
            </form>
        </div>
    </div>
    </div>
)
}
export default SignUp