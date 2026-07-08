import useWuwaStore from "../../store/Store";

function ElementFilter() {

    const { selectedAttr, setSelectedAttr } = useWuwaStore();
    
    return (
        <div className="element-filter">
            <button
                className={`filter-btn all ${selectedAttr === "전체" ? "selected" : ""}`}
                onClick={() => setSelectedAttr("전체")}>
                    전체</button>
            <button
                className={`filter-btn fusion ${selectedAttr === "융융" ? "selected" : ""}`}
                onClick={() => setSelectedAttr("융융")}>
                    융융</button>
            <button
                className={`filter-btn glacio ${selectedAttr === "응결" ? "selected" : ""}`}
                onClick={() => setSelectedAttr("응결")}>
                    응결</button>
            <button
                className={`filter-btn aero ${selectedAttr === "기류" ? "selected" : ""}`}
                onClick={() => setSelectedAttr("기류")}>
                    기류</button>
            <button
                className={`filter-btn electro ${selectedAttr === "전도" ? "selected" : ""}`}
                onClick={() => setSelectedAttr("전도")}>
                    전도</button>
            <button
                className={`filter-btn spectro ${selectedAttr === "회절" ? "selected" : ""}`}
                onClick={() => setSelectedAttr("회절")}>
                    회절</button>
            <button
                className={`filter-btn havoc ${selectedAttr === "인멸" ? "selected" : ""}`}
                onClick={() => setSelectedAttr("인멸")}>
                    인멸</button>
        </div>
    )
}

export default ElementFilter;