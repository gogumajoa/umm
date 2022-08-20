import Star from "./Star"
import "./Page.css";
import {useState} from 'react';


export default function Page(){

    const [comment, setcomment]=useState("");
    const [ inputStatus, setInputStatus ] = useState('')

    const handleClickRadioButton = (radioBtnName) => {setInputStatus(radioBtnName)}
    //https://taehoblog.netlify.app/react/radiobutton/   라디오 버튼 소스코드 참고하시면 될것같아요

    const[Starvalue, setStar] = useState('');
    const getvalue= starvalue=>{setStar(starvalue)};

    const star_click=()=> {
                console.log({Starvalue});

        /*fetch('http://43.200.205.215:8080/webtoons/{webtoonId}/star',{

        method : "POST",
        headers: {
            'Content-Type': 'application/json',
        },
              
        body : JSON.stringify({
            score : {Starvalue}
            }),
        })

        .then(response => response.json())
        .then(alert('성공'))*/
        }
        
       


    return(
        <main>
        
                <div className="Star">
                    <label>별점</label>
                    <Star />
                    <label className="s1">별점주기</label>
                    <Star starvalue={getvalue} ></Star>
                    <button className="OK" onClick={star_click}>확인</button>
                 </div>
                 

        </main>
    )

}