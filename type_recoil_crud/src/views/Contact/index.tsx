import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { amember, fmember, memberInfo, smember } from "../../recoil/contact";
import ContactDetail from "./components/ContactDetail";
import MemberItem from "./components/MemberItem";
import SearchBox from "./components/SearchBox";

function Contact(props : any) {
    // 멤버 리스트 검색 상태
    const memberList = useRecoilValue(smember);
    // 멤버 리스트 상태
    const [filterMember, setFilterMember] = useRecoilState(fmember);
    // 검색창 상태
    const [searchKeyword, setSearchKeyword] = useState('');
    // 선택된 멤버 상태
    const setSelectedMember = useSetRecoilState<memberInfo | undefined>(amember);

   

    const buttonHandler = (member : memberInfo) => {
        setSelectedMember(member);
    };

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);

        setFilterMember(filterMember.filter((member) => {
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
                    <ContactDetail/>
                </div>
            </div>
        </div>
    );
}
export default Contact;