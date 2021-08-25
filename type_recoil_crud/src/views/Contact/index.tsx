import ContactDetail from "./components/ContactDetail";
import MemberTable from "./components/MemberTable";
import SearchBox from "./components/SearchBox";

function Contact() {

  return (
    <div className="container">
      <h1 className="subject">이종현의 연락처</h1>
      <div className="contact-wrap">
        <div className="col left">
          <SearchBox/>
          <MemberTable />
        </div>
        <div className="col right">
          <ContactDetail />
        </div>
      </div>
    </div>
  );
}
export default Contact;
