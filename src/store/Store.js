import { create } from "zustand";

const useWuwaStore = create((set) => ({
  selectedAttr: "전체",
  parties: [["lucilla","suisui","yangyang-xuanling"], [], []],

  setSelectedAttr: (attr) =>
    set({
      selectedAttr: attr,
    }),
  setParties: (party) =>
    set({
      parties: party,
    }),
    
  newParties: (party) =>
    setParties([
      ...parties,
      []
    ]),

}));

export default useWuwaStore;