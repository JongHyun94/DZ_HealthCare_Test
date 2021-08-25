import { useRecoilValue, useSetRecoilState } from "recoil";
import { amember, estate, fmember, memberInfo } from "../../../../recoil/contact";

function MemberTable() {
  const filterMember = useRecoilValue<memberInfo[]>(fmember);

  const setMember = useSetRecoilState<memberInfo>(amember);

  const setEditState = useSetRecoilState<string>(estate);
  
  const buttonHandler = (member: memberInfo) => {
    setMember(member);
    setEditState("read");
  };
  return (
    <>
      <div className="contact-list">
        <ul>
          {filterMember.map((member) => {
            return (
              <li>
                <button type="button" onClick={() => buttonHandler(member)}>
                  {member.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default MemberTable;