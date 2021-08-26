import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { amember, estate, fmember, keyword, memberInfo, smember } from "../../../../recoil/contact";

function SearchBox() {
  // 검색창 상태
  const [searchKeyword, setSearchKeyword] = useRecoilState(keyword);

  // 필터시키는 세터함수
  const setFilterMember = useSetRecoilState<memberInfo[]>(fmember);

  // 전체 원본 멤버리스트
  const origMember = useRecoilValue<memberInfo[]>(smember);

  // 선택된 멤버 초기화
  const setResetMember = useSetRecoilState(amember);

  const setEditState = useSetRecoilState(estate);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    let newTotalMember = JSON.parse(JSON.stringify(origMember));
    setFilterMember(
      newTotalMember.filter((member: { name: string | string[]; }) => {
        if (member.name.includes(e.target.value)) {
          return member;
        } 
      })
    );
    setResetMember({
      id: -1,
      name: "",
      department: "",
      phone: "",
      mail: "",
    });
  };

  const addButtonHandler = () => {
    setEditState("add");
  };

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="inp-sch"
          placeholder="검색어를 입력하세요."
          value={searchKeyword}
          onChange={searchHandler}
        />
        <button className="addButton" onClick={addButtonHandler}>
          추가
        </button>
      </div>
    </>
  );
}
export default SearchBox;
