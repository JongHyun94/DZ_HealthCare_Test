import { atom } from 'recoil';

export interface memberInfo {
  id: number,
  name: string,
  department: string,
  phone: string,
  mail: string,
};

// 전체 멤버 리스트
export const smember = atom<memberInfo[]>({
  key: 'smember',
  default: [
    {
      id: 0,
      name:"박시현",
      department: "헬스케어",
      phone: "010-1111-1111",
      mail: "박시현@wehago.com"
   },
    {
      id: 1,
      name:"임도희",
      department: "헬스케어",
      phone: "010-2222-2222",
      mail: "임도희@wehago.com"
   },
    {
      id: 2,
      name:"이종현",
      department: "헬스케어",
      phone: "010-3333-3333",
      mail: "이종현@wehago.com"
    },
    {
      id: 3,
      name:"조민상",
      department: "헬스케어",
      phone: "010-4444-4444",
      mail: "조민상@wehago.com"
    },
    {
      id: 4,
      name:"윤서영",
      department: "헬스케어",
      phone: "010-5555-5555",
      mail: "윤서영@wehago.com"
    },
  ],
});
// filter된 멤버리스트
export const fmember = atom<memberInfo[]>({
  key: 'smember',
  default: smember,
});

// 선택된 멤버 
export const amember = atom<memberInfo | undefined>({
  key: 'smember',
  default: 
    {
      id: -1,
      name: "",
      department: "",
      phone: "",
      mail: ""
   },
});

export const estate = atom<string>({
  key: 'estate',
  default: "",
})