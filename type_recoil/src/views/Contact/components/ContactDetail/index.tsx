function ContactDetail(props : any) {
  const {selectedMember} = props;
  console.log(selectedMember);
  return (
    <>
      <div className="details">
        {(selectedMember) && (selectedMember.id !== -1)?
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
    </>
  );
}
export default ContactDetail;
