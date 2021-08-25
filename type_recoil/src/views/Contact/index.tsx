import { useState } from "react";
import {useRecoilValue} from "recoil";
import { memberInfo, smember } from "../../recoil/contact";
import ContactDetail from "./components/ContactDetail";
import MemberItem from "./components/MemberItem";
import SearchBox from "./components/SearchBox";

function Contact(props : any) {
    // 멤버 리스트 검색 상태
    const memberList = useRecoilValue(smember);
    // 멤버 리스트 상태
    const [filterMember, setFilterMember] = useState(memberList);
    // 검색창 상태
    const [searchKeyword, setSearchKeyword] = useState('');
    // 선택된 멤버 상태
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
            } else if(member.name.includes(e.target.value)){
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
                    <SearchBox searchKeyword={searchKeyword} searchHandler={searchHandler} />
                <div className="contact-list">
                    <ul>
                        {filterMember.map((member) => {
                            return (
                                <MemberItem key={member.id} member={member} buttonHandler={buttonHandler} />
                            );
                        })}
                    </ul>
                </div>
                </div>
                <div className="col right">
                    <ContactDetail selectedMember={selectedMember} />
                </div>
            </div>
        </div>
    );
}
export default Contact;