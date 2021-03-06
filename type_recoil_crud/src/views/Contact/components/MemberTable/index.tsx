import { useRecoilValue, useSetRecoilState } from "recoil";
import { amember, estate, fmember, memberInfo } from "../../../../recoil/contact";

function MemberTable() {
  //const origMember = useRecoilValue<memberInfo[]>(smember);
  
  const filterMember = useRecoilValue<memberInfo[]>(fmember);

  const setMember = useSetRecoilState<memberInfo | undefined>(amember);

  const setEditState = useSetRecoilState<string>(estate);
  
  const buttonHandler = (member: memberInfo) => {
    setMember(member);
    //console.log("select:",member);
    setEditState("read");
  };
  return (
    <>
      <div className="contact-list">
        <ul>
          {filterMember.map((member) => {
            return (
              <li key={member.id}>
                <button type="button" onClick={() => buttonHandler(member)}>
                  {member.name}
                </button>
              </li>
            );
          })
          }
        </ul>
      </div>
    </>
  );
}
export default MemberTable;
