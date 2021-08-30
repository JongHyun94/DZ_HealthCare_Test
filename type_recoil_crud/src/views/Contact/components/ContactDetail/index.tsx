import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  smember,
  fmember,
  amember,
  estate,
  memberInfo,
  keyword,
} from "../../../../recoil/contact";
import { createNewContact, deleteContact, getContactList, updateContact } from "../../../../utils/api/ApiService";

function ContactDetail() {
  const setContacts = useSetRecoilState<memberInfo[]>(smember);
  const setFilterContacts = useSetRecoilState<memberInfo[]>(fmember);
  const setKeyword = useSetRecoilState<string>(keyword);

  const [selectedMember, setSelectedMember] = useRecoilState<
    memberInfo | undefined
  >(amember);

  //const [nId, setNId] = useRecoilState(numberId);

  const [addMember, setAddMember] = useState<memberInfo>({
    id: undefined,
    name: "",
    deptName: "",
    phone: "",
    mail: "",
  });

  //const [editMember, setEditMember] = useState<memberInfo>();

  const [editState, setEditState] = useRecoilState(estate);

  // 신규 상태
  const addMemberState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddMember({ ...addMember, [e.target.name]: e.target.value });
  };

  // 수정 상태
  const editMemberState = (e: React.ChangeEvent<HTMLInputElement>) => {
    let editMember = JSON.parse(JSON.stringify(selectedMember));
    setSelectedMember({ ...editMember, [e.target.name]: e.target.value });
  };

  // 생성하기
  const createMemberButton = async () => {
    // 상태 데이터로 저장해보기

    // let newTotalMember = JSON.parse(JSON.stringify(totalMember));
    // newTotalMember.push(addMember);
    // setTotalMember(newTotalMember);
    // setTotalMember2(newTotalMember);
    // let id = JSON.parse(JSON.stringify(nId));
    // ++id;
    // setNId(id);

    // 디비 상으로 저장 해보기
    //console.log(addMember);
    await createNewContact(addMember);
    //console.log(result);

    // 초기화
    setEditState("");
    setAddMember({
      id: undefined,
      name: "",
      deptName: "",
      phone: "",
      mail: "",
    });
    setKeyword("");
  };

  // 수정 페이지 전환
  const editMemberButton = () => {
    setEditState("edit");
  };

  // 변경하기
  const editDoneMemberButton = async () => {
    // 수정하기 상태로 1
    // let newTotalMember = JSON.parse(JSON.stringify(totalMember));
    // let editMember = JSON.parse(JSON.stringify(selectedMember));
    // let renewTotalMember = newTotalMember.map((member: { id: number; }) => {
    //   if(member.id === editMember.id){
    //     return editMember;
    //   } else {
    //     return member;
    //   }
    // });
    // setTotalMember(renewTotalMember);
    // setTotalMember2(renewTotalMember);
    //console.log("edit:",selectedMember);
    await updateContact(selectedMember);
    //console.log(result);
    setEditState("");
    setKeyword("");
  };

  // 삭제하기
  const deleteMemberButton = async () => {
    // 삭제하기 상태로 1
    // let newTotalMember = JSON.parse(JSON.stringify(totalMember));
    // let editMember = JSON.parse(JSON.stringify(selectedMember));
    // setTotalMember(
    //   newTotalMember.filter((member: { id: number }) => (member.id !== editMember.id))
    // );
    // setTotalMember2(
    //   newTotalMember.filter((member: { id: number }) => (member.id !== editMember.id))
    // );

    // 삭제하기 디비로 2
    await deleteContact(selectedMember);
    //console.log(result);
    setEditState("");
    setKeyword("");
  };
  useEffect(()=>{
    const getContactsFromDB = async () => {
      let list = await getContactList();
      setContacts(list);
      setFilterContacts(list);
    };
    getContactsFromDB(); 
  },[editState, setContacts, setFilterContacts]);
  return (
    <>
      <div className="details">
        {editState === "read" && selectedMember && selectedMember.id !== undefined ? (
          <ul className="info">
            <li>이름: {selectedMember.name}</li>
            <li>부서: {selectedMember.deptName}</li>
            <li>휴대폰: {selectedMember.phone}</li>
            <li>메일: {selectedMember.mail}</li>
            <li className="divide_Line">---------------------------------</li>
            <button className="delButton" onClick={deleteMemberButton}>
              삭제
            </button>
            <button className="editButton" onClick={editMemberButton}>
              수정
            </button>
          </ul>
        ) : editState === "edit" &&
          selectedMember &&
          selectedMember.id !== -1 ? (
          <ul className="edit">
            <li>
              이름:{" "}
              <input
                name="name"
                value={selectedMember.name}
                onChange={editMemberState}
              />
            </li>
            <li>
              부서:{" "}
              <input
                name="deptName"
                value={selectedMember.deptName}
                onChange={editMemberState}
              />
            </li>
            <li>
              휴대폰:{" "}
              <input
                name="phone"
                value={selectedMember.phone}
                onChange={editMemberState}
              />
            </li>
            <li>
              메일:{" "}
              <input
                name="mail"
                value={selectedMember.mail}
                onChange={editMemberState}
              />
            </li>
            <button className="saveButton" onClick={editDoneMemberButton}>
              수정완료
            </button>
          </ul>
        ) : editState === "add" ? (
          <ul className="edit">
            <li>
              이름:{" "}
              <input
                name="name"
                value={addMember.name}
                onChange={addMemberState}
              />
            </li>
            <li>
              부서:{" "}
              <input
                name="deptName"
                value={addMember.deptName}
                onChange={addMemberState}
              />
            </li>
            <li>
              휴대폰:{" "}
              <input
                name="phone"
                value={addMember.phone}
                onChange={addMemberState}
              />
            </li>
            <li>
              메일:{" "}
              <input
                name="mail"
                value={addMember.mail}
                onChange={addMemberState}
              />
            </li>
            <button className="saveButton" onClick={createMemberButton}>
              신규저장
            </button>
          </ul>
        ) : (
          <p className="emptyset">정보가 없습니다.</p>
        )}
      </div>
    </>
  );
}
export default ContactDetail;
