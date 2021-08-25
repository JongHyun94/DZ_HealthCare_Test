import { useRecoilState } from "recoil";
import { amember, memberInfo } from "../../../../recoil/contact";

function MemberItem() {
  //const { member, buttonHandler } = props;
  const [member, setMember] = useRecoilState<memberInfo>(amember);

  const buttonHandler = () => {

  };

  return (
    <>
      <li key={member.id}>
        <button type="button" onClick={() => buttonHandler(member)}>{member.name}</button>
      </li>
    </>
  );
}
export default MemberItem;
