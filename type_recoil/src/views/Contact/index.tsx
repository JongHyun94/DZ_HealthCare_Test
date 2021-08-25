import { useState } from "react";
import {useRecoilState} from "recoil";
import { memberInfo, smember } from "../../recoil/contact";

function Contact(props : any) {
    const [filterMember, setFilterMember] = useRecoilState(smember);
    const [memberList, setMemberList] = useState(filterMember);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedMember, setSelectedMember] = useState<memberInfo>({
        id: -1,
        name: "",
        department: "",
        phone: "",
        mail: "",
    });

    const buttonHandler = (member : memberInfo) => {
        setSelectedMember(member);
    };

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);

        setFilterMember(memberList.filter((member) => {
            if(e.target.value === ""){
                return member;
            } else if(member.name.toLowerCase().includes(e.target.value.toLowerCase())){
                return member;
            } else {return false;}
        }));

        setSelectedMember({
            id: -1,
            name: "",
            department: "",
            phone: "",
            mail: "",
        });
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
                        {filterMember.map((member) => {
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
                    {(filterMember.length > 0)&&(selectedMember.id!==-1)?
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