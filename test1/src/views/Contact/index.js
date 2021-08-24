import { useState } from "react";
import ContactDetail from "./components/ContactDetail";
import MemberItem from "./components/MemberItem";
import SearchBox from "./components/SearchBox";
import data from "./data";

function Contact(props) {
    // 검색창 상태
    const [searchKeyword, setSearchKeyword] = useState("");
    // 멤버 리스트 상태
    const [memberList, setMemberList] = useState(data);
    // 선택된 멤버 상태
    const [selectedMember, setSelectedMember] = useState();

    // 멤버 선택하기
    const buttonHandler = (member) => {
        setSelectedMember(member);
    };
    // 검색하면 선택풀리기 + 검색 상태 변화
    const searchHandler = (event) => {
        setSearchKeyword(event.target.value);
        setSelectedMember();
    };

    return (
        <div className="container">
            <h1 className="subject">이종현의 연락처</h1>
            <div className="contact-wrap">
                <div className="col left">
                    <SearchBox searchKeyword={searchKeyword} searchHandler={searchHandler} />
                    <div className="contact-list">
                        <ul>
                            {memberList.filter((member) => {
                                if (searchKeyword === "") {
                                    return member;
                                }
                                else if (member.name.includes(searchKeyword)) {
                                    return member;
                                } else { return false; }
                            }).map((member) => {
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