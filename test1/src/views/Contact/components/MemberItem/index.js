function MemberItem(props) {
  const { member, buttonHandler } = props;
  return (
    <>
      <li key={member.id}>
        <button type="button" onClick={() => buttonHandler(member)}>{member.name}</button>
      </li>
    </>
  );
}
export default MemberItem;
