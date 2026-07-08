import { create } from "zustand";

const useWuwaStore = create((set) => ({
  selectedAttr: "전체",

  setSelectedAttr: (attr) =>
    set({
      selectedAttr: attr,
    }),
}));

export default useWuwaStore;