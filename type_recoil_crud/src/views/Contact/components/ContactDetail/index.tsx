import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { amember, estate, numberId } from "../../../../recoil/contact";

function ContactDetail() {
  const selectedMember = useRecoilValue(amember);

  const [nId, setNId] = useRecoilState(numberId);

  const [addMember, setAddMember] = useState({
    id: nId,
    name: "",
    department: "",
    phone: "",
    mail: "",
  });

  const [editState, setEditState] = useRecoilState(estate);

  // 신규 상태
  const addMemberState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddMember({...addMember,[e.target.name]:e.target.value});
  };

  // 수정 상태
  const editMemberState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddMember({...addMember,[e.target.name]:e.target.value});
  };
  // 수정하기 버튼
  const gotoEdit = () => {
    setEditState("edit");
  };
  return (
    <>
      <div className="details">
        {editState === "read" && selectedMember && selectedMember.id !== -1 ? (
          <ul className="info">
            <li>이름: {selectedMember.name}</li>
            <li>부서: {selectedMember.department}</li>
            <li>휴대폰: {selectedMember.phone}</li>
            <li>메일: {selectedMember.mail}</li>
            <li className="divide_Line">---------------------------------</li>
            <button className="delButton">삭제</button>
            <button className="editButton" onClick={gotoEdit}>
              수정
            </button>
          </ul>
        ) : editState === "edit" &&
          selectedMember &&
          selectedMember.id !== -1 ? (
          <ul className="edit">
            <li>
              이름: <input name="name" value={selectedMember.name} onChange={editMemberState}/>
            </li>
            <li>
              부서: <input name="department" value={selectedMember.department} onChange={editMemberState}/>
            </li>
            <li>
              휴대폰: <input name="phone" value={selectedMember.phone} onChange={editMemberState}/>
            </li>
            <li>
              메일: <input name="mail" value={selectedMember.mail} onChange={editMemberState}/>
            </li>
            <button className="saveButton">수정완료</button>
          </ul>
        ) : editState === "add" ? (
          <ul className="edit">
            <li>
              이름: <input name="name" value={addMember.name} onChange={addMemberState}/>
            </li>
            <li>
              부서: <input name="department" value={addMember.department} onChange={addMemberState} />
            </li>
            <li>
              휴대폰: <input name="phone" value={addMember.phone} onChange={addMemberState} />
            </li>
            <li>
              메일: <input name="mail" value={addMember.mail} onChange={addMemberState} />
            </li>
            <button className="saveButton">신규저장</button>
          </ul>
        ) : (
          <p className="emptyset">정보가 없습니다.</p>
        )}
      </div>
    </>
  );
}
export default ContactDetail;
