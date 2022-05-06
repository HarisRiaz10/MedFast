import React from 'react'
import tutorialService from '../../Api/tutorial.service';
import sellerServices from '../../Api/seller.services';
import history from '../../routes/history';


const Login=()=>{
    var b=false;
    var s=false
    var username;
    var pass;
    const getUsername=(e)=>{
        username = e.target.value;
    }
    const getPassword=(e)=>{
        pass=e.target.value;
    }
    const login=()=>{
        console.log('In login funct');
        tutorialService.login(username,pass).then((res)=>{
            console.log('res: ',res.data);
            if(res?.data.length? res?.data[1]?.buyer===true : ''){
                console.log('buyer check true');
                b=true
                
            history.push('/search')
            window.location.reload();
            }
        })
        sellerServices.login(username,pass).then((res)=>{
            //console.log(res.data[1].seller);
            if(res?.data.length? res?.data[1]?.seller===true : ''){
                console.log('seller check true');
                s=true
            }
        })
        
    }
    const goto=()=>{
        history.push('/signup')
        window.location.reload();
    }
return(
    
    <div>
        <div class="box">
        <div class="title-name">
            <p>
                MedFast
            </p>
        </div>
        <div>
            <input id='username' type="text" class="box1" placeholder="username" onChange={getUsername}/>
            <input id='pass' type="password" class="box2" placeholder="password" onChange={getPassword}/>
        </div>
        <div>
            <button className='btn btn-primary' onClick={login}>Login</button>
            <button class="signup-button" onClick={goto}>Sign up</button>
        </div>
    </div>
    </div>
)
}
export default Login