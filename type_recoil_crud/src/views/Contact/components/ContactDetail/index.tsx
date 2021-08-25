import { useRecoilState, useRecoilValue } from "recoil";
import { amember, estate } from "../../../../recoil/contact";

function ContactDetail() {
  const selectedMember = useRecoilValue(amember);
  console.log(selectedMember);
  const [editState, setEditState] = useRecoilState(estate);

  const gotoEdit = () => {

  };
  return (
    <>
      <div className="details">
        {editState==="read" && selectedMember && selectedMember.id !== -1 ? (
          <ul className="info">
            <li>이름: {selectedMember.name}</li>
            <li>부서: {selectedMember.department}</li>
            <li>휴대폰: {selectedMember.phone}</li>
            <li>메일: {selectedMember.mail}</li>
            <li className="divide_Line">---------------------------------</li>
            <button className="delButton">삭제</button>
            <button className="editButton" onClick={gotoEdit}>수정</button> 
          </ul>
        ) : editState==="edit" && selectedMember && selectedMember.id !== -1 ? (
          <ul className="info">
            <li>이름: {selectedMember.name}</li>
            <li>부서: {selectedMember.department}</li>
            <li>휴대폰: {selectedMember.phone}</li>
            <li>메일: {selectedMember.mail}</li>
            <li className="divide_Line">---------------------------------</li>
            <button className="saveButton">저장</button>
          </ul>
        ) : (
          <p className="emptyset">정보가 없습니다.</p>
        )}
      </div>
    </>
  );
}
export default ContactDetail;
