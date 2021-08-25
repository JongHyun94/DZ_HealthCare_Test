function SearchBox(props : any) {
  const { searchKeyword, searchHandler } = props;

  return (
    <>
      <div className="search-box">
        <input type="text" className="inp-sch" placeholder="검색어를 입력하세요." value={searchKeyword} onChange={searchHandler} />
      </div>
    </>
  );
}
export default SearchBox;
