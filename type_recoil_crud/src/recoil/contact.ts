import { atom } from "recoil";

export interface memberInfo {
  id: number;
  name: string;
  department: string;
  phone: string;
  mail: string;
}

// 전체 멤버 리스트
export const smember = atom<memberInfo[]>({
  key: "smember",
  default: [
    {
      id: 0,
      name: "박시현",
      department: "헬스케어",
      phone: "010-1111-1111",
      mail: "박시현@wehago.com",
    },
    {
      id: 1,
      name: "임도희",
      department: "헬스케어",
      phone: "010-2222-2222",
      mail: "임도희@wehago.com",
    },
    {
      id: 2,
      name: "이종현",
      department: "헬스케어",
      phone: "010-3333-3333",
      mail: "이종현@wehago.com",
    },
    {
      id: 3,
      name: "조민상",
      department: "헬스케어",
      phone: "010-4444-4444",
      mail: "조민상@wehago.com",
    },
    {
      id: 4,
      name: "윤서영",
      department: "헬스케어",
      phone: "010-5555-5555",
      mail: "윤서영@wehago.com",
    },
  ],
});
// filter된 멤버리스트
export const fmember = atom<memberInfo[]>({
  key: "fmember",
  default: smember,
});

// 선택된 멤버
export const amember = atom<memberInfo>({
  key: "amember",
  default: {
    id: -1,
    name: "",
    department: "",
    phone: "",
    mail: "",
  },
});

// 신규 생성 멤버 id
export const numberId = atom<number>({
  key: "numberId",
  default: 5,
});

// 상세 내역 상태
export const estate = atom<string>({
  key: "estate",
  default: "",
});

// 검색어
export const keyword = atom<string>({
  key: "keyword",
  default: "",
});
