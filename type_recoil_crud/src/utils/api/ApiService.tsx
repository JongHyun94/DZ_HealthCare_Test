import axios from "axios";

const MEMBER_API_URL = 'http://localhost:4000/contacts';

// 전체 목록 가져오기
export const getContactList = async () => {
    let list = await axios.get(MEMBER_API_URL);
    return list.data
};

// 연락처 하나 등록하기
export const createNewContact = async (newMember: any) => {
    console.log("new:",newMember);
    let result = await axios.post(MEMBER_API_URL, newMember);
    return result;
}

// 연락처 삭제하기 
export const deleteContact = async (deleteMember: any) => {
    console.log("delete:",deleteMember);
    let result = await axios.patch(MEMBER_API_URL, deleteMember);
    return result;
}

// 연락처 수정하기
export const updateContact = async (updateMember: any) => {
    console.log("update:",updateMember);
    let result = await axios.put(MEMBER_API_URL, updateMember);
    return result;
}