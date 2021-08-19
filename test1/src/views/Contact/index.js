import { useState } from "react";
import data from "./data";

function Contact(props) {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedMember, setSelectedMember] = useState();
    const [dirtyContent, setDirtyContent] = useState(true);

    const buttonHandler = (member) => {
        setSelectedMember(member);
    };

    const searchHandler = (event) => {
        setSearchKeyword(event.target.value);
        if(event.target.value === undefined){
            setDirtyContent(false);
        } else {
            setDirtyContent(true);
        }
        setSelectedMember();
    };

    return (
        <div className="container">
            <h1 className="subject">이종현의 연락처</h1>
            <div className="contact-wrap">
                <div className="col left">
                <div className="search-box">
                    <input type="text" className="inp-sch" placeholder="검색어를 입력하세요." value={searchKeyword} onChange={searchHandler}/>
                </div>
                <div className="contact-list">
                    <ul>
                        {data.filter((member) => {
                            if(searchKeyword === ""){
                                return member;
                            }
                            else if(member.name.toLowerCase().includes(searchKeyword.toLowerCase())){
                                return member;
                            } else {return false;}
                        }).map((member) => {
                            return (
                                <li key={member.id}>
                                    <button type="button" onClick={() => buttonHandler(member)}>{member.name}</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                </div>
                <div className="col right">
                <div className="details">
                    {(data.length > 0)&&(selectedMember)&&(dirtyContent)?
                    <ul className="info">
                        <li>이름: {selectedMember.name}</li>
                        <li>부서: {selectedMember.department}</li>
                        <li>휴대폰: {selectedMember.phone}</li>
                        <li>메일: {selectedMember.mail}</li>
                    </ul> 
                :
                    <p className="emptyset">정보가 없습니다.</p>
                }
                </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;